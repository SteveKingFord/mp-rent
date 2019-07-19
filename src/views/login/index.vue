<template>
	<div class="container">
		<div class="login-title">账号密码登录</div>
		<div class="login-form">
			<van-cell-group>
				<van-field placeholder="请输入用户名" v-model="loginForm.userName">
					<div slot="left-icon" class="img-box">
						<img src="/static/login_phone.png" />
					</div>
				</van-field>
				<van-field
					type="password"
					placeholder="请输入用户名"
					left-icon="question-o"
					v-model="loginForm.password"
					clss="login-password"
				>
					<div slot="left-icon" class="img-box lock">
						<img src="/static/login_lock.png" />
					</div>
				</van-field>
			</van-cell-group>
			<div class="login-box">
				<van-button type="default" class="primary-bg" @click='login'>登录</van-button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			loginForm: {
				userName: '',
				password: ''
			}
		}
	},
	methods: {
		login(){
			this.$router.push('/home');
		}
	}
}
</script>

<style lang="less" scoped>
.container {
	position: fixed;
	width: 100%;
	height: 100%;
	background: url('/static/login_bg.png') no-repeat;
	background-size: 100% 100%;
}
.login {
	&-title {
		color: #394c92;
		font-size:24px;
		padding-top: 104px;
		padding-left: 42px;
	}
	&-form {
		padding: 40px 30px 0;
		.img-box {
			width: 15px;
			height: 20px;
			&.lock {
				width: 15px;
				height: 20px;
			}
		}
	}
	&-box {
		padding: 40px 30px 0;
		text-align: center;
		button {
			display: block;
			width: 100%;
			border-radius: 20px;
		}
	}
}
</style>
<style lang="less">
.login-form {
	.van-cell {
		align-items: center;
	}
	.van-hairline--top-bottom::after {
		border: 0;
	}
	.van-cell:not(:last-child)::after {
		border-bottom: unset; /*no*/
	}
	.van-field::after {
		position: absolute;
		box-sizing: border-box;
		content: ' ';
		pointer-events: none;
		right: 0;
		bottom: 0;
		left: 15px;
		border-bottom: 1px solid #ebedf0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		border-bottom: 1px solid #bfbfbf !important; /*no*/
	}
	.van-cell-group {
		background-color: transparent;
	}
	.van-cell {
		background-color: transparent;
	}
}
</style>


