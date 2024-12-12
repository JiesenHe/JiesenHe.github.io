<template>
  <div class="shopping-cart">
    <!-- 购物车头部 -->

    <van-sticky>
      <div style="background-color: #EEEEEE;height: 54px">
        <CartHeader/>
      </div>

    </van-sticky>
    <!-- 商品 -->

    <div v-for="shop in cartStore.shopList" :key="shop.shopId" class="shop-section">
      <ShopCard
          :shop="shop"
          :selected-goods="selectedGoods"
          @update-total-price="updateTotalPrice"
          @update-selected-goods="updateSelectedGoods"
      />
    </div>

    <!-- 结算的底部 -->
    <SettleFee :total-price="totalPrice" @click="navigateToCheckout"></SettleFee>

<!--    推荐推荐-->
    <div  class="fix-div-2" >
      <a class="fix-title">精彩推荐</a>
    </div>
    <div class="freight-container">
      <Commodity v-for="item in searchStore.recommendList" :key="item.id" :commodity="item" />
    </div>
    <div style="height: 110px"></div>
  </div>
</template>

<script lang="ts" setup>

import {useCartStore} from "@/stores/cart.ts";
const cartStore = useCartStore();
import {useSearchStore} from "@/stores/search.ts";
const searchStore = useSearchStore();
import { reactive, ref} from 'vue';
import { useRouter } from 'vue-router';
import { showFailToast } from 'vant';
import Commodity from "@/components/HomeView/commodity.vue";
const router = useRouter();

const selectedGoods = reactive<Record<string, boolean>>({});
const totalPrice = ref(0);

const updateTotalPrice = () => {
  totalPrice.value = cartStore.shopList.reduce((sum, shop) => {
    return (
        sum +
        shop.goodList.reduce((goodSum, good) => {
          const isSelected = selectedGoods[`${shop.shopId}-${good.id}`];
          return goodSum + (isSelected ? good.price * good.quantity : 0);
        }, 0)
    );
  }, 0);
};


// 更新选中的商品
const updateSelectedGoods = (selectedGoods: Record<string, boolean>) => {
  Object.assign(selectedGoods, selectedGoods);
  updateTotalPrice();
};


// 传递参数并跳转
const navigateToCheckout = () => {
  // 将 shopId 添加到每个商品对象中，确保在 filter 和其他操作中可以正确访问它
  // 在将商品展平时，使用 map 为每个商品附加它所属的 shopId。
  const selectedItems = cartStore.shopList.flatMap((shop) =>
      shop.goodList.map((good) => ({
        ...good,
        shopId: shop.shopId, // 将 shopId 添加到商品数据中
      }))
  ).filter((item) => selectedGoods[`${item.shopId}-${item.id}`]);


  // 判断是否选择商品
  if(selectedItems.length!==0){
    router.push({
      name: 'Settle',
      query: { items: JSON.stringify(selectedItems), totalPrice: totalPrice.value },
    });
  }
  else{
    showFailToast('无结算商品');
  }

};
</script>

<style scoped>
.shopping-cart {
  padding: 10px;
  font-family: Arial, sans-serif;
}

.shop-section {
  margin-bottom: 20px;
}

.tags .tag {
  display: inline-block;
  background-color: #e6f0ff;
  color: #0a59f7;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  margin-right: 4px;
}

.bottom-bar div {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
.fix-div-2{
  margin: 20px 0 10px 0;
  border-radius: 10px;
  overflow: hidden; /* 防止溢出 */
  padding: 10px  10px 10px 10px;
}
.fix-title{
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}
.freight-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* 响应式网格 */
  gap: 20px; /* 网格项之间的间距 */
  padding: 0px;
}

</style>
