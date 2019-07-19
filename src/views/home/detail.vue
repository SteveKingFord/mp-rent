<template>
	<div class="container">
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item class="img-box">
				<img src="/static/detail/b2.jpg" />
			</van-swipe-item>

			<div class="procut-ball img-box left" @click="$router.go(-1)">
				<van-icon name="arrow-left" />
			</div>
			<div class="procut-ball img-box share">
				<img src="/static/detail/share.png" />
			</div>
			<div class="procut-ball img-box ellip">
				<van-icon name="ellipsis" />
			</div>
		</van-swipe>
		<!-- 价格 -->
		<div class="price-box">
			<div>
				拿货价：
				<span class="text-price">210</span>
			</div>
			<div>统一批发价：￥260.00</div>
		</div>
		<!-- 描述 -->
		<div class="desc-box">
			<p class="desc">八幡(BAFAN)运动鞋女ins百搭休闲鞋女韩版2019夏季新款网面透气轻便</p>
			<van-row class="tag-item">
				<van-col span="8" class="flex align-center justify-content">
					<div class="img-box">
						<img src="/static/detail/zp.png" />
					</div>
					<span>品质保证</span>
				</van-col>
				<van-col span="8" class="flex align-center justify-content">
					<div class="img-box">
						<img src="/static/detail/th.png" />
					</div>
					<span>自由退货</span>
				</van-col>
				<van-col span="8" class="flex align-center justify-content">
					<div class="img-box">
						<img src="/static/detail/by.png" />
					</div>
					<span>首发包邮</span>
				</van-col>
			</van-row>
			<div class="post-item">
				<div>
					<span class="fee">运费：</span>
					<span class="note">除偏远地区全场包邮( 不包括货到付款 )</span>
				</div>
				<van-icon name="arrow" class="icon" />
			</div>
		</div>
		<!-- 详情 -->
		<div class="product-card">
			<div class="title">商品详情</div>
			<div class="desc-list">
				<van-row class="margin-bottom-xxs">
					<van-col span="8">品牌名称</van-col>
					<van-col span="16">KIAPURDEN/凯普登</van-col>
				</van-row>
				<van-row class="margin-bottom-xxs">
					<van-col span="8">功能</van-col>
					<van-col span="16">透气</van-col>
				</van-row>
				<van-row class="margin-bottom-xxs">
					<van-col span="8">闭合方式</van-col>
					<van-col span="16">系带</van-col>
				</van-row>
				<van-row class="margin-bottom-xxs">
					<van-col span="8">尺码</van-col>
					<van-col span="16">38 39 40 41 42 43 44</van-col>
				</van-row>
				<van-row class="margin-bottom-xxs">
					<van-col span="8">图案</van-col>
					<van-col span="16">纯色</van-col>
				</van-row>
				<van-row>
					<van-col span="8">风格</van-col>
					<van-col span="16">休闲</van-col>
				</van-row>
			</div>
			<p class="more">
				<span class="margin-right-xxs">展开全部</span>
				<van-icon name="arrow-down" />
			</p>
		</div>
		<!-- rich -->
		<div class="img-box">
			<img src="/static/detail/b1.jpg" alt />
		</div>
		<!-- 底部 -->
		<div class="footer">
			<div class="star">
				<van-icon name="star-o" class="icon" />
				<p>收藏</p>
			</div>
			<div class="flex-sub buy" @click="show=true">购买</div>
		</div>

		<!-- 购买商品 -->
		<van-sku
			v-model="show"
			:sku="sku"
			:goods="goods"
			:hide-stock="sku.hide_stock"
			@buy-clicked="onBuyClicked"
			@add-cart="onAddCartClicked"
		>
			<div slot="sku-actions">
				<van-button size="large" class="primary-bg" @click="toPay">购买</van-button>
			</div>
		</van-sku>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			sku: {
				tree: [
					{
						k: '颜色', // skuKeyName：规格类目名称
						v: [
							{
								id: '30349', // skuValueId：规格值 id
								name: '红色', // skuValueName：规格值名称
								imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
							},
							{
								id: '1215',
								name: '蓝色',
								imgUrl: 'https://img.yzcdn.cn/2.jpg'
							}
						],
						k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					},
					{
						k: '尺寸', // skuKeyName：规格类目名称
						v: [
							{
								id: '30349', // skuValueId：规格值 id
								name: '39', // skuValueName：规格值名称
								imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
							},
							{
								id: '1215',
								name: '41',
								imgUrl: 'https://img.yzcdn.cn/2.jpg'
							}
						],
						k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					}
				],
				// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
				list: [
					{
						id: 2259, // skuId，下单时后端需要
						price: 100, // 价格（单位分）
						s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
						s3: '0', // 最多包含3个规格值，为0表示不存在该规格
						stock_num: 110 // 当前 sku 组合对应的库存
					}
				],
				price: '1.00', // 默认价格（单位元）
				stock_num: 227, // 商品总库存
				collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
				none_sku: false, // 是否无规格商品
				hide_stock: false // 是否隐藏剩余库存
			},
			goods: {
				// 商品标题
				title: '测试商品',
				// 默认商品 sku 缩略图
				picture: 'https://img.yzcdn.cn/1.jpg'
			}
		}
	},
	methods: {
		onBuyClicked() {},
		onAddCartClicked() {},
		toPay() {}
	}
}
</script>




<style lang="less" scoped>
.container {
	padding-bottom: 45px;
	.procut-ball {
		position: absolute;
		top: 10px;
		width: 15px;
		height: 15px;
		padding: 10px;
		color: #fff;
		background: #8a8a8a;
		border-radius: 50%;
		&.left {
			left: 15px;
		}
		&.share {
			right: 80px;
		}
		&.ellip {
			right: 15px;
		}
	}
	.price-box {
		height: 60px;
		line-height: 80px;
		display: flex;
		padding: 0 15px;
		color: #fff;
		font-size: 12px;
		justify-content: space-between;
		background: url('/static/detail/bg.png') no-repeat;
		background-size: 100% 100%;
		.text-price {
			font-size: 20px;
		}
	}
	.desc-box {
		background: #fff;
		.desc {
			padding: 15px;
			font-size: 15px;
		}
		.tag-item {
			color: #666;
			padding: 10px 0;
			font-size: 10px;
			text-align: center;
			background: #fff5dc;
			.img-box {
				width: 15px;
				height: 15px;
				margin-right: 5px;
			}
		}
		.post-item {
			display: flex;
			padding: 15px;
			align-items: center;
			font-size: 12px;
			color: #333333;
			justify-content: space-between;
			.note {
				color: #7f7f7f;
			}
			.fee {
				letter-spacing: 8px;
				text-align-last: justify;
			}
			.icon {
				color: #6a6a6a;
				font-size: 16px;
			}
		}
	}
	.product-card {
		margin-top: 15px;
		padding: 15px;
		background: #fff;
		color: #666;
		.title {
			font-size: 15px;
			text-align: center;
		}
		.desc-list {
			padding: 20px;
		}
		.more {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 45px;
		display: flex;
		.star {
			width: 20%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background: #fff;
			.icon {
				font-size: 20px;
			}
		}
		.buy {
			line-height: 45px;
			color: #fff;
			font-size: 16px;
			text-align: center;
			background: #4963c2;
		}
	}
}
</style>

