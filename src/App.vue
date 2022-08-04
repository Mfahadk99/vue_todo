<template>
  <div class="main__container">
    <div class="text-center w-100">
      <img alt="Vue logo" style="width: 250px" src="./assets/logo.png" />
    </div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Footer
  },
};
</script>

<style>
.main__container {
  width: 80%;
  margin: auto;
  /* text-align: center; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
  box-sizing: border-box;
}
</style>

