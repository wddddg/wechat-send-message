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
				<view class="">
					<uni-easyinput v-model="code" placeholder="请输入验证码" />
					<button>获取验证码</button>
				</view>
			</uni-card>
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
	watch(() => props.value, (value) => {
		if (value) {
			popup.value.open()
		}
	}, {
		deep: true
	})
	const change = (e) => {
		if (!e.show) {
			emits('update:value', false)
		}
	}
	const closePopup = () => {
		popup.value.close()
	}
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
		.phone-ipt-box{
			margin: 0 0 20rpx 0;
		}
	}
</style>
