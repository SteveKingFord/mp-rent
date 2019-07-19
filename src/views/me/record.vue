<template>
  <div class="record">
    <nav-bar title='提现记录' />
    <div class="record-list">
      <div class="record-head">
        <van-row>
          <van-col span="6">金额</van-col>
          <van-col span="12">时间</van-col>
          <van-col span="6">状态</van-col>
        </van-row>
      </div>
      <div class="record-body">
        <vue-scroll class="scroll-bar">
          <van-row class="row" v-for="i in 100" :key="i">
            <van-col span="6">145</van-col>
            <van-col span="12">2019-07-11  14:11</van-col>
            <van-col span="6">待提现</van-col>
          </van-row>
        </vue-scroll>
      </div>

    </div>
  </div>
</template>


<style lang="less" scoped>
.scroll-bar {
  height: calc(100vh - 115px)!important;
}
.record {
  padding-top: 45px;
  &-list {
    padding: 15px;
    text-align: center;
  }
  &-head {
    color: #fff;
    padding: 10px 0;
    background: #4963C2;
  }
  &-body{
    background: #fff;
    .row {
      padding: 10px 0;
      &.bg {
        background-color: #F8F8F8;
      }
    }
  }
}
</style>
