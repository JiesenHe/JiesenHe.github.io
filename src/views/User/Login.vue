<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
// 返回上一页
const goBack = () => {
  window.history.back()
}

// 登录表单类型定义
interface LoginForm {
  username: string
  password: string
}

// 表单数据
const form = ref<LoginForm>({
  username: '',
  password: '',
})

const router = useRouter()

// 登录 API 封装
const loginAPI = (username: string, password: string) => {
  return axios.post('http://localhost:8080/login', {
    username,
    password
  })
}

// 表单提交逻辑
const onSubmit = async () => {
  if (!form.value.username || !form.value.password) {
    alert('请输入用户名和密码')
    return
  }
  console.log(form.value)
  try {
    // 调用 loginAPI
    const response = await loginAPI(form.value.username, form.value.password)
    const { code, msg, data } = response.data

    if (code === 1) {
      // 保存 Token 到 sessionStorage
      sessionStorage.setItem('token', data)
      alert('登录成功')
      
      // 登录成功后跳转到主页
      router.push('/user')
    } else {
      alert(`登录失败: ${msg}`)
    }
  } catch (error) {
    alert('账号密码错误')
  }
}
</script>

<template>
  <!-- 顶部导航栏 -->
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="goBack"
  />

  <!-- 登录容器 -->
  <div class="login-container">
    <div class="title">
      <img src="/vigormall.svg" alt="logo" style="width: 100px" />
    </div>

    <form @submit.prevent="onSubmit" class="login-form">
      <a class="loginInfo">
        <div class="form-item">
          <label class="form-label">账号</label>
          <input
              v-model="form.username"
              class="input"
              type="text"
              placeholder="请输入用户名/手机号码"
          />
        </div>

        <div class="form-item">
          <label class="form-label">密码</label>
          <input
              v-model="form.password"
              class="input"
              type="password"
              placeholder="请输入密码"
          />
        </div>
      </a>

      <button type="submit" class="submit-button">登录</button>
    </form>
  </div>
</template>

<style scoped>
/* 容器样式 */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 上移位置 */
  height: calc(100vh - 50px); /* 顶部导航高度留白 */
  padding: 20px;
  background: #EEEEEE; /* 添加背景渐变 */
  border-top: 4px solid #EEEEEE; /* 增加顶部修饰线 */
  border-radius: 10px; /* 圆角边框 */
}

/* 标题样式 */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  height: 130px;
  margin-top: 30px;
}


/* 表单样式 */
.login-form {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
}

/* 表单项样式 */
.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.form-label {
  width: 60px;
  font-size: 16px;
  color: #333;
}
.loginInfo{
  background: #ffffff;
  padding: 20px 15px 0 25px;
  margin-bottom: 20px;
  border-radius: 10px;
}


/* 输入框样式 */
.input {
  flex: 1;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  border: 0px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: #ffffff;
}

/* 按钮样式 */
.submit-button {
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #2C75C1FF;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

</style>
