<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['0'])

import { useRouter } from 'vue-router'

// 获取 router 实例
const router = useRouter()

// 退出登录方法
const logout = () => {
  // 清除本地存储的 token
  sessionStorage.removeItem('token')

  // 提示用户已退出登录
  alert('已退出登录')

  // 跳转到登录页或其他页面
  router.push('/user')  // 假设登录页路由是 /login
}

const goBack = () => {
  // 使用 window.history.back() 返回上一页
  window.history.back();
};
</script>

<template>
  <view class="viewport">
    <!-- 设置标题和返回按钮 -->
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />

    <div class="fix-div">
      <view class="list">
        <van-cell title="我的收货地址"  class="cell-item" />
        <van-cell title="授权管理"   class="cell-item" />
        <van-cell title="问题反馈"   class="cell-item" />
        <van-cell title="联系我们"   class="cell-item" />
        <van-collapse v-model="activeNames">
          <van-collapse-item title="关于VigorMall" name="1">
            在科技飞速发展的时代浪潮中，VigorMall 应势而生，怀揣着对数码世界的无限热忱与独特见解，致力于打造一个全方位、高品质的手机电脑数码电子商城，为广大数码爱好者与消费者提供极致体验与专业服务。
          </van-collapse-item>
        </van-collapse>
        <van-cell title="Gitee仓库"  is-link :url="'https://gitee.com/jiesenhe/vigor-mall'"  class="cell-item" />
      </view>

      <!-- 操作按钮 -->
      <div class="action" >
        <van-button color="#2C75C1FF" class="button" @click="logout">退出登录</van-button>
      </div>
    </div>

  </view>
</template>



<style>
page {
  background-color: #f4f4f4;
}

.viewport {
  padding: 20rpx;
}

/* 列表 */
.list {
  margin-bottom: 40rpx;
}

.list .van-cell {
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 10rpx;
  border-radius: 10rpx;
}

/* 自定义文本对齐样式 */
.cell-item .van-cell__title {
  padding-left: 40rpx;  /* 向右移动文本 */
}

/* 操作按钮 */
.action {
  text-align: center;
  margin-top: 20px;
}

.button {
  width: 100%;
  border-radius: 10rpx;
}

.fix-div{
  margin: 10px 20px 0px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden; /* 防止溢出 */
  padding: 10px  10px 10px 10px;
  --van-card-background: white;
}
</style>
