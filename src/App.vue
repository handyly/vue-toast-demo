<template>
  <div id="app">
    <img src="./assets/logo.png" @click='showToast()'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showToast () {
      this.$toast('test')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
