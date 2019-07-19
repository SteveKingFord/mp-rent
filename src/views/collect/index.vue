<template>
	<div class="collect">
    <!-- navbar -->
    <div class="collect-navbar">
      <van-icon name="arrow-left" class="icon left" />
      <div class="title">商品收藏</div>
      <van-icon name="search" class="icon right"  />
    </div>
    <!-- 商品列表 -->
    <div class="collect-list">
      <div class="collect-item" v-for="i in 3" :key="i">
        <div>
          <van-checkbox v-model="checked" checked-color="#4963C2" />
        </div>
        <div class="collect-product">
          <img src="/static/product/collect.png" alt="收藏" class="collect__img">
          <div class="product-info">
            <p class="desc">男鞋夏季潮鞋2019新款网鞋潮流百搭男士运动休闲鞋子帆布透气板鞋</p>
            <p class="rule">灰色<span class="size">41</span></p>
            <p class="text-price">
               210
              <span class="num">× 1</span> 
              <van-icon name="ellipsis" class="ellipsis" />
            </p>
          </div>
         
        </div>
       
      </div>
    </div>
    <!-- 结算 -->
    <div class="account">
      <div>
         <van-checkbox v-model="checked" checked-color="#4963C2">
           全选
         </van-checkbox> 
      </div>
      <div class="account-right">
        <div class="sum">合计：<span class="text-price">210</span></div>
        <van-button type="default" class="account__btn">结算</van-button>
      </div>
    </div>
 

		
	</div>
</template>

<script>

export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
   
  }
}
</script>

<style lang="less" scoped>
.collect {
  padding: 45px 0 95px;
  &-navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    padding: 0 30px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #fff;
    z-index: 100;
    .title {
      flex: 1;
      color: #333333;
    }
    .icon {
      position: absolute;
      top: 50%;
      font-size: 20px;
      color: #6A6A6A;
      transform: translateY(-50%);
      &.left {
        left: 5px;
      }
      &.right {
        right: 15px;
      }
    }
  }
  &-list {
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #fff;
  }
  &-item {
    display: flex;
    padding: 10px 0;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #D9D9D9;
    }
    
  }
  &-product {
    display: flex;
  
    .collect__img {
      width: 100px;
      margin: 0 15px;
    }
    .product-info {
      .desc {
        color: #333333;
        font-size: 12px;
        margin-bottom: 10px;
      }
      .rule {
        color: #666666;
        font-size: 12px;
        margin-bottom: 10px;
        .size {
          padding-left: 10px;
        }
      }
      .text-price {
        font-size: 22px;
        color: #FF9600;
        position: relative;
        .num {
          color: #666666;
          font-size: 14px;
          padding-left: 5px;
        }
        .ellipsis {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #CBCBCB;
        }
        
      }
      
    }
  }
}
.account {
  position: fixed;
  bottom: 55px;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  padding:  0 15px;
  background-color: #fff;
  // border-top: 1px solid #ebedf0;
  justify-content: space-between;
  &-right {
    display: flex;
    align-items: center;
    .sum {
      margin-right: 20px;
      .text-price {
        font-size: 24px;
        color: #FF9600;
      }
    }
  }
  &__btn {
    color: #fff;
    height: 30px;
    line-height: 30px;
    background-color: #FF9600;
    border-radius: 4px;
  }
}
</style>

