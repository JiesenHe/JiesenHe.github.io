<script setup lang="ts">
const props = defineProps({
  totalPrice: Number 
});
</script>
<template>
  <div class="clacu-fix">
    <div class="container">
      <div class="heji-font">
        合计:
      </div>
      <div class="fee">
        ￥<a><span/>{{ props.totalPrice }}</a>
      </div>
      <div class="go-pay">
        <a>结算</a>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
  .clacu-fix{
    width: 100%;
    height: 66px;
    position: fixed;
    bottom: 44px;
    left: 0;
    background: linear-gradient(to top, #EEEEEE, #fff);
  }
  .heji-font{
    margin-top:5px;
    font-size: 16px;
    color: black;
  }
  .container{
    float:right;
    display: flex;
    align-items: center;
  }
  .fee{
    font-size:18px;
    color: black;
  }
  .fee a{
    font-size:25px;
    color: black;
  }
  .go-pay{
    width: 100px;
    height: 40px;
    background-color: #195693;
    font-size:28px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    margin: 10px;
  }
  .go-pay a{
    color: white;
    font-size: 25px;
  }
</style>