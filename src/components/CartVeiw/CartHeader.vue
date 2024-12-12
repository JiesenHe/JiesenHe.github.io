<script setup lang="ts">
import {ref} from 'vue';
const value = ref('');
</script>
<template>
  <div class="header-fix">
    <div class="container">
      <div class="title">
        购物车
      </div>

        <div class="search-div">
          <router-link to="/search">
            <van-search v-model="value"
            shape="round"
            background="#EEEEEE"
            placeholder="请输入搜索关键词" />
          </router-link>
        </div>

    </div>

  </div>
</template>
<style scoped>
  .header-fix{
    width: 100%;
    height: 46px;
    position: relative;
    top: 0px;
  }
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px ;
  }

/* 
search-div
*/
  .search-div{
    width: 77%;
  }
  .title{
    font-size:24px;
    color: #000000;
    font-weight: 800;
  }
</style>