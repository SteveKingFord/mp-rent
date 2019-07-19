<template>
	<div class="order">
		<nav-bar title="订单详情"></nav-bar>
		<div class="order-procut">
			<div class="procut-card">
				<div class="img-box">
					<img src="/static/product/collect.png" alt />
				</div>
				<div class="info-box">
					<p class="name">阿迪达斯</p>
					<p class="c-size">
						<span>红色</span>
						<span>37码</span>
					</p>
					<p>
						<span>
							拿货价：
							<span class="text-ptice">248.00</span>
						</span>
						<span class="margin-left-sm">
							批发价：
							<span class="text-ptice">260.00</span>
						</span>
					</p>
				</div>
			</div>
			<div class="product-info">
				<span>品牌：阿迪达斯</span>
				<span>型号：FG544</span>
				<span>标签：椰子鞋</span>
			</div>
			<div class="user-info">
				<div class="flex justify-between">
					<span class="name">微商：李四</span>
					<span class="text-price">248.00</span>
				</div>
				<div class="text-right num">x 2</div>
				<div class="text-right">
					共计
					<span class="text-price sum">248.00</span>
				</div>
			</div>
		</div>

		<div class="order-info">
			<div class="flex justify-between align-center fee-no">
				<span class="name">物流单号：464366544566</span>
				<van-button size="small" class="select">查看物流</van-button>
			</div>
      <div class="order-no">订单号：663438885745654</div>
      <div class="order-time">下单时间：2019-07-11 3:34:34</div>
		</div>


  
    <p class="order-address"> 
      <span>收货人: 林生 </span>  
      <span class="margin-left-sm">联系方式: 18659784458</span>   
      <span class="margin-left-sm">收货地址: 安徽省合肥市蜀山区蜀山传1107</span>
    </p>
   
    <div class="text-right padding-15">
      <van-button size="small" class="order__btn" >订单完成</van-button>
    </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			popupStatus: 'add',
			textMap: {
				add: '添加地址',
				select: '选择地址'
			},
			show: false,
			value1: 0,
			value2: 'a',
			option1: [
				{ text: '全部商品', value: 0 },
				{ text: '新款商品', value: 1 },
				{ text: '活动商品', value: 2 }
			],
			option2: [
				{ text: '默认排序', value: 'a' },
				{ text: '好评排序', value: 'b' },
				{ text: '销量排序', value: 'c' }
			]
		}
	},
	methods: {
		openPopup(val) {
			this.popupStatus = val
			this.show = true
		},
		hidePopup() {
			this.show = false
		}
	}
}
</script>


<style lang="less" scoped>
.justify-between {
	justify-content: space-between;
}
.margin-left-sm {
  margin-left: 10px;
}
.padding-15 {
  padding: 15px;
}
.order {
	padding-top: 45px;
	&-procut {

		color: #666666;
		background: #fff;
	}
	.procut-card {
    padding: 15px;
		margin-top: 10px;
		display: flex;
		.img-box {
			width: 70px;
			height: 70px;
		}
		.info-box {
			flex: 1;
			padding-left: 10px;
			font-size: 10px;
			color: #999999;
			.name {
				font-size: 15px;
				color: #333;
				margin-bottom: 10px;
			}
			.c-size {
				font-size: 12px;
				margin-bottom: 5px;
			}
		}
	}
	.product-info {
    padding: 0 15px 15px;
		display: flex;
		font-size: 12px;
    justify-content: space-between;
    border-bottom: 1px solid #F2F2F2;
	}
	.user-info {
    padding: 15px;
		padding-top: 15px;
		font-size: 12px;
    color: #666;
		.name {
			color: #333;
		}
		.num {
			margin: 5px 0;
		}
		.sum {
			color: #ff9e24;
			font-size: 18px;
		}
	}
	&-info {
		margin-top: 5px;
		background: #fff;
		color: #666;
    font-size: 12px;
    
		.select {
			color: #4963c2;
			border: 1px solid #4963c2;
			border-radius: 4px;
    }
    .fee-no {
      padding: 15px 15px 5px;
    }
    .order-no {
      padding: 15px;
      border-top: 1px solid #F2F2F2;
    }
    .order-time {
      padding: 0 15px 15px;
    }
  }
  &-address {
    margin-top: 5px;
    background: #fff;
    padding: 15px;
    font-size: 12px;
    color: #666;
    line-height: 20px;
  }
  .order__btn {
    color: #fff;
    background: #4963C2;
    border-radius: 6px;
  }
}
</style>

