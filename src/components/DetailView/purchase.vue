<script lang="ts" setup>
import router from '@/router';



function  handleClick(label: string) {
  if (label === '首页') {
    router.push({ path: '/home' });
  } else if (label === '客服') {
    router.push({ path: '/chat' });
  } else if (label === '购物车') {
    router.push({ path: '/cart' });
  }
}

function tempclick(val: number) {
  if (val === 1) {
    console.log('加入购物车');
  } else if (val === 2) {
    console.log('立即购买');
  }
}

</script>

<template>
  <div class="tabbar">
    <div class="func-mini" @click="handleClick('首页')">
      <van-icon name="home-o" size="22" color="#000000"/>
      <a>首页</a>
    </div>
    <div class="func-mini" @click="handleClick('客服')">
      <van-icon name="service-o" size="22" color="#000000"/>
      <a>客服</a>
    </div>
    <div class="func-mini" @click="handleClick('购物车')">
      <van-icon name="shopping-cart-o" size="22" color="#000000"/>
      <a>购物车</a>
    </div>

    <div class="func-big func-big-l" @click="tempclick(1)">
      <a>加入购物车</a>
    </div>
    <div class="func-big func-big-r" @click="tempclick(2)">
      <a>立即购买</a>
    </div>

  </div>
</template>

<style scoped>
.tabbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #EEEEEE;
  padding-left: 10px;
  padding-right: 10px;
}
.tabbar div {
  cursor: pointer;
  text-align: center;
}
.func-mini{
  display: flex;
  flex-direction: column;
}
.func-mini {
  margin-top: 2px;
}
.func-big{
  width: 80px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
}
.func-big-l{
  background-color: #777777;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  margin-right: -10px;
  width: 100px;
  padding-right: 5px;
}
.func-big-r{
  background-color: red;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: -10px;
}
.func-big a{
  font-size: 16px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  color: #ffffff;
}

</style>