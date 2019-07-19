<template>
	<div class="r-detail">
		<van-swipe @change="onChange" class="r-detail-swiper">
			<van-swipe-item class="img-box">
				<img src="/static/b1.jpg" alt="">
			</van-swipe-item>
			<van-swipe-item class="img-box">
				<img src="/static/b2.jpg" alt="">
			</van-swipe-item>
			<van-swipe-item class="img-box">
				<img src="/static/b3.jpg" alt="">
			</van-swipe-item>
			<van-swipe-item class="img-box">
				<img src="/static/b4.jpg" alt="">
			</van-swipe-item>
			<!-- 下标 -->
			<div class="custom-indicator" slot="indicator">
				<van-icon name="photo-o" class="photo" />
				<span class="cerrent">
					<span class="now">{{ current + 1 }}</span>&nbsp;/&nbsp;4
				</span>
			</div>
		</van-swipe>
		<!-- 返回 -->
		<div class="arrow-box" @click="$router.go(-1)">
			<van-icon name="arrow-left" class="photo" />
		</div>

		<div class="r-detail-card">
			<div class="price">1000-2000元/月</div>
			<div class="localtion">厦门市 思明区 莲坂国贸大厦复兴小区出租 家具齐全</div>
			<van-row class="house-info">
				<van-col span="8">
					<p>1室1厅1卫</p>
					<p>房型</p>
				</van-col>
				<van-col span="8">
					<p>1000元/月</p>
					<p>押金</p>
				</van-col>
				<van-col span="8">
					<p>月付</p>
					<p>方式</p>
				</van-col>
			</van-row>
			<div class="r-detail-house">
				<div class="title">房屋位置</div>
				<p class='address'>公寓详细地址某某路55号</p>
				<div class="img-box">
					<img src="/static/map.png" alt="">
				</div>
		
			</div>
		</div>

		<van-button size="large" class="appoint__btn">立即预约</van-button>

	</div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
</script>

<style lang="less" scoped>
.r-detail {
	color: #333;
	position: relative;
	padding-bottom: 50px;
	.arrow-box {
		position: absolute;
		top: 20px;
		left: 20px;
		width: 35px;
		height: 35px;
		line-height: 40px;
		border-radius: 50%;
		font-size: 20px;
		color: #fff;
		text-align: center;
		background: rgba(000, 000, 000, .3);
	}
	.appoint__btn {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		color: #fff;
		background: #38B3FF;
	}
	&-swiper {
		height: 280px;
		position: relative;
		.custom-indicator {
			position: absolute;
			right: 10px;
			bottom: 10px;
			display: flex;
			color: #fff;
			padding: 4px 10px;
			border-radius: 16px;
			align-items: center;
			background: rgba(000, 000, 000, .3);
			.photo {
				margin-right: 4px;
			}
			.cerrent {
				font-size: 12px;
				.now {
					font-size: 14px;
				}
			}
		}
	
	}
	&-card {
		padding: 15px 10px;
		background: #fff;
		.price {
			color: #FF5324;
			font-size: 20px;
			font-weight: 800;
		}
		.localtion {
			font-size: 20px;
			font-weight: 800;
			padding: 15px 0 10px;
		
		}
		.house-info {
			text-align: center;
			padding: 25px 0;
			font-size: 16px;
			border-top: 1px solid #F3F3F3;
			border-bottom: 1px solid #F3F3F3;
			.van-col {
				p{
					&:last-child {
						font-size: 14px;
						margin-top: 10px;
						color: #999999;
					}
				}
			}
		}
	}
	&-house {
		padding: 15px 0;
		.title {
			font-size: 20px;
			font-weight:800;
		}
		.address {
			margin: 15px 0;
			font-weight:500;
			font-size: 16px;
		}
	}
}
</style>
