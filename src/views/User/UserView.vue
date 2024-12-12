  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRouter } from 'vue-router';
  import {useSearchStore} from "@/stores/search.ts";
  const searchStore = useSearchStore();
  import axios from 'axios'
  import Commodity from "@/components/HomeView/commodity.vue";
  const router = useRouter();

  // 用于存储登录状态和用户信息
  const isLoggedIn = ref(false);
  const user = ref({
    username: "1", // 初始化为空
    image: "https://foruda.gitee.com/avatar/1724745730299247517/13849556_jiesenhe_1724745730.png!avatar200",
    name:"JiesenHe",
  });

  const getUserAPI = async (id: number) => {
    try {
      const res = await axios.get(`http://localhost:8080/emps/${id}`);
      if (res.data.code === 1) {
        const data = res.data.data;
        user.value.username = data.username;
        user.value.image=data.image
        user.value.name=data.name
        isLoggedIn.value = true;
      }
    } catch (error) {
      console.error("获取用户信息失败:", error);
      isLoggedIn.value = false;
    }
  };

  // 订单类型数据
  const orderTypes = ref([
    { type: 1, text: "待付款", icon: "fire-o" },
    { type: 2, text: "待发货", icon: "gift-o" },
    { type: 3, text: "待收货", icon: "cart-o" },
    { type: 4, text: "待评价", icon: "comment-o" },
    { type: 5, text: "售后", icon: "phone-o" },
  ]);

  // 手动解析 JWT
  const decodeJwt = (token: string) => {
    const payload = token.split('.')[1]; // 获取 payload 部分
    const decodedPayload = atob(payload); // Base64 解码
    return JSON.parse(decodedPayload); // 将解码后的 JSON 字符串转为对象
  };


  // 页面加载时检查 token 是否存在
  onMounted(() => {
    const token = sessionStorage.getItem('token');

    console.log(token);

    if (token) {
      isLoggedIn.value = true;

      try {
        // 解码 JWT 获取用户信息
        const decoded = decodeJwt(token); // 使用 decodeJwt 函数
        user.value.username = decoded.username;
        getUserAPI(decoded.id); // 获取用户名并更新
        // console.log(decoded.id);


      } catch (error) {
        console.error('Token 解码失败:', error);
        isLoggedIn.value = false;
      }
    } else {
      isLoggedIn.value = false;
    }
  });

  // 判断登陆状态再尝试跳转order
  import {showFailToast } from 'vant';
  const onshow = () => {
    if (isLoggedIn.value) {
      console.log(111);
      router.push({ name: 'Order' }); // 跳转到 order 页面
    } else {
      console.log(222);
      showFailToast('请登录后查看');
    }
  };
  const show = ref(false);


</script>

<template>
  <van-toast v-model:show="show" style="padding: 0">
  </van-toast>

  <div class="my-page">
    <!-- 顶部背景和用户信息 -->
    <div class="profile">
      <div class="overview" v-if="isLoggedIn">
        <img class="avatar" :src="user.image" alt="用户头像" />
        <div class="meta">
          <div class="username">{{ user.name }}</div> <!-- 显示用户名 -->
          <div class="extra">更新头像昵称</div>
        </div>
      </div>
      <router-link to="/login" class="overview" v-else>
        <img class="avatar gray" src="../../../public/images/icon/default.png" alt="未登录头像" />
        <div class="meta">
          <div class="username">未登录</div> <!-- 显示未登录 -->
          <div class="extra">点击登录账号</div>
        </div>
      </router-link>
      <router-link to="/chat">
        <div class="settings" style="margin-right: 40px">
          <van-icon name="service-o"   size="22" />
        </div>
      </router-link>
      <router-link to="/setting">
        <div class="settings">
          <van-icon name="setting-o"  size="22" />
        </div>
      </router-link>

    </div>

    <!-- 我的订单 -->
    <div class="orders" @click="onshow">
      <div class="title">
        我的订单
        <span class="all-orders">查看全部订单</span>
      </div>
      <div class="order-items">
        <div class="order-item" v-for="item in orderTypes" :key="item.type">
          <van-icon :name="item.icon" color="#1257EAFF" size="30px"/>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div  class="fix-div"  style="background-color: #EEEEEE;">
      <a class="fix-title">每日推荐</a>
    </div>
    <div class="freight-container">
      <Commodity v-for="item in searchStore.recommendList" :key="item.id" :commodity="item" />
    </div>
  </div>

  <div class="loading-container">
    <van-loading size="24px">加载中...</van-loading>
  </div>

</template>

<style scoped>
.my-page {
  background-color: #EEEEEE;
}

/* 顶部背景和用户信息 */
.profile {
  background:  #eeeeee;
  padding: 20px;
  color: #333;
  position: relative;
}

.profile .overview {
  display: flex;
  align-items: center;
}

.profile .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile .username {
  font-size: 18px;
  font-weight: bold;
}

.profile .extra {
  font-size: 14px;
  margin-top: 5px;
}

.profile .settings {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
  cursor: pointer;
}



/* 我的订单 */
.orders {
  background: #fff;
  margin: 20px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.orders .title {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #333;
}

.orders .all-orders {
  font-size: 14px;
  color: #999;
}

.orders .order-items {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.orders .order-item {
  text-align: center;
}

.orders .order-item .text {
  font-size: 12px;
  margin-top: 5px;
  color: #333;
}

.fix-div{
  margin: 0 20px 0 20px;
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
  padding: 20px;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
</style>
