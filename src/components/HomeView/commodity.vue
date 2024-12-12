<script lang="ts">
import { defineComponent, PropType } from 'vue';
import router from '@/router';


interface Commodity {
  id: number;
  name: string;
  description: string;
  price: string;
  beforPrice: string;
  image: string;
  tag: string[];
}

export default defineComponent({
  name: 'Commodity',
  props: {
    commodity: {
      type: Object as PropType<Commodity>,
      required: true,
    },
  },
  methods: {
    toDetail() {
      router.push('/detail');
    },
  },
  setup() {
    return {};
  },
});

</script>

<template>
  <div class="commodity-container" @click="toDetail">
    <div class="image-container">
      <img :src="commodity.image" alt="商品图片" />
    </div>
    <div class="tag-container">
      <span v-for="tag in commodity.tag" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="name">{{ commodity.name }}</div>
    <div class="description">{{ commodity.description }}</div>
    <div class="price-container">
      <span class="price">¥ {{ commodity.price }}</span>
      <span class="before-price">¥ {{ commodity.beforPrice }}</span>
    </div>
  </div>
</template>



<style scoped>
.commodity-container {
  width: 100%;
  padding: 10px;
  box-sizing: border-box; /* 包含内边距的宽度计算 */
  background-color: #fff; /* 添加背景颜色以提高可见性 */
  border-radius: 8px; /* 圆角 */
  overflow: hidden; /* 防止图片溢出 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 微妙的阴影 */
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block; /*防止图片下方出现空白*/
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.tag {
  background-color: rgba(98,160,230,0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 4px;
  font-size: 12px;
}

.name {
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis; /*长名称添加省略号*/
  white-space: nowrap; /*防止文本换行*/
}

.description {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis; /*长描述添加省略号*/
  display: -webkit-box;
  -webkit-line-clamp: 2; /*限制为两行*/
  -webkit-box-orient: vertical;
}

.price-container {
  margin-top: 8px;
  display: flex;
  align-items: flex-end;
}

.price {
  font-size: 18px;
  color: black;
  font-weight: bold;
}

.before-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-left: 8px;
}


</style>