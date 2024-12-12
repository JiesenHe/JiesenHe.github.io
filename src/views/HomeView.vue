<script setup lang="ts">
  import {useFunctionStore}  from "@/stores/function.ts";
  import { useFreightStore } from "@/stores/freight.ts";
  import {ref} from "vue";
  import Swipe from "@/components/HomeView/Swipe.vue";

  const freightStore = useFreightStore();
  const functionStore = useFunctionStore();
  let nav = ref(0);

</script>

<template>
  <Topbar/>
  <van-tabs v-model:active="nav" color="#0A59F7" background="#EEEEEE" sticky offset-top="62">
    <van-tab title="推荐">
      <Swipe/>
      <div class="fix-grid">
        <van-grid :column-num="4" >
          <van-grid-item
              v-for="index in functionStore.function"
              :key="index.id"
              :icon="index.images"
              :text="index.name"
          >
          </van-grid-item>
        </van-grid>
      </div>
      <div class="freight-container">
        <Commodity v-for="item in freightStore.freight1" :key="item.id" :commodity="item" />
      </div>
    </van-tab>
    <van-tab title="移动设备">
      <div class="freight-container">
        <Commodity v-for="item in freightStore.freight2" :key="item.id" :commodity="item" />
      </div>
    </van-tab>
    <van-tab title="个人电脑">
      <div class="freight-container">
        <Commodity v-for="item in freightStore.freight3" :key="item.id" :commodity="item" />
      </div>
    </van-tab>
  </van-tabs>





  <div class="loading-container">
    <van-loading size="24px">加载中...</van-loading>
  </div>

</template>

<style scoped>
.fix-grid {
  --van-grid-item-icon-size:50px;
  --van-grid-item-content-padding:1px 0px;/*上下 左右*/
  --van-grid-item-content-background:#EEEEEE;
  padding-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
.freight-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* 响应式网格 */
  gap: 20px; /* 网格项之间的间距 */
  padding: 20px;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
</style>