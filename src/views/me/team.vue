<template>
  <div class="team">
    <nav-bar title="我的团队" />
    <div class="team-filter">
      <div class="select-item">
        <span>会员列表：</span>
        <select class="select">
          <option value="1">全部</option>
          <option value="2">男</option>
        </select>
      </div>
      <div class="filter-box">
        <input type="text" placeholder="手机号/昵称/账户名" class="filter__input">
        <van-button class="filter__btn search">搜索</van-button>
        <van-button class="filter__btn add" @click="$router.push('/member')">添加</van-button>
      </div>
    </div>
    <!-- 团队列表 -->
    <div class="team-list">
      <div class="team-card" v-for="i in 10" :key="i">
        <div class="img-box">
          <img src="/static/user.jpg" >
        </div>
        <div class="flex-sub">
          <div class="user-info">
            <van-row class="margin-bottom-xxs">
              <van-col span="12">用户名：鞋袋网用户手机</van-col>
              <van-col span="12">微信昵称：sgbx1254</van-col>
            </van-row>
            <van-row class="margin-bottom-xxs">
              <van-col span="12">手机号码：15241525458</van-col>
              <van-col span="12">权限：会员</van-col>
            </van-row>
            <van-row class="margin-bottom-xxs">
              <van-col span="12">创建时间:2019-07-11</van-col>
              <van-col span="12">袋币：12</van-col>
            </van-row>
            <van-row class="margin-bottom-xxs">
              <van-col span="12">订单数：125</van-col>
              <van-col span="12">状态：启用</van-col>
            </van-row>
            <van-row class="margin-bottom-xxs">
              <van-col span="12">利率：30%</van-col>
            </van-row>
            <p>地址：深圳市南山区广东省深圳市解放路4006号</p>
          </div>
          <div class="text-right padding-top-sm">
            <van-button size="small" class="edit__btn">编辑</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.team {
  padding-top: 140px;
  &-filter {
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 10px 15px;
    border-top: 5px solid #EFF1F8;
    background: #fff;
    .select-item {
      display: flex;
      align-items: center;
      .select {
        outline: none;
        padding: 5px;
        text-align: center;
        border-radius: 6px;
        border: 1px solid #979797;
        color: #4963C2;
      }
    }
    .filter-box {
      display: flex;
      align-items: center;
      padding-top: 10px;
      .filter__input {
        flex: 1;
        height: 30px;
        color: #333;
        padding-left: 5px;
        border:1px solid #979797;
        border-radius: 4px;
        &::-webkit-input-placeholder {
          color: #B1B1B1;
        }
      }
      .filter__btn {
        height: 35px;
        line-height: 35px;
        border-radius: 4px;
        &.search {
          margin: 0 5px;
          color: #fff;
          background: #4963C2;
        }
        &.add {
          color: #fff;
          background: #DAB866;
        }
      }
    }
  }
  &-list {
    padding: 15px 10px;
  }
  &-card {
    display: flex;
    padding: 10px;
    background: #fff;
    border-radius:5px;
    &:not(:last-child){
      margin-bottom: 10px;
    }
    .img-box {
      width: 40px;
      height: 40px;
    }
    .user-info {
      color: #4A4A4A;
      font-size: 10px;
      margin-left: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #D3D3D3;
    }
    .edit__btn{
      color: #4963C2;
      border: 1px solid #4963C2;
      border-radius: 4px;
    }
  }
}
</style>
