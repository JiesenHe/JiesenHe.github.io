<script setup lang="ts">
  import { ref } from 'vue';
  import router from '@/router';
  const value = ref('');

  const onClickScan = () => {
    console.log('onClickScan');
  };
  const toSearch = () => {
    router.push('/search');
  };

</script>

<template>

  <van-sticky>
    <van-search
        v-model="value"
        shape="round"
        background="#EEEEEE"
        placeholder="请输入搜索关键词"
        show-action
        @focus="toSearch"
    >
      <template #action>
        <van-icon @click="onClickScan" name="scan" size=25 style="margin-top: 10px"/>
      </template>
    </van-search>
  </van-sticky>

</template>

<style scoped>
</style>