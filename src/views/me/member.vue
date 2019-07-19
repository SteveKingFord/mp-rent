<template>
  <div class="member">
    <nav-bar title="添加会员" />
    <div class="member-card">
      <van-row class="row">
        <van-col span="6">账户名</van-col>
        <van-col span="18">
          <input type="text" placeholder="请填写真实姓名" />
        </van-col>
      </van-row>
      <van-row class="row">
        <van-col span="6">手机号</van-col>
        <van-col span="18">
          <input type="text" placeholder="请填写会员真实手机号" />
        </van-col>
      </van-row>
      <van-row class="row">
        <van-col span="6">初始密码</van-col>
        <van-col span="18">
          <input type="password" placeholder="请输入初始密码" />
        </van-col>
      </van-row>
      <van-row class="row">
        <van-col span="6">所属省</van-col>
        <van-col span="18" class="address">
          <select class="select">
          <option value="1">全部</option>
          <option value="2">福建</option>
          </select>
          <select class="select">
            <option value="1">全部</option>
            <option value="2">新疆</option>
          </select>
          <select class="select">
            <option value="1">全部</option>
            <option value="2">江苏</option>
          </select>
          </van-col>
      </van-row>
      <van-row class="row">
        <van-col span="6">详细地址</van-col>
        <van-col span="18">
          <input type="text" placeholder="地址" />
        </van-col>
      </van-row>
      <van-row class="row">
        <van-col span="6">是否启用</van-col>
        <van-col span="18">
          <van-radio-group v-model="radio" class="flex">
            <van-radio name="1" checked-color="#4963C2">是</van-radio>
            <van-radio name="2" checked-color="#4963C2" class="margin-left-sm">否</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <van-button type="default" size="large" class="primary-bg popup__btn">确定添加</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.member {
  padding: 65px 15px 20px;
  &-card {
    font-size: 12px;
    padding: 30px;
    color: #333;
    background: #fff;
    border-radius: 6px;
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      input {
        width: 100%;
        height: 30px;
        border: 0;
        border-bottom: 1px solid #D9D9D9;
        &::-webkit-input-placeholder {
          color: #A7A7A7;
        }
      }
      .address {
        border-bottom: 1px solid #D9D9D9;
        select {
          width: 30.33%;
          height: 30px;
          border: 0;
        } 
      }
    }
    .popup__btn {
      border-radius: 6px;
    }
  }
}
</style>

