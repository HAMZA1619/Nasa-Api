<template>
  
  <nasa msg="Welcome to Your Vue.js App"/>
  <!-- <Football /> -->
</template>

<script>
import Nasa from './components/Nasaa.vue'
// import Football from './components/Football.vue'

export default {
  name: 'App',
  components: {
    Nasa   ,
    // Football
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
