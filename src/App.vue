<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
</style>
