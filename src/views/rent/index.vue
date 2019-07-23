<template>
	<div class="container rent">
		<nav-bar :leftArrow="false" title="租君" />
		<van-search
			class="rent-searchbar fixed"
			v-model="search_key"
			placeholder="凯兴小区"
			shape="round"
			@search="onSearch"
		>
			<div slot="label" class="rent-address" @click="onSearch">
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
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
					<li class="rent-item">
						<router-link to="/detail">
							<div class="img-box">
								<img src="/static/user.jpg" alt />
							</div>
							<div class="info">
								<div class="loacltion">厦门市 思明区 莲坂国贸大厦复</div>
								<div class="type">1室1厅1卫</div>
								<div class="price">1000-2000元/月</div>
							</div>
						</router-link>
					</li>
					<li class="rent-item" v-for="i in list" :key="i">
						<router-link to="/detail">
							<div class="img-box">
								<img src="/static/user.jpg" alt />
							</div>
							<div class="info">
								<div class="loacltion">厦门市 湖里区 福园公寓</div>
								<div class="type">1室1厅1卫</div>
								<div class="price">1000-2000元/月</div>
							</div>
						</router-link>
					</li>
				</van-list>
			</van-pull-refresh>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLoading: false,
			count: 0,
			search_key: '',
			//下拉加载
			list: [],
			loading: false,
			finished: false
		}
	},
	methods: {
		onSearch() {},
		onRefresh() {
			setTimeout(() => {
				this.$toast('刷新成功')
				this.isLoading = false
				this.count++
			}, 500)
		},
		onLoad() {
			this.loading = true
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
		border-bottom: 1px solid #ececec;
		/deep/ .van-col {
			position: relative;
			&:not(:last-child)::after {
				content: '';
				position: absolute;
				width: 1px;
				height: 40%;
				top: 50%;
				right: 0;
				background: #ececec;
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
				border-bottom: 1px solid #f3f3f3;
			}
			a {
				display: flex;
				.img-box {
					width: 90px;
					height: 90px;
					img {
						border-radius: 6px;
					}
				}
				.info {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 10px;
					.loacltion {
						font-size: 18px;
						font-weight: 500;
						font-weight: 500;
					}
					.type {
						font-size: 14px;
						color: #777777;
						margin: 5px 0;
						font-weight: 500;
					}
					.price {
						font-size: 16px;
						color: #ff5324;
						font-weight: 800;
					}
				}
			}
		}
	}

	/deep/ .van-search__label {
		color: #333333;
	}
	/deep/ .van-search__content {
		background: #f2f2f2;
	}
}
</style>

