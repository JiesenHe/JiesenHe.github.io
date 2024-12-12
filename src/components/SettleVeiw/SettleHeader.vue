<template>
  <!-- 返回的操作 -->
  <div class="container">
    <div class="back" @click="onClickback">
      <img src="/images/icon/back.svg" style="height:20px;margin-bottom: -5px">
    </div>
    <div class="title">订单结算</div>
  </div>
  
</template>
<script setup>
  // 返回的逻辑
  const onClickback = () => {
    window.history.back();
  };
</script>
<style scoped>
  .container{
    width: 100%;
    display: flex;
    align-items: center;

    padding: 0 0;
    height: 50px;
    background-color: #fff;
  }
  .back{
    padding-left: 20px;
  }
  .title{
    width: 80%;
    font-size: 20px;
    font-weight: 600;
    color: black;
    text-align: center;
  }
</style>