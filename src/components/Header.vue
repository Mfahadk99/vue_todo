<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add item" color="green"></Button>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "HeaderComponent",
  props: {
    title: String,
  },
  components: {
    Button
  }
};
</script>


<style scoped>
</style>
