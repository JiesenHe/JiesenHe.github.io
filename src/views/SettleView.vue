
<template>
  <settle-header></settle-header>
  <div class="settle">



    <div v-if="loading">加载中...</div>

    <!-- 收获地址列表 -->
    <div class="title">
      <div style="height: 60px"></div>
      <a>收货地址</a>
    </div>
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        :show-add-button="false"
        class="my-address-list"
    />

    <!-- 商品列表 -->
    <div  class="title">
      <a>商品清单</a>
    </div>
    <div v-for="(item, index) in selectedItems" :key="index" class="good-item">
      <img :src="item.image" class="item-image" />
      <div class="item-info">
        <h2 class="item-name">{{ item.name }}</h2>
        <p class="item-price">价格: ￥{{ item.price }}</p>
        <p class="item-quantity">数量: {{ item.quantity }}</p>
      </div>
    </div>

    <!-- 总价结算 -->
    <div class="clacu-fix">
      <div class="container">
        <div class="heji-font">
          合计:
        </div>
        <div class="fee">
          ￥<a><span/>{{ totalPrice }}</a>
        </div>
        <router-link to="/home">
          <div class="go-pay">
            <a>付款</a>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
// 添加联系人的逻辑
const chosenAddressId = ref('1');
const list = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true,
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省杭州市拱墅区莫干山路 50 号',
  },
];
const disabledList = [
  {
    id: '3',
    name: '王五',
    tel: '1320000000',
    address: '浙江省杭州市滨江区江南大道 15 号',
  },
];

// 被选中元素的渲染
const route = useRoute();

// 定义商品类型
interface Good {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  tag: string[];
  shopId: string;
}
// 给 selectedItems 添加类型
const selectedItems = ref<Good[]>([]);

const totalPrice = ref(0);
const loading = ref(true);
const parseRouteQuery = () => {
  try {
    selectedItems.value = route.query.items
        ? JSON.parse(route.query.items as string)
        : [];
    totalPrice.value = route.query.totalPrice
        ? Number(route.query.totalPrice)
        : 0;
  } catch (error) {
    console.error("解析路由参数失败:", error);
    selectedItems.value = [];
    totalPrice.value = 0;
  } finally {
    loading.value = false;
  }
};

watch(
    () => route.query,
    () => {
      loading.value = true;
      parseRouteQuery();
    },
    { immediate: true }
);
</script>

<style scoped>
.title{
  margin-left: 20px;
}
.title a{
  margin-top: 20px;
  font-size: 20px;
  color: black;
}
.my-address-list{
  padding: 10px 20px 10px 20px;
  background-color: #eeeeee;
}

.good-item {
  /* width: 90%; */
  margin: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.item-info{
  width:230px;
}
.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-left: 10px;
}

.item-name {
  font-size: 18px;
  color: #000000;
}

.item-price,
.item-quantity {
  font-size: 14px;
  color: #555;
}

.clacu-fix{
  width: 100%;
  height: 66px;
  position: fixed;
  bottom: 0px;
  left: 0;
  background:#fff;
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