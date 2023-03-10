<template>
	<uni-popup ref="popup" background-color="none" @change="change">
		<view class="popup-content">
			<uni-card :border="false" margin="0" spacing="0" padding="0" :is-shadow="false">
				<template v-slot:title>
					<view class="popup-title-box">
						<view class="popup-title">绑定手机号</view>
						<view>
							<uni-icons type="closeempty" size="10" @click="closePopup"></uni-icons>
						</view>
					</view>
				</template>
				<view class="phone-ipt-box">
					<uni-easyinput v-model="phone" placeholder="请输入手机号码" />
				</view>
				<view class="code-ipt-box">
					<uni-easyinput v-model="code" placeholder="请输入验证码" />
					<view class="get-code-btn" @click="getCode">{{ showCountDown? count : '获取验证码' }}</view>
				</view>
			</uni-card>
			<button class="binding-btn"
				:class="code.length >= 4 ? 'active-binding-btn':'unactive-binding-btn'">绑定</button>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		defineProps,
		watch,
		ref,
		defineEmits
	} from 'vue'
	const props = defineProps(['value'])
	const emits = defineEmits()
	const popup = ref(null)
	const phone = ref('')
	const code = ref('')
	const count = ref(60)
	const showCountDown = ref(false)
	let timer;
	const change = (e) => {
		if (!e.show) {
			emits('update:value', false)
		}
	}
	const closePopup = () => {
		popup.value.close()
	}
	const getCode = () => {
		if (showCountDown.value) {
			return;
		}
		showCountDown.value = true
		countDownFunc()
	}
	const countDownFunc = () => {
		timer = setInterval(() => {
			if (showCountDown.value) {
				return count.value--
			}
		}, 1000)
	}
	watch(() => count.value, (newValue) => {
		if (newValue <= 0) {
			clearInterval(timer)
			showCountDown.value = false
		}
	})
	watch(() => props.value, (value) => {
		if (value) {
			popup.value.open()
		}
	}, {
		deep: true
	})
</script>

<style scoped lang="scss">
	.popup-title-box {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.popup-title {
			margin: 20rpx 0;
			color: #303133;
			font-size: 24rpx;
		}
	}


	.popup-content {
		padding: 30rpx;
		border-radius: 30rpx;
		background-color: #fff;

		.phone-ipt-box {
			margin: 0 0 20rpx 0;
		}

		.code-ipt-box {
			display: flex;
			align-items: center;

			.get-code-btn {
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				width: 160rpx;
				color: transparent;
				background-image: $uni-theme-btn-color;
				background-clip: text;
				border: 4rpx solid;
				border-image: $uni-theme-btn-color 1;

				font-size: 24rpx;
				margin: 0 0 0 20rpx;
			}
		}

		.binding-btn {
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 60rpx;
			color: #fff;
			font-size: 24rpx;
			margin: 20rpx 0 0;
		}

		.active-binding-btn {
			background: $uni-theme-btn-color;
		}

		.unactive-binding-btn {
			background: #C0C4CC;
		}
	}
</style>
