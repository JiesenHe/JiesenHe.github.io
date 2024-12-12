<script setup lang="ts">
import {useFunctionStore}  from "@/stores/function.ts";
const functionStore = useFunctionStore();

</script>

<template>
  <div class="fix-swipe">
    <van-swipe :autoplay="3000" lazy-render  indicator-color="#ffffff">
      <van-swipe-item v-for="image in functionStore.swipes" :key="image.id">
        <img  :src="image.path" />
      </van-swipe-item>
    </van-swipe>
  </div>

</template>

<style scoped>
.fix-swipe{
  margin: 10px 20px 0px 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.fix-swipe img{
  width: 100%;
  height: auto;
  display: block;
}
</style>