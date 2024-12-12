<script setup>
import { onMounted } from "vue";

const goBack = () => {
  // 使用 window.history.back() 返回上一页
  window.history.back();
};

onMounted(() => {
  const script = document.createElement("script");

  script.async = true;
  script.onload = () => {
    window.embeddedChatbotConfig = {
      chatbotId: "CuxQs5DOtI9x0QVb2f5-t",
      domain: "www.chatbase.co"
    }
  };
  document.body.appendChild(script);
});
</script>

<template>
<!--  <van-nav-bar-->
<!--      title="智能客服"-->
<!--      left-text="返回"-->
<!--      left-arrow-->
<!--      @click-left="goBack"-->
<!--  />-->
<!--  <div class="chat-container">-->
<!--    <iframe-->
<!--        src="https://www.chatbase.co/chatbot-iframe/CuxQs5DOtI9x0QVb2f5-t"-->
<!--        width="100%"-->
<!--        height="790px"-->
<!--        frameborder="0">-->
<!--    </iframe>-->
<!--  </div>-->
</template>

<style scoped>
.chat-container {
  height: 100%;
  background: #fff;
}
</style>
