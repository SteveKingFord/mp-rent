<template>
	<div class="merchant">
		<nav-bar title="商家认证"></nav-bar>
		<div class="merchant-idCard">
			<h3 class="title">
				上传身份证照片
				<span class="required">*</span>
			</h3>
			<van-row gutter="20" class="img-content">
				<van-col span="12">
					<div class="img-box">
						<img src="/static/b1.jpg" alt />
					</div>
				</van-col>
				<van-col span="12">
					<div class="img-box">
						<img src="/static/b1.jpg" alt />
					</div>
				</van-col>
			</van-row>
		</div>
		<div class="merchant-idCard-info">
			<van-field v-model="idInfo.idName" placeholder="请输入真实姓名">
				<div slot="label">
					<span>身份证姓名</span>
					<span class="required">*</span>
				</div>
			</van-field>

			<van-field v-model="idInfo.idNo" placeholder="请输入18位身份证号码">
				<div slot="label">
					<span>身份证号码</span>
					<span class="required">*</span>
				</div>
			</van-field>

			<van-field v-model="idInfo.idDate" placeholder="2018.11.08-2038.11.08">
				<div slot="label">
					<span>有效期</span>
					<span class="required">*</span>
				</div>
			</van-field>
		</div>
		<div class="merchant-bank">
			<van-cell is-link>
				<div slot="title">
					<span>开户行</span>
					<span class="required">*</span>
				</div>
			</van-cell>
			<van-cell is-link>
				<div slot="title">
					<span>开户行地址</span>
					<span class="required">*</span>
				</div>
			</van-cell>

			<van-field v-model="bank.adress">
				<div slot="label">
					<span>开户行地址</span>
					<span class="required">*</span>
				</div>
				<div slot="input">
					<select>
						<option value="1">福建</option>
					</select>
					<span class="margin-lr-xs">省</span>
					<select>
						<option value="1">厦门</option>
					</select>
					<span class="margin-lr-xs">市</span>
					<select>
						<option value="1">湖里</option>
					</select>
					<span class="margin-lr-xs">区</span>
				</div>
			</van-field>

			<van-field
				v-model="idInfo.idName"
				right-icon="scan"
				placeholder="请输入16位银行卡卡号"
				@click-right-icon="$toast('scan')"
			>
				<div slot="label">
					<span>收款卡号</span>
					<span class="required">*</span>
				</div>
			</van-field>

			<van-cell value="华林公寓">
				<div slot="title">
					<span>公寓名称</span>
					<span class="required">*</span>
				</div>
			</van-cell>

			<van-field v-model="bank.adress">
				<div slot="label">
					<span>公寓地址</span>
					<span class="required">*</span>
				</div>
				<div slot="input">
					<select>
						<option value="1">福建</option>
					</select>
					<span class="margin-lr-xs">省</span>
					<select>
						<option value="1">厦门</option>
					</select>
					<span class="margin-lr-xs">市</span>
					<select>
						<option value="1">湖里</option>
					</select>
					<span class="margin-lr-xs">区</span>
				</div>
			</van-field>
		</div>
		<div class="apartment-address">公寓所在详细地址</div>
		<div>
			<van-field class="phone" v-model="idInfo.idName" placeholder="请输入预留手机号">
				<div slot="label">
					<span>预留手机号</span>
					<span class="required">*</span>
				</div>
			</van-field>
		</div>

		<div class="merchant-card">
			<div class="title">门店照</div>
			<div class="img-box">
				<img src="/static/b1.jpg" alt />
			</div>
		</div>

		<div class="merchant-card">
			<div class="title">环境照</div>
			<div class="plus-box">
				<van-icon name="plus" />
			</div>
		</div>
		<van-button size="large" class="pay__btn">提交认证</van-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			idInfo: {
				idName: '',
				idNo: '',
				idDate: ''
			},
			bank: {
				address: ''
			}
		}
	}
}
</script>

<style lang="less" scoped>
.merchant {
	color: #333333;
	padding-top: 44px;
	padding-bottom: 64px;
	&-idCard {
		padding: 0 24px 20px;
		border: 1px solid #f5f5f5;
		background-color: #fff;
		.title {
			font-size: 16px;
			color: #333333;
			font-weight: 400;
		}
		.img-box {
			border: 1px solid #dbdbdb;
		}
	}
	&-idCard-info {
		background-color: #fff;
	}
	&-bank {
		margin-top: 10px;
		background-color: #fff;
		select {
			border: 0;
			padding: 2px 0;
			border-bottom: 1px solid #222328;
		}
	}
	&-card {
		padding: 15px;
		margin-bottom: 10px;
		background-color: #fff;
		.title {
			padding-bottom: 15px;
		}
		.img-box,
		.plus-box {
			width: 80px;
			height: 80px;
		}
		.plus-box {
			font-size: 24px;
			color: #c3c3c3;
			text-align: center;
			line-height: 80px;
			border: 1px solid #c3c3c3;
		}
	}
	.pay__btn {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		color: #fff;
		height: 44px;
		line-height: 44px;
		background: #38b3ff;
	}
	/deep/.van-nav-bar {
		background-color: #38b3ff;
		.van-nav-bar__title,
		.van-icon {
			color: #fff;
		}
	}
	/deep/.van-icon-scan {
		color: #38b3ff;
	}
}
.required {
	color: #e6cd7d;
}
.apartment-address {
	color: #c5c5c5;
	padding: 20px 0;
	text-align: center;
	background-color: #fff;
	border-top: 1px solid #cccccc;
}
.phone {
	margin: 10px 0;
}
.margin-lr-xs {
	margin: 0 5px;
}
</style>