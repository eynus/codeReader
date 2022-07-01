<template>
  <div id="app">
    <tb1 />
    <tb2 />
    <tb3 />
  </div>
</template>

<script>
  import tb1 from './components/tb1.vue'
  import tb2 from './components/tb2.vue'
  import tb3 from './components/tb3.vue'

  export default {
    name: 'App',
    components: {
      tb1,
      tb2,
      tb3,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
