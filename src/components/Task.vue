<template>
  <li
    @dblclick="toggleReminder(task._id)"
    :class="[
      task.reminder ? 'rem-border' : '',
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-start',
    ]"
  >
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{ task.description }}</div>
      {{ task.day }}
    </div>

    <span class="badge"
      ><i @click="deleteTask(task._id)" class="fas fa-times"></i
    ></span>

    <!-- <button @click="fetchTask(task._id)">clcik to get task</button> -->
  </li>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  name: "TaskComponent",
  props: {
    task: Object,
  },
  methods: {
    ...mapActions(['deleteTask','toggleReminder','fetchTask'])
  },
};
</script>


<style scoped>
.fa-times {
  color: red;
  font-size: 24px;
  cursor: pointer;
}

.rem-border {
  border-left: 3px solid #ffc048;
}
</style>