<script setup lang="ts">
import {useSearchStore} from "@/stores/search.ts";
const searchStore = useSearchStore();
import { ref } from 'vue';
import Commodity from "@/components/HomeView/commodity.vue";
const searchInput = ref<string>('vivo');
const inSearch = ref(true);
let reResultList = ref(searchStore.resultList);


const onClickback = () => {
  window.history.back();
};

const onClickSearch = () => {
    inSearch.value = false;
    filterResultList(searchStore.resultList,searchInput.value);
};
//清除时触发
const onclear = () => {
  inSearch.value =true;
}

function filterResultList(List:any, inputName: string) {
  let newList = [];
  for (let i = 0; i < List.length; i++) {
    if (List[i].name.includes(inputName)) {
      newList.push(List[i]);
    }
  }
  reResultList.value = newList;
}


</script>

<template>
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
            @clear="onclear"
        >
          <template #action>
            <a @click="onClickSearch">搜索</a>
          </template>
        </van-search>
      </div>
    </div>
  </van-sticky>
<div>

</div>
<!--  //推荐-->
  <div v-show="inSearch">
    <div class="fix-div">
      <a class="fix-title">猜你想搜</a>
      <div class="guess-tag" >
        <a v-for="tag in searchStore.guessList" :key="tag.id">
          {{tag.message}}
        </a>
      </div>
    </div>
    <div  class="fix-div" >
      <a class="fix-title">今日推荐</a>
    </div>
    <div class="freight-container">
      <Commodity v-for="item in searchStore.recommendList" :key="item.id" :commodity="item" />
    </div>
  </div>

<!--  // 搜索结果-->
  <div class="reslut" v-show="!inSearch">
    <div class="freight-container">
      <Commodity v-for="item in reResultList" :key="item.id" :commodity="item" />
    </div>
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
  right: 0;
  width: 95%;
}
.search a{
  margin-top: 5px;
  font-size: 14px;
  color: #777777;
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
.guess-tag{
  padding: 10px 0 10px 0;
}
.guess-tag a {
  display: inline-block;
  background-color: #dcd9d9;
  color: #000000;
  margin: 2px 5px 2px 5px;
  font-size: 13px;
  border-radius: 15px;
  padding: 2px 10px;
}
.freight-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* 响应式网格 */
  gap: 20px; /* 网格项之间的间距 */
  padding: 20px;
}

</style>