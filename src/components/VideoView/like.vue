<template>
  <div>
    <button 
      class="back-to" 
      @touchstart="touchStart" 
      @touchend="touchEnd"
    >
      <van-icon :name="isLiked ? 'like' : 'like'" size="30" :color="isLiked ? 'red' : 'white'" />
      <span class="counter">{{ count }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);  // 用来记录点赞次数
const isLiked = ref(false);  // 用来跟踪是否点赞

// 触摸开始，爱心变红并增加计数
function touchStart() {
  if (!isLiked.value) {
    count.value++;  // 只有在未点赞的情况下，才会增加计数
  }
  isLiked.value = true;  // 爱心变红
}

// 触摸结束，爱心恢复为白色
function touchEnd() {
  isLiked.value = false;  // 爱心变回白色
}
</script>

<style scoped>
.back-to {
  border: none;
  position: fixed;
  right: 10px;
  bottom: 280px;
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
