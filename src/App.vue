<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <IndexVue></IndexVue>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import IndexVue from './components/Index.vue'
export default {
  name: 'App',
  components: {
    IndexVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
