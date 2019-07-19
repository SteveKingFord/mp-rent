<template>
  <div class="order">
    <!-- navbar -->
    <div class="order-navbar">
      <van-icon name="arrow-left" class="icon left" @click="$router.go(-1)" />
      <div class="title">我的订单</div>
      <van-icon name="search" class="icon right"  />
    </div>
    <!-- tab -->
    <van-tabs v-model="active" animated color="#4963C2">
			<van-tab v-for="item in tabList" :name="item.val" :title="item.label" :key="item.id">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="order-card" v-for="i in 10" :key="i">
            <div class="order-item">
                <div class="img-box">
                  <img src="/static/product/collect.png">
                </div>
                <div class="order-info">
                  <div class="desc-info">
                    <p class="desc">男鞋夏季潮鞋2019新款网鞋潮流百搭男士运动休闲鞋子帆布透气板鞋</p>
                    <div class="text-right">
                      <div class="text-price">210</div>
                      <div class="num">× 1</div>
                    </div>
                  </div>
                  <p class="type">灰色<span class="size">41</span></p>
                  <p class="sum">共1件商品<span class="margin-left-xxs">合计<span class="text-price">210</span></span></p>
                </div>
            </div>
            <div class="buy-btn">
              <van-button round size="small">再次购买</van-button>
            </div>
          </div>

				</van-pull-refresh>
			</van-tab>
		</van-tabs>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isLoading: false,
			// active: 'unget',
			tabList: [
				{
					id: '1',
					label: '全部订单',
					val: 'all'
        },
        {
					id: '3',
					label: '待发货',
					val: 'unsent'
				},
				{
					id: '2',
					label: '待收货',
					val: 'unget'
				},
				{
					id: '4',
					label: '待评价',
					val: 'unstar'
				}
			]
		}
  },
  computed:{
    active:{
      get(){
        return this.$route.query.active;
      },
      set(){

      }
    }
  },
	methods: {
		onRefresh() {
			setTimeout(() => {
				this.$toast('刷新成功')
				this.isLoading = false
				this.count++
			}, 500)
		}
	}
}
</script>

<style lang="less" scoped>
.order {
  padding-top: 45px;
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
  &-card {
    padding: 15px;
    background: #fff;
    margin-bottom: 10px;
    .buy-btn {
      text-align: right;
      padding-top:10px;
      button{
        padding: 0 12px;
        color: #FF9600;
        border: 1px solid #FF9600;
      }
    }
  }
  &-item {
    display: flex;
    .img-box {
      width: 100px;
      height: 100px;
    }
  }
  &-info {
    flex: 1;
    padding-left: 10px;
    position: relative;
    .desc-info {
      display: flex;
      justify-content: space-between;
      .desc {
        color: #333;
        font-size: 12px;
        margin-bottom: 5px;
      }
      .num {
        color: #919191;
        font-size: 12px;
      }
    }
    .type {
      color: #666;
      font-size: 12px;
      .size {
        padding-left: 10px;
      }
    }
    .sum {
      position: absolute;
      right: 0;
      bottom: 0;
      .text-price {
        color: #FF9600;
      }
    }
  }
}
</style>

<style lang="less">
  .order {
    .van-tabs__wrap {
      position: fixed;
      top: 45px;
      left: 0;
      right: 0;
      z-index: 100;
    }
    .van-tab--active {
      color: #4963c2;
    }
    .van-tabs__nav {
      background-color: #EFF1F8;
    }
  }
</style>
