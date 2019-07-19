<template>
  <div class="container">
    <nav-bar :leftArrow='false' title="账单" />
    <div class="bill-list">
      <van-row class="bill-list__head">
        <van-col span="6">日期</van-col>
        <van-col span="6">房租</van-col>
        <van-col span="6">水费</van-col>
        <van-col span="6">电费</van-col>
      </van-row>
      <van-row class="bill-list__item" v-for="i in 5" :key="i">
        <van-col span="6">07/15</van-col>
        <van-col span="6">1200.00</van-col>
        <van-col span="6">15.00</van-col>
        <van-col span="6">68.50</van-col>
      </van-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bill-list {
  text-align: center;
  padding-top: 44px;
  &__head {
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    height: 44px;
    width: 100%;
    font-size: 12px;
    color: #909090;
    line-height: 44px;
    z-index: 10;
   background: #F5F5F5;
  }
  &__item {
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    background: #fff;
    &:not(:last-child){
      border: 1px solid #F5F5F5;
    }
  }
  
}
</style>

