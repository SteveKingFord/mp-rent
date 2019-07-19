<template>
	<div class="home">
		<div class="fixed">
			<van-search placeholder="请输入您想要的商品" v-model="search_key" />
		</div>
		<van-tabs v-model="active" animated color="#4963C2">
			<van-tab v-for="item in tabList" :name="item.val" :title="item.label" :key="item.id">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<template v-if="item.val==='all'">

							<!-- banner -->
							<van-swipe :autoplay="3000" indicator-color="white">
								<van-swipe-item class="img-box">
									<img src="/static/banner/b1.jpg" />
								</van-swipe-item>
							</van-swipe>
						
								<!--产品列表  -->
								<div class="product">
									<div class="product-title">
										<span>新手特权 仅限首单</span>
										<p class="desc">直连大牌制造 每日10点上新</p>
									</div>
									<!-- 过滤 -->
									<div class="product-fliter">
										<div class="filter-item">热门</div>
										<div class="filter-item">
											<span>价格</span>
											<div class="price">
												<span class="sort-item">
													<van-icon name="arrow-up" />
													<van-icon name="arrow-down" class="down" />
												</span>
											</div>
										</div>
										<div class="filter-item">
											<span>全部分类</span>
											<van-icon name="arrow-down" class="sort-color" />
										</div>
									</div>
									<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
										<!-- 产品 -->
										<div class="product-list">
											<van-grid :column-num="2">
												<van-grid-item v-for="i in list" :key="i">
													<router-link to="/product_detail">
														<van-image src="/static/product/home_shoe1.jpg" />
														<div class="product-info">
															<p class="text-price">210</p>
															<p class="name">鞋袋网制造商提供</p>
															<p class="desc">抽拉式系带男士休闲真皮鞋</p>
															<p class="hot">人气值:154</p>
														</div>
													</router-link>
												</van-grid-item>
											</van-grid>
										</div>
									</van-list>
								</div>
						
					
					</template>
					<template v-if="item.val==='zg'">
						<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
							<!--产品列表  -->
							<div class="product">
								<div class="product-title">
									<span>新手特权 仅限首单</span>
									<p class="desc">直连大牌制造 每日10点上新</p>
								</div>
								<!-- 过滤 -->
								<div class="product-fliter">
									<div class="filter-item">热门</div>
									<div class="filter-item">
										<span>价格</span>
										<div class="price">
											<span class="sort-item">
												<van-icon name="arrow-up" />
												<van-icon name="arrow-down" class="down" />
											</span>
										</div>
									</div>
									<div class="filter-item">
										<span>全部分类</span>
										<van-icon name="arrow-down" class="sort-color" />
									</div>
								</div>
								<!-- 产品 -->
								<div class="product-list">
									<van-grid :column-num="2">
										<van-grid-item v-for="i in list" :key="i">
											<router-link to="/product_detail">
												<van-image src="/static/product/home_shoe1.jpg" />
												<div class="product-info">
													<p class="text-price">210</p>
													<p class="name">鞋袋网制造商提供</p>
													<p class="desc">抽拉式系带男士休闲真皮鞋</p>
													<p class="hot">人气值:154</p>
												</div>
											</router-link>
										</van-grid-item>
									</van-grid>
								</div>
							</div>
						</van-list>
					</template>
				</van-pull-refresh>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search_key: '',
			isLoading: false,
			active: 'zg',
			tabList: [
				{
					id: '1',
					label: '所有商品',
					val: 'all'
				},
				{
					id: '2',
					label: '专柜推荐',
					val: 'zg'
				},
				{
					id: '3',
					label: '特价钜惠',
					val: 'tj'
				},
				{
					id: '4',
					label: '男鞋',
					val: 'mshoe'
				},
				{
					id: '5',
					label: '女鞋',
					val: 'wshoe'
				}
			],
			//下拉加载
			list: [],
			loading: false,
			finished: false
		}
	},
	methods: {
		onRefresh() {
			setTimeout(() => {
				this.$toast('刷新成功')
				this.isLoading = false
				this.count++
			}, 500)
		},
		onLoad() {
			console.log(1);
			this.loading = true;
			// 异步更新数据
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1)
				}
				// 加载状态结束
				this.loading = false

				// 数据全部加载完成
				if (this.list.length >= 400) {
					this.finished = true
				}
			}, 500)
		}
	}
}
</script>

<style lang="less" scoped>
.home {
	padding: 54px 0 55px;
}
.sort-color {
	color: #a0a0a0;
}
.product {
	background: #fff;
	padding: 0 10px;
	&-title {
		padding-top: 22px;
		text-align: center;
		span {
			color: #333333;
			padding-bottom: 5px;
			border-bottom: 1px solid #b5b5b5; /*no*/
		}
		.desc {
			color: #dab866;
			margin: 10px 0;
		}
	}
	&-fliter {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		.filter-item {
			height: 30px; /*no*/
			line-height: 30px; /*no*/
			width: 33.33%;
			position: relative;
			.price {
				position: absolute;
				top: 4px;
				right: 28px;
				font-size: 12px;
			}
			.sort-item {
				display: flex;
				color: #a0a0a0;
				flex-direction: column;
				.down {
					margin-top: -2px;
				}
			}
		}
	}
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
		}
	}
}
</style>

<style lang="less">
.home {
	.van-tab--active {
		color: #4963c2;
	}
	.van-tabs__wrap {
		position: fixed;
		top: 54px;
		left: 0;
		right: 0;
		z-index: 100;
	}
}
</style>
