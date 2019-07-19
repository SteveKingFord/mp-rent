<template>
	<div class="nav-container">
		<van-nav-bar
			:title="title"
			:left-text="leftText"
			:right-text="rightText"
			:left-arrow="leftArrow"
			@click-left="onClickLeft"
			@click-right="onClickRight"
			:fixed="fixed"
			:border="border"
		/>
	</div>
</template>

<script>
export default {
	name: 'NavBav',
	props: {
		title: {
			type: String,
			default: ''
		},
		leftArrow: {
			type: Boolean,
			default: true
		},
		leftText: {
			type: String,
			default: ''
		},
		rightText: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		},
		fixed: {
			type: Boolean,
			default: true
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onClickLeft() {
			this.$router.go(-1)
		},
		onClickRight() {
			this.$router.push({
				path: this.url
			})
		}
	}
}
</script>

<style lang='less'>
.nav {
	&-container {
		.van-nav-bar {
			height: 45px;
			line-height: 45px;
			color: #6A6A6A;
		}
		.van-nav-bar {
			.van-icon {
				color: #6A6A6A;
				font-size: 20px;
			}
		}
		.van-nav-bar__title {
			color: #333;
		}
		.van-nav-bar__text {
			color: #909090;
		}
	}
}
</style>