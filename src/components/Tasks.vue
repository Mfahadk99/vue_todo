<template>
  <div class="border border-dark p-3">
    <h1>To Do</h1>
    <ol
      :key="task.id"
      v-for="task in tasks"
      class="list-group mt-2"
    >
      <Task
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
    </ol>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "TasksComponent",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>

<style scoped>
.todoBorder{
    border: 1px solid red;
}
</style>


