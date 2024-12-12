<template>
  <div>
    <button class="back-to" @click="clickLike">
      <van-icon name="share" size="30" color="white" />
      <span class="counter">{{ count }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function clickLike() {
  count.value++;
  console.log("分享了");
}
</script>

<style scoped>
.back-to {
  border: none;
  position: fixed;
  right: 10px;
  bottom: 100px;
  background-color: transparent;
  width: 38px;
  height: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter {
  margin-top: 5px;
  font-size: 14px;
  color: white;
}
</style>