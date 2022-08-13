export default {
    state() {
        return {
            tasks: [],
        }
    },
    mutations: {
        async setTasks(state, payload) {
            state.tasks = await payload
        },
        removeTask(state, payload) {
            state.tasks = state.tasks.filter((data) => {
                return data.id != payload;
            })
        },

        async newTask(state, payload) {
            state.tasks = [...state.tasks, await payload];
        },

        toggle(state, payload) {
            state.tasks = state.tasks.map((data) => {
                return data.id === payload.id ? { ...data, reminder: payload.UpdData.reminder } : data;
            });
        }
    },
    actions: {
        async fetchTasks(context) {
            const res = await fetch("api/tasks");

            const data = await res.json();
            context.commit('setTasks', data)
            return data;
        },
        async fetchTask(context, id) {
            const res = await fetch(`api/tasks/${id}`);
            console.log("id===>", id)
            const data = await res.json();

            return data;
        },
        async toggleReminder(context, id) {
            const taskToToggle = await context.dispatch('fetchTask', id);
            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

            const res = await fetch(`api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(updTask),
            });

            const UpdData = await res.json();
            context.commit('toggle', { UpdData, id })
        },
        async deleteTask(context, id) {
            if (confirm("are you sure ?")) {
                const res = await fetch(`api/tasks/${id}`, {
                    method: "DELETE",
                });

                res.status === 200
                    ? context.commit('removeTask', id)
                    : alert("Error deleting task");

                console.log("calleddd")
            }
        },

        async addTask(context, task) {
            const res = await fetch("api/tasks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(task),
            });

            const data = await res.json();
            context.commit('newTask', data)
        },
    }
}