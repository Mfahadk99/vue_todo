import { createStore } from 'vuex';
import axios from 'axios'
const store = createStore({
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
                return data._id === payload.id ? { ...data, reminder: payload.UpdData.reminder } : data;
            });
        }
    },
    actions: {
        async fetchTasks(context) {
            // const res = await fetch("api/tasks");
            const res = await axios.get("http://localhost:9000");
            const data = await res.data;
            context.commit('setTasks', data)
            return data;
        },
        async fetchTask(context, id) {
            const res = await axios.get(`http://localhost:9000/api/tasks/${id}`);
            // const res = await fetch(`api/tasks/${id}`);
            const data = await res.data;

            return data;
        },
        async toggleReminder(context, id) {

            const res = await axios.put(`http://localhost:9000/api/tasks/${id}`, { id })

            const UpdData = await res.data;
            console.log(UpdData)
            context.commit('toggle', { UpdData, id })
        },
        async deleteTask(context, id) {
            if (confirm("are you sure ?")) {
                const res = await fetch(`api/tasks/${id}`, {
                    method: "DELETE",
                });
                // const res = await axios.delete(`http://localhost:9000/api/tasks/${id}`, { id });

                // console.log(res.data);

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
    },
    modules: {

    }
})


export default store