<script setup lang="ts">
</script>

<template>
  <div class="video-container">
    <!-- 视频播放器 -->
    <video src="https://jvod.300hu.com/vod/product/1459093805/21852/0d2be62d73b54159b01e87116dbd6464.mp4" controls></video>
  </div>

  <!-- 商品链接卡牌 -->
  <router-link to="/detail" class="product-link">
  <div class="product-card">
    <img class="product-image" src="/public/images/freight3/7.jpg" alt="商品图片" />
    <div class="product-info">
      <p class="product-name">天选5Pro 锐龙AI版</p>
      <a class="product-detail">AI9HX 370 RTX4070 天青色</a>
      <div class="price-and-buy">
        <p class="product-price">￥ 11999</p>
        <button class="buy-now">购买</button>
      </div>
    </div>
  </div>
  </router-link>
  
</template>

<style scoped>
.video-container {
  position: relative;
  text-align: center;
}

.product-card {
  position: fixed;
  left: 20px;
  bottom: 80px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: auto;
  height: 80px; /* 控制高度，使卡牌整体大小合适 */
  padding: 2px 10px 5px 5px;
  display: flex; /* 水平排列内容 */
  flex-direction: row; /* 使内容水平排列 */
  align-items: center; /* 垂直居中对齐 */
  z-index: 1000;
}

.product-image {
  width: 60px; /* 调整图片宽度 */
  height: 60px; /* 固定高度，保持图片的比例 */
  object-fit: cover; /* 保持图片的覆盖方式 */
  border-radius: 5px;
  margin-right: 10px; /* 图片和其他内容之间的间距 */
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 商品信息垂直分布 */
  text-align: left;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 4px;
}
.product-detail {
  font-size: 12px;
  color: #777777;
  margin-bottom: 4px;
}

.price-and-buy {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 将价格和购买按钮平行显示 */
}

.product-price {
  font-size: 16px;
  color: #f44336;
  margin-right: 10px; /* 价格与按钮之间的间距 */
  position: relative;
  bottom: 2px; /* 调整价格垂直位置，使其位于图片右下角 */
}

.buy-now {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
  margin-left: 17%;
}

.buy-now:hover {
  background-color: #e64a19;
}
</style>
