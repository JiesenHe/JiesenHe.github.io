<script setup lang="ts" name="App">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router'
  const router = useRoute()
  let active = ref(0);
</script>

<template>
  <div class="app">
    <router-view/>
    <van-tabbar v-model="active" active-color="2E6BDFDB" v-show="router.meta.isShow">
      <van-tabbar-item icon="fire-o" to="/home">精选</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
<!--      <van-tabbar-item icon="chat-o" to="/chat">聊天</van-tabbar-item>-->
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.app{
  background: #EEEEEE;
  --van-tabbar-background:#EEEEEE;
  --van-tabbar-item-active-background:#EEEEEE;
  color: rgba(46, 107, 223, 0.86);
}
</style>
