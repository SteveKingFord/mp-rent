<template>
	<div class="collect">
		<!-- navbar -->
		<div class="collect-navbar">
			<van-icon name="arrow-left" class="icon left" @click="$router.go(-1)" />
			<div class="title">商品收藏</div>
			<van-icon name="search" class="icon right" />
		</div>
		<!-- 产品 -->
		<div class="product-list">
			<van-grid :column-num="2">
				<van-grid-item v-for="i in (9)" :key="i">
					<router-link to="/product_detail">
						<van-image src="/static/product/home_shoe1.jpg" />
						<div class="product-info">
							<p class="text-price">210</p>
							<p class="name">鞋袋网制造商提供</p>
							<p class="desc">抽拉式系带男士休闲真皮鞋</p>
							<p class="hot">
                灰色<span class="size">41</span>
                <van-icon name="ellipsis" class="ellipsis" />
              </p>
						</div>
					</router-link>
				</van-grid-item>
			</van-grid>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: false
		}
	},
	methods: {}
}
</script>

<style lang="less" scoped>
.collect {
	padding: 45px 0 55px;
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
			color: #6a6a6a;
			transform: translateY(-50%);
			&.left {
				left: 5px;
			}
			&.right {
				right: 15px;
			}
		}
	}
}
.product {
	background: #fff;
	padding: 0 10px;
	&-info {
		padding: 5px;
		.text-price {
			font-size: 22px;
			color: #fe8f00;
		}
		.name {
			color: #dab866;
			font-size: 12px;
			margin-bottom: 5px;
		}
		.desc {
			color: #333333;
			font-size: 13px;
			margin-bottom: 5px;
		}
		.hot {
			color: #8f8f8f;
      font-size: 10px;
      position: relative;
      .size {
        padding-left: 10px;
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
</style>

