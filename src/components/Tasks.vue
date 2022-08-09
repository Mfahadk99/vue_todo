<template>
  <div class="border border-dark p-3">
    <h1>To Do</h1>
    <ol
      :key="task.id"
      v-for="task in tasks"
      class="list-group mt-2"
    >
      <Task :task="task" />
    </ol>
  </div>
</template>

<script>
import Task from "./Task.vue";
import {mapActions,mapState} from 'vuex'
export default {
  name: "TasksComponent",
  components: {
    Task,
  },
  methods:{
    ...mapActions(['fetchTasks','toggleReminder'])
    
  },
  computed: {
    ...mapState(["tasks"]),
  },
  async created(){
    this.fetchTasks();
  }
};
</script>

<style scoped>
.todoBorder{
    border: 1px solid red;
}
</style>


