<template>
  <div class="good-card" @click="handleCardClick">
  <van-checkbox
    v-model="selectedGoods[`${shopId}-${good.id}`]"
    shape="round"
    @click="updateSelectedGoods"
    class="prevent-checkbox"
  />
  <img :src="good.image" class="good-image" />
  <div class="good-info">
    <div class="good-name">{{ good.name }}</div>
    <p class="tags">
      <van-tag plain type="primary" v-for="tag in good.tag" :key="tag" class="tag">{{ tag }}</van-tag>
    </p>
    <div class="prise-quantity">
      <div class="price">￥{{ good.price }}</div>
      <div class="quantity-control">
        <button @click="decrementQuantity" class="cacul-button">-</button>
        <span class="quantity">{{ good.quantity }}</span>
        <button @click="incrementQuantity" class="cacul-button">+</button>
      </div>
    </div>
  </div>
</div>

</template>

<script lang="ts" setup>
import { defineProps, defineEmits,PropType } from 'vue';
import { useRouter } from 'vue-router';

// 定义 props
const props = defineProps({
  good: {
    type: Object as PropType<{ id: number; name: string; price: number; quantity: number; image: string; tag: string[] }>,
    required: true,
  },
  shopId: {
    type: String,
    required: true,
  },
  selectedGoods: {
    type: Object as PropType<Record<string, boolean>>,
    required: true,
  },
});

// 定义 emits
const emit = defineEmits(['update-total-price', 'update-selected-goods']);

// 增加商品数量
const incrementQuantity = () => {
  props.good.quantity += 1;
  emit('update-total-price');
};

// 减少商品数量
const decrementQuantity = () => {
  if (props.good.quantity > 1) {
    props.good.quantity -= 1;
    emit('update-total-price');
  }
};

// 更新选中的商品
const updateSelectedGoods = (event: MouseEvent) => {
  event.stopPropagation();  // 阻止事件冒泡
  emit('update-selected-goods', props.selectedGoods);
};


const router = useRouter();
const handleCardClick = (event: MouseEvent): void => {
  // 跳转到商品详情页
  
  const navTo = ()=>{
    router.push({ name: 'Detail' }); 
  }

  // 获取点击的目标元素,通过类型断言将 event.target 指定为 HTMLElement
  const target = event.target as HTMLElement;

  // 如果点击的是复选框或 prise-quantity 类的元素，什么都不做
  if (target.closest('prevent-checkbox') || target.closest('.prise-quantity')) {
    
    return;
  }
  else{
    navTo();
  }
  
};

</script>

<style scoped>
.good-card {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}
.good-name{
  font-size: 16px;
  color: black;
  margin-bottom: 3px;
}
.good-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
}
.tag{
  margin-right: 5px;
}
.good-info {
  flex: 1;
}
.prise-quantity{
  width: 90%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}
.price{
  font-size: 18px;
  font-weight: 600;
  color: #62A0E6CC;
}
.quantity-control {
  display: flex;
  align-items: center;
}
.cacul-button{
  width: 15px;
  height: 15px;
  border: none;
  font-size: 15px;
  line-height: 15px;
}
.quantity {
  margin: 0 10px;
  font-size: 16px;
}
</style>
