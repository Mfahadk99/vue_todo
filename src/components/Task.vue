<template>
  <li
    @dblclick="$emit('toggle-reminder', task.id)"
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
      ><i @click="$emit('delete-task', task.id)" class="fas fa-times"></i
    ></span>
  </li>
</template>

<script>
export default {
  name: "TaskComponent",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
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