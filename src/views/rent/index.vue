<template>
	<div class="container rent">
		<nav-bar :leftArrow="false" title="租君" />
		<van-search  class="rent-searchbar fixed " v-model="search_key" placeholder="凯兴小区" shape="round" @search="onSearch">
			<div slot="label" class="rent-address"  @click="onSearch" >
        <span class="localtion">厦门市</span>
        <van-icon name="arrow-down" />
      </div>
		</van-search>
    <!-- 过滤 -->
    <van-row class="rent-filter fixed">
      <van-col span="6">精品推荐</van-col>
      <van-col span="6">1室1卫</van-col>
      <van-col span="6">2室1卫</van-col>
      <van-col span="6">3室1卫</van-col>
    </van-row>
   <!-- list -->
    <ul class="rent-list">
      <li class="rent-item">
        <router-link to='/detail'>
          <div class="img-box">
            <img src="/static/user.jpg" alt="">
          </div>
          <div class="info">
            <div class="loacltion">厦门市 思明区 莲坂国贸大厦复</div>
            <div class="type">1室1厅1卫</div>
            <div class="price">1000-2000元/月</div>
          </div>
        </router-link>
      </li>
      <li class="rent-item" v-for="i in 10" :key="i">
        <router-link to='/detail'>
          <div class="img-box">
            <img src="/static/user.jpg" alt="">
          </div>
          <div class="info">
            <div class="loacltion">厦门市 湖里区 福园公寓</div>
            <div class="type">1室1厅1卫</div>
            <div class="price">1000-2000元/月</div>
          </div>
        </router-link>
      </li>
    </ul>
    
	
	</div>
</template>

<script>
export default {
  data () {
    return {
      search_key:''
    }
  },
  methods: {
    onSearch(){

    }
  }

}
</script>

<style lang="less" scoped>
.container {
  padding-top: 143px;
}
.rent {
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
  }
  &-address {
    display: flex;
    align-items: center;
    .localtion {
      margin-right: 5px;
    }
  }
  &-searchbar {
    top: 45px;
  }
  &-filter {
    top: 99px;
    height: 44px;
    color: #777777;
    font-size: 12px;
    line-height: 44px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #ECECEC;
    /deep/ .van-col {
      position: relative;
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 40%;
        top: 50%;
        right: 0;
        background: #ECECEC;
        transform: translateY(-50%);
      }
    }
  }
  &-list {
    padding: 0 15px;
    background: #fff;
    .rent-item {
      padding: 15px 0;
      &:not(:last-child) {
        border-bottom: 1px solid #F3F3F3;
      }
      a {
        display: flex;
        .img-box {
          width: 90px;
          height: 90px;
          img {
            border-radius:6px;
          }
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          .loacltion{
            font-size: 18px;
            font-weight:500;
            font-weight:500;
          }
          .type {
            font-size: 14px;
            color: #777777;
            margin: 5px 0;
            font-weight:500;
          }
          .price {
            font-size: 16px;
            color: #FF5324;
            font-weight:800;
          }
        }
      }
    }
  }

  /deep/ .van-search__label{
    color: #333333;
  }
  /deep/ .van-search__content{
    background: #F2F2F2;
  }
  
}
</style>

