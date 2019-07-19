<template>
  <div class="set">
    <nav-bar title='设置' />
    <div class="margin-top-xs">
      <van-cell title="个人资料" is-link to="/" />
      <van-cell title="账号安全" is-link value="内容" />
    </div>
    <div class="margin-top-sm">
      <van-cell title="地址管理" is-link value="去设置" />
      <van-cell title="分享网站" is-link to="/" />
      <van-cell title="关于我们" is-link to="/" />
    </div>
    <div class="btn-box">
      <van-button type="default" size="large">退出登录</van-button>
    </div>
  </div>
</template>

<style lang="less" scope>
.set {
  padding-top: 45px;
  .btn-box {
    padding: 30px 15px 0;
    button {
      color: #394C92;
      border-radius: 4px;
    }
  }
}
</style>
<style lang="less">
.set {
  .van-cell {
    color: #666666;
  }
}
</style>

