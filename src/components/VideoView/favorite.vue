<template>
  <div>
    <button class="back-to" @click="clickLike">
      <van-icon :name="isLiked ? 'star' : 'star'" size="30" :color="isLiked ? 'yellow' : 'white'" />
      <span class="counter">{{ count }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);  // 用来记录数字
const isLiked = ref(false);  // 用来跟踪是否已点击

function clickLike() {
  if (isLiked.value) {
    count.value--;  // 如果已经是黄色，则数字减一
  } else {
    count.value++;  // 如果是白色，则数字加一
  }
  isLiked.value = !isLiked.value;  // 切换点赞状态
}
</script>

<style scoped>
.back-to {
  border: none;
  position: fixed;
  right: 10px;
  bottom: 160px;
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
