<template>
	<div class="me">
		<!-- banner -->
		<div class="me-banner">
			<div class="user-info">
				<img src="/static/user.jpg" alt="用户" class="user__img" />
				<div class="user-detail">
					<p class="phone">15245844...</p>
					<div class="money-box">
						<van-icon name="balance-o" />
						<span class="money">袋币：154</span>
						<van-button type="default" class="money__btn" @click="showPopup">提现</van-button>
					</div>
				</div>
			</div>
			<router-link to="/setting" class="set">
				<van-icon name="setting-o" class="icon" />
				<p>设置</p>
			</router-link>
		</div>
		<!-- nav -->
		<div class="me-nav">
			<router-link to="/order?active=all" class="nav-item order">
				<div class="img-box">
					<img src="/static/me/order.png" alt />
				</div>
				<p>全部订单</p>
			</router-link>
			<router-link to="/order?active=unsent" class="nav-item">
				<div class="img-box">
					<img src="/static/me/sent.png" alt />
				</div>
				<p>待发货</p>
			</router-link>
			<router-link to="/order?active=unget" class="nav-item">
				<div class="img-box">
					<img src="/static/me/get.png" alt />
				</div>
				<p>待收货</p>
			</router-link>
			<router-link to="/order?active=unstar" class="nav-item">
				<div class="img-box">
					<img src="/static/me/score.png" alt />
				</div>
				<p>待评价</p>
			</router-link>
		</div>
		<!-- team -->
		<div class="me-team">
			<router-link to="/team" class="team-item team">
				<div class="img-box">
					<img src="/static/me/team.png" />
				</div>
				<p>我的团队</p>
			</router-link>
			<router-link to="/platform" class="team-item">
				<div class="img-box">
					<img src="/static/me/platfrom.png" />
				</div>
				<p>我的平台</p>
			</router-link>
		</div>
		<!-- product -->
		<div class="me-product">
			<div class="title">推荐商品</div>
				<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
					<van-grid :column-num="2">
						<van-grid-item v-for="i in list" :key="i">
							<van-image src="/static/product/home_shoe1.jpg" />
							<div class="product-info">
								<p class="text-price">210</p>
								<p class="name">鞋袋网制造商提供</p>
								<p class="desc">抽拉式系带男士休闲真皮鞋</p>
								<p class="hot">人气值:154</p>
							</div>
						</van-grid-item>
					</van-grid>
				</van-list>
		</div>

		<!-- 提现弹窗 -->
		<van-popup v-model="show">
			<div class="popup">
				<div class="popup-head">
					提现
					<van-icon name="close" class="close" @click="hidePopup" />
				</div>
				<div class="popup-content">
					<p class="money">可提现金额：154</p>
					<div class="popup-field">
						<input type="text" placeholder="请输入提现金额" />
					</div>
					<van-button type="default" size="large" class="primary-bg popup__btn">申请提现</van-button>
					<router-link to="/record" class="record">提现记录</router-link>
				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			//下拉加载
			list: [],
			loading: false,
			finished: false
		}
	},
	methods: {
		showPopup() {
			this.show = true
		},
		hidePopup(){
			this.show = false
		},
		onLoad() {

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
.me {
	height: 100%;
	padding-bottom: 55px;
	&-banner {
		height: 132px;
		background: #4963c2;
		position: relative;
		.set {
			position: absolute;
			right: 15px;
			top: 10px;
			color: #fff;
			text-align: center;
			.icon {
				font-size: 22px;
			}
		}
		.user-info {
			display: flex;
			color: #fff;
			padding: 34px 30px;
			.user__img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
		.user-detail {
			margin-left: 20px;
			.phone {
				font-size: 18px;
				margin-bottom: 10px;
			}
			.money-box {
				display: flex;
				align-items: center;
				.money {
					margin: 0 20px 0 10px;
				}
			}
			.money__btn {
				height: 30px;
				line-height: 30px;
				color: #dab866;
				border: 1px solid #dab866;
				background-color: #4963c2;
			}
		}
	}
	&-nav {
		display: flex;
		font-size: 12px;
		color: #333;
		padding: 15px 0;
		background: #fff;
		.nav-item {
			width: 25%;
			text-align: center;
			position: relative;
			&.order::after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				width: 5px;
				height: 100%;
				background: url('/static/me/line.png') no-repeat;
				background-size: 100% 100%;
			}
			.img-box {
				width: 20px;
				height: 20px;
				margin: 0 auto;
				padding: 10px;
				background: #dce0ed;
				border-radius: 50%;
			}
			p {
				margin-top: 10px;
			}
		}
	}
	&-team {
		display: flex;
		font-size: 14px;
		background: #fff;
		margin: 10px 0;
		padding: 20px 0;
		.team-item {
			width: 50%;
			text-align: center;
			&.team {
				border-right: 1px solid #f1eef5;
			}
			.img-box {
				width: 30px;
				height: 30px;
				margin: 0 auto;
			}
			p {
				margin-top: 10px;
			}
		}
	}
	&-product {
		background: #fff;
		.title {
			color: 333;
			font-size: 14px;
			text-align: center;
			padding: 25px 0;
		}
		.product-info {
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
}
.popup {
	width: 310px;
	height: 280px;
	border-radius: 8px;
	&-head {
		color: #fff;
		padding: 15px 0;
		font-size: 18px;
		text-align: center;
		background: #4963c2;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		position: relative;
		.close{
			position: absolute;
			top: 10px;
			right: 10px;
			font-size: 25px;
		}
	}
	&-content {
		padding: 20px 25px;
		background: #fff;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		.money {
			color: #333;
			font-size: 16px;
			padding-left: 10px;
		}
		.record {
			width: 100%;
			color: #4963c2;
			text-align: center;
			padding-top: 15px;
			display: inline-block;
		}
	}
	&-field {
		padding: 15px 0;
		input {
			width: 100%;
			height: 44px;
			border-radius: 5px;
			padding-left: 5px;
			border: 1px solid #b4b4b4;
			color: #333;
			&::-webkit-input-placeholder {
				color: #b9b9b9;
			}
		}
	}
	&__btn {
		font-size: 12px;
		border-radius: 8px;
	}
}
</style>

<style lang="less">
.me {
	.van-popup {
		border-radius: 6px;
		background-color: transparent;
	}
}
</style>


