<template>
  <div>
    <AddTask  />
  </div>
  <div class="todo mt-4">
    <Tasks />
  </div>
</template>


<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
  }
};
</script>