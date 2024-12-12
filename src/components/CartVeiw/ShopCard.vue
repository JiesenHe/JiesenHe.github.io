<template>
  <div class="shop-section">
    <div class="shop-name"><van-icon name="fire" class="icon-fire"/>{{ shop.shopName }}</div>
    <div v-for="good in shop.goodList" :key="good.id">
      <GoodsCard 
        :good="good" 
        :shop-id="shop.shopId" 
        :selected-goods="selectedGoods" 
        @update-total-price="updateTotalPrice" 
        @update-selected-goods="updateSelectedGoods"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { PropType } from 'vue';

// 定义 props
defineProps({
  shop: {
    type: Object as PropType<{ shopId: string; shopName: string; goodList: any[] }>,
    required: true,
  },
  selectedGoods: {
    type: Object as PropType<Record<string, boolean>>,
    required: true,
  },
});

// 定义 emits
const emit = defineEmits(['update-total-price', 'update-selected-goods']);

// 更新总价格
const updateTotalPrice = () => {
  emit('update-total-price');
};

// 更新选中的商品
const updateSelectedGoods = (selectedGoods: Record<string, boolean>) => {
  emit('update-selected-goods', selectedGoods);
};
</script>
<style scoped>
.shop-section {
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
}

.shop-name {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  color: black;
  padding: 10px 0 0 10px;
}
.icon-fire{
  color: #62A0E6CC;
}
</style>
