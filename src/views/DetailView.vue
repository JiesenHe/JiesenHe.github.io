<script setup lang="ts">
import {useFreightDetailStore} from "@/stores/freightDetail.ts";
const freightDetailStore = useFreightDetailStore();
import { useFreightStore } from "@/stores/freight.ts";
const freightStore = useFreightStore();
import {ref} from "vue";
import router from "@/router";
let activeNames1 = ref(['0']);
let activeNames2 = ref(['0']);
let searchInput = ref();
const stepName = 1;
const time = ref(30 * 60 * 60 * 1000);

const onClickback = () => {
  window.history.back();
};
const onClickSearch = () => {
  console.log('onClickSearch');
};
const toSearch = () => {
  router.push('/search');
};

</script>

<template>
<!--  <Topbar/>-->
  <van-sticky>
    <div class="search-bar">
      <div class="back" @click="onClickback">
        <img src="/images/icon/back.svg" style="height:20px;margin-bottom: -5px">
      </div>
      <div class="search">
        <van-search
            v-model="searchInput"
            shape="round"
            background="#EEEEEE"
            placeholder="请输入搜索关键词"
            show-action
            @focus="toSearch"
        >
          <template #action>
            <img src="/images/icon/share.svg" style="height:18px;margin-bottom: -5px" @click="onClickSearch">
          </template>
        </van-search>
      </div>
    </div>
  </van-sticky>

  <div class="fix-swipe">
    <van-swipe :autoplay="3000" lazy-render  indicator-color="#ffffff">
      <van-swipe-item v-for="img in freightDetailStore.Swipe" :key="img.id">
        <img  :src="img.path" />
      </van-swipe-item>
    </van-swipe>
  </div>

  <div class="fix-div">
    <div class="price">
      <p>￥ </p>
      <a>{{freightDetailStore.price}}</a>

      <p style="margin-right: 0px;margin-left: 70px" >开售倒计时：</p>
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>

    </div>
    <div class="tag-container">
      <span v-for="tag in freightDetailStore.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
<!--//商品名和描述-->
  <div class="fix-div">
    <div class="name">
     <a>{{freightDetailStore.name}}</a>
     <p>{{freightDetailStore.description}}</p>
    </div>
  </div>
<!--// 购买流程页面-->
  <div class="fix-div">
    <van-steps :active="stepName">
      <van-step v-for="step in freightDetailStore.flow">
        {{step.name}}
      </van-step>
    </van-steps>
  </div>
<!--//技术参数页面-->
  <div class="fix-div" style="padding:0px 0px 0px 0px ">
    <van-collapse v-model="activeNames1">
      <van-collapse-item title="产品规格" name="1">
        <div v-for="speci in freightDetailStore.specification" :key="speci.id">
          <a style="color: black;margin-bottom: 2px">{{speci.name}}</a>
          <p style="font-size:13px ">{{speci.detail}}</p>
          <p>&nbsp;&nbsp;</p>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div >
<!--//相关好物页面-->
  <div class="fix-div" style="padding:0px 0px 0px 0px ">
    <van-collapse v-model="activeNames2">
      <van-collapse-item title="相关好物" name="1">
        <div class="freight-container">
          <Commodity v-for="item in freightStore.freight3" :key="item.id" :commodity="item" />
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
<!--//展示页面-->
  <div class="information" v-for="img in freightDetailStore.detailImage">
    <img :src="img.path" />
  </div>

  <purchase/>
  <toTop/>
  <div style="background-color: black;height: 30px;display: flex;align-items: center;justify-content: center;color: #666666">
    Designed by JiesenHe
  </div>
</template>

<style scoped>
.search-bar{
  display: flex;
  align-items: center;
  background-color: #EEEEEE;
}
.back{
  padding-left: 10px;
}
.search {
  right: 0px;
  width: 95%;
}
.search a{
  margin-top: 5px;
}

.fix-swipe{
  margin: 0px 0px 10px 0px;
  border-radius: 10px;
  overflow: hidden;
}
.fix-swipe img{
  width: 100%;
  height: auto;
  display: block;
}
.fix-div{
  margin: 10px 20px 0px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden; /* 防止溢出 */
  padding: 10px  10px 10px 10px;
}

.price{
  display: flex;
  align-items: center;
  background: linear-gradient(to left, rgba(91, 142, 209, 0.8), rgb(18, 87, 234));
  height: 50px;
  border-radius: 10px;
}
.price a{
  color: #ffffff;
  font-size: 24px;
}
.price p{
  color: #ffffff;
  font-size: 15px;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 5px;
}

.colon {
  display: inline-block;
  margin: 0 2px;
  color: #ffffff;
}
.block {
  display: inline-block;
  width: 22px;
  color: #000000;
  font-size: 14px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 6px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px 0px 0px;
}
.tag {
  background-color: rgba(255, 255, 255, 0.8);
  color: #053f80;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 10px;
  border: 1px solid #195693;
}

.name {
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis; /* 长名称添加省略号 */
  white-space: nowrap; /* 防止文本换行 */
  padding-top: -10px;
}
.name a{
  font-size: 17px;
  color: #000000;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis; /* 长描述添加省略号 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制为两行 */

}
.name p{
  font-size: 12px;
  color: #777777;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis; /* 长描述添加省略号 */
  white-space: normal;
  height:32px; /* 根据字体大小调整，这里假设字体大小为1em，2em大概能容纳两行文字 */
  overflow: hidden;
}

.freight-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* 响应式网格 */
  gap: 20px; /* 网格项之间的间距 */
  padding: 0px;
}

.information{
  padding: 0px 0px 0px 0px;
  background-color: #000000;
}
.information img{
  width: 100%;
}

</style>