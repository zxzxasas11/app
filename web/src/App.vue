<template>
  <div id="app">
    <router-view/>
    <canvas id="canvas" width="500" height="400" style="position:absolute;top:0;left:0;">
      您的浏览器不支持canvas标签。
    </canvas>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    //const ss = require("./assets/js/test");
    //ss();
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
  font-size:14px;
  height:100%;
}
</style>
