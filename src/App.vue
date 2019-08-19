<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  background-color: #edf2f7;
}

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
