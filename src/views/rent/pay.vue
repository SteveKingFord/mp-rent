<template>
  <div class="pay">
    <nav-bar  title="账单支付" />
    <div class="pay-content">
      <div class="location">房屋：前埔南小区57号</div>
      <div class="pay-card">
        <div class="item">
          <div class="house">101室</div>
          <div class="name">刘林嵩</div>
        </div>
        <div class="img-box">
          <img src="/static/icon_1@2x.png">
        </div>
        <div class="item">
          <div class="house">前埔南区</div>
          <div class="name">宋房东</div>
        </div>
        <div class="left bar">付</div>
        <div class="right bar">收</div>
      </div>
      <div class="pay-money">
        <div class="desc">费用合计（元）</div>
        <div class="money">1602</div>
      </div>
      <div class="pay-list">
        <van-row class="list-item">
          <van-col span="8">房租费用</van-col>
          <van-col span="8" class="text-center">月</van-col>
          <van-col span="8" class="text-price momey ">1500</van-col>
        </van-row>
        <van-row class="list-item">
          <van-col span="8">水表读数</van-col>
          <van-col span="8" class="text-center line">354215度</van-col>
          <van-col span="8" class="text-price momey ">25</van-col>
        </van-row>
        <van-row class="list-item">
          <van-col span="8">电表读数</van-col>
          <van-col span="8" class="text-center line">54214度</van-col>
          <van-col span="8" class="text-price momey ">77</van-col>
        </van-row>
        <van-row class="list-item">
          <van-col span="8">宽带费用</van-col>
          <van-col span="8" class="text-center">无</van-col>
          <van-col span="8" class="text-price momey ">0</van-col>
        </van-row>
      </div>
    </div>
    <van-button size="large" class="pay__btn">立即支付</van-button>
  </div>
</template>

<style lang="less" scoped>
.pay {
  background: #fff;
  .pay__btn {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		color: #fff;
		background: #38B3FF;
	}
  &-content {
    padding: 0 10px;
    padding-top: 45px;
    height: calc(100vh - 45px);
    .location {
      font-size: 16px;
      color: #000000;
      text-align: center;
      padding: 30px 0 15px;
    }
  }
  &-card {
    display: flex;
    padding: 15px 60px;
    border-radius: 8px;
    align-items: center;
    position: relative;
    border: 1px solid #F1F1F1;
    justify-content: space-between;
    .img-box {
      width: 60px;
      height: 8px;
    }
    .item {
      font-size: 15px;
      text-align: center;
      .house {
        color: #000000;
        margin-bottom: 10px;
      }
      .name{
        color: #C9C0C0;
      }
    }
    .bar {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      color: #fff;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      transform: translateY(-50%);
      background-size: 100% 100%;
      &.left {
        left: 0;
        background: #1C1C1C;
        border-radius: 0 6px 6px 0;
      }
      &.right {
        right: 0;
        background: #CA353A;
        border-radius: 6px 0 0 6px;
      }
    }
  }
  &-money {
    text-align: center;
    padding: 25px 0 60px;
    .desc {
      color: #C9C0C0;
      font-size: 15px;
      margin-bottom: 10px;
    }
    .money {
      color: #333;
      font-size: 28px;
      font-weight:bold;
    }
  }
  &-list {
    padding-left: 20px;
    .list-item {
      font-size: 15px;
      color: #A8A1A1;
      &:not(:last-child){
        margin-bottom: 25px;
      }
      .line {
        padding-bottom: 5px;
        border-bottom: 1px solid #F1F1F1;
      }
      .momey {
        color: #000;
        font-weight: bold;
        padding-left: 40px;
      }
    }
  }
}
</style>
