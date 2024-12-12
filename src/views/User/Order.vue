<script setup lang="ts">
import {useOrderStore} from "@/stores/order.ts";
import {useSearchStore} from "@/stores/search.ts";
const searchStore = useSearchStore();
const orderStore = useOrderStore();
import { ref } from 'vue';
import Commodity from "@/components/HomeView/commodity.vue";
const goBack = () => {
  window.history.back();
};
const active = ref(0);

</script>

<template>
<view>
  <van-nav-bar
  title="订单列表"
  left-text="返回"
  left-arrow
  @click-left="goBack"
  />
  <van-tabs v-model:active="active" >
    <van-tab title="全部订单">
      <div class="fix-div" v-for="item in orderStore.order0">
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.description"
          :title="item.name"
          :thumb="item.image"
        >
          <template #tags>
            <a style="margin-right: 10px" v-for="tag in item.tag">
              <van-tag plain type="primary">{{tag}}</van-tag>
            </a>
          </template>
          <template #footer>
            <a  style="margin-right: 69%;margin-top: 20px;"><van-button size="mini">更多</van-button></a>
            <van-button size="mini">订单详情</van-button>
          </template>
        </van-card>
      </div>
    </van-tab>
    <van-tab title="待付款">
      <div class="fix-div" v-for="item in orderStore.order1">
        <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.image"
        >
          <template #tags>
            <a style="margin-right: 10px" v-for="tag in item.tag">
              <van-tag plain type="primary">{{tag}}</van-tag>
            </a>
          </template>
          <template #footer>
            <a  style="margin-right: 33%;margin-top: 20px;"><van-button size="mini">更多</van-button></a>
            <van-button size="mini">申请开票</van-button>
            <van-button size="mini">重选规格</van-button>
            <van-button size="mini">立即付款</van-button>
          </template>
        </van-card>
      </div>
    </van-tab>
    <van-tab title="待发货">
      <div class="fix-div" v-for="item in orderStore.order2">
        <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.image"
        >
          <template #tags>
            <a style="margin-right: 10px" v-for="tag in item.tag">
              <van-tag plain type="primary">{{tag}}</van-tag>
            </a>
          </template>
          <template #footer>
            <a  style="margin-right: 33%;margin-top: 20px;"><van-button size="mini">更多</van-button></a>
            <van-button size="mini">申请开票</van-button>
            <van-button size="mini">联系卖家</van-button>
            <van-button size="mini">取消订单</van-button>
          </template>
        </van-card>
      </div>
    </van-tab>
    <van-tab title="待收货">
      <div class="fix-div" v-for="item in orderStore.order3">
        <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.image"
        >
          <template #tags>
            <a style="margin-right: 10px" v-for="tag in item.tag">
              <van-tag plain type="primary">{{tag}}</van-tag>
            </a>
          </template>
          <template #footer>
            <a  style="margin-right: 33%;margin-top: 20px;"><van-button size="mini">更多</van-button></a>
            <van-button size="mini">申请保价</van-button>
            <van-button size="mini">联系卖家</van-button>
            <van-button size="mini">确认收货</van-button>
          </template>
        </van-card>
      </div>
    </van-tab>
    <van-tab title="待评价">
      <div class="fix-div" v-for="item in orderStore.order4">
        <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.image"
        >
          <template #tags>
            <a style="margin-right: 10px" v-for="tag in item.tag">
              <van-tag plain type="primary">{{tag}}</van-tag>
            </a>
          </template>
          <template #footer>
            <a  style="margin-right: 33%;margin-top: 20px;"><van-button size="mini">更多</van-button></a>
            <van-button size="mini">申请开票</van-button>
            <van-button size="mini">申请售后</van-button>
            <van-button size="mini">立刻评价</van-button>
          </template>
        </van-card>
      </div>
    </van-tab>

    <div  class="fix-div-2" >
      <a class="fix-title">今日推荐</a>
    </div>
    <div class="freight-container">
      <Commodity v-for="item in searchStore.recommendList" :key="item.id" :commodity="item" />
    </div>

    <div class="loading-container">
      <van-loading size="24px">加载中...</van-loading>
    </div>
  </van-tabs>
</view>
</template>

<style scoped>
.fix-div{
  margin: 10px 20px 0px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden; /* 防止溢出 */
  padding: 2px  -5px 2px -5px;
  --van-card-background: white;
}
.fix-div-2{
  margin: 20px 20px 0 20px;
  border-radius: 10px;
  overflow: hidden; /* 防止溢出 */
  padding: 10px  10px 0px 10px;
}
.fix-title{
  font-size: 12px;
  font-weight: bold;
  color: #777777;
}
.freight-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* 响应式网格 */
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