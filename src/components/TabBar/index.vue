<template>
  <div class="tabbar-container">
    <van-tabbar v-model="active" active-color="#38B3FF" @change="toggleTab">
      <van-tabbar-item v-for="item in tabList" :key="item.id" :to="item.url">
        <span>{{item.title}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          id: 1,
          url: "/rent",
          title: "租君"
        },
        {
          id: 2,
          url: "/me",
          title: "我的"
        }
      ]
    };
  },
  methods: {
      toggleTab(){

      }
  }
};
</script>


<style lang="less" scoped>
.tabbar {
  &-container {
    /deep/ .van-tabbar-item {
      font-size: 14px;
      color: #909090;
      position: relative;
      &:first-child::after{
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      height: 40%;
      width: 2px;
      background: #ECECEC;
      transform: translateY(-50%);
    }
    } 
    /deep/ .van-tabbar {
      height: 55px;
    }
  }
}
</style>



