<template>
  <div class="tabbar-container">
    <van-tabbar v-model="active" active-color="#4963C2" @change="toggleTab">
      <van-tabbar-item v-for="item in tabList" :key="item.id" :to="item.url">
        <div class="tab-img">
          <img :src="active==item.id ? item.active : item.normal">
        </div>
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
          id: 0,
          normal: "/static/tabbar/home.png",
          active: "/static/tabbar/home@selected.png",
          url: "/home",
          title: "首页"
        },
        {
          id: 1,
          normal: "/static/tabbar/category.png",
          active: "/static/tabbar/category@selected.png",
          url: "/category",
          title: "分类"
        },
        {
          id: 2,
          normal: "/static/tabbar/collect.png",
          active: "/static/tabbar/collect@selected.png",
          url: "/collect2",
          title: "收藏"
        },
        {
          id: 3,
          normal: "/static/tabbar/me.png",
          active: "/static/tabbar/me@selected.png",
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
    .tab-img {
      width: 20px;
      height: 20px;
      overflow: hidden;
      margin-bottom: 5px;
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .tab-itme {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="less">
.tabbar {
  &-container {
    .van-tabbar {
      height: 55px;
    }
  }
}
</style>

