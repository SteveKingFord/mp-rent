<template>
  <div class="container">
    <nav-bar :leftArrow='false' title="我的" />
    <div class="user-info">
        <div class="phone">18559445551</div>
        <div class="img-box">
          <img src="/static/user.jpg" alt="user">
        </div>
    </div>
   
   <div class="cell-list">
    <div class="margin-bottom-sm">
      <van-cell is-link  @click="$router.push('/bill')">
       <div slot="title" class="cell-item">
         <img src="/static/me/icon_zd@3x.png" width="25" >
         <span>我的账单</span>
       </div>
      </van-cell>
    </div>
    <div>
      <van-cell is-link  @click="$router.push('/lease')">
       <div slot="title" class="cell-item">
         <img src="/static/me/icon_zy@3x.png" width="25" >
         <span>我的租约</span>
       </div>
      </van-cell>
    </div>
  </div>

  </div>
</template>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 50px 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  .phone {
    font-size: 16px;
    font-weight:bold;
  }
  .img-box {
    width: 80px;
    height: 80px;
    img {
      border-radius: 50%;
    }
  }
}
.cell-list {
  /deep/ .van-cell {
    height: 55px;
    line-height: 35px;
  }
  /deep/ .van-cell__right-icon {
    color: #333333;
    line-height: 35px;
  }
  .cell-item {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333333;
    img {
      margin-right: 10px;
    }
  }
}
</style>

