<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <button class="back-to-top" @click="scrollToTop">
    <van-icon name="back-top" size="20" color="#777777"/>
  </button>
</template>

<style scoped>
  .back-to-top {
    padding-top: 3px;
    position: fixed;
    right: 20px;
    bottom: 80px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
</style>