<template>
  <div class="container">
    <nav-bar  title="我的租约" />
    <!-- 房东信息 -->
    <div class="lease-card margin-top-sm">
      <div class="title">房东信息</div>
      <ul class="lease-list">
        <li>
          <span>房东姓名</span>
          <span>张三</span>
        </li>
        <li>
          <span>联系电话</span>
         <span>13377893345</span>
        </li>
      </ul>
    </div>
    <!-- 合约信息 -->
    <div class="lease-card margin-top-sm">
      <div class="title">合约信息</div>
      <ul class="lease-list">
        <li>
          <span>公寓信息</span>
          <span>前埔南区55号－102室</span>
        </li>
        <li>
          <span>水费说明</span>
          <span>5元／吨</span>
        </li>
        <li> 
          <span>电费说明</span>
          <span>1元／度</span>
        </li>
        <li>
          <span>宿舍租金</span>
          <span>1200元／月</span>
        </li>
        <li>
          <span>交租时间</span>
          <span>15号</span>
        </li>
        <li>
          <span>户型</span>
          <span>1室1厅1卫</span>
        </li>
        <li>
          <span>合约到期时间</span>
          <span>2019年12月12日</span>
        </li>
      </ul>
    </div>
    <!-- 合同 -->
    <div class="lease-card">
      <div class="title">合同</div>
       <van-row gutter="10" class="contract">
        <van-col span="6" class="img-box">
          <img src="/static/user.jpg" alt="">
        </van-col>
        <van-col span="6"  class="img-box">
          <img src="/static/user.jpg" alt="">
        </van-col>
        <van-col span="6"  class="img-box">
          <img src="/static/user.jpg" alt="">
        </van-col>
        <van-col span="6" class="img-box">
          <img src="/static/user.jpg" alt="">
        </van-col>
    
      </van-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.lease {
  &-card {
    padding: 15px 10px;
    background: #fff;
    font-size: 14px;
    .title {
      font-size: 18px;
      font-weight:bold;
      margin-bottom: 20px;
    }
    .contract {
      .img-box {
        img {
          border: 1px solid #F5F5F5;
        }
      }
    }
  }
  &-list {
    li {
      display: flex;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      span {
        &:last-child {
          color: #666;
        }
      }
    }
  }
}
</style>
