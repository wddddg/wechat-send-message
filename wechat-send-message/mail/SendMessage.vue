<template>
	<view class="">
		<view class="send-message-tip">
			<uni-notice-bar :speed="20" showIcon scrollable single
				text="网络不是法外之地，请大家自觉遵守法律法规。所有短信都会经过人工审核，请勿发送欺诈、辱骂、色情等违规信息！若发现违规内容，我们会将违规用户的信息以及IP地址上报公安系统以及中央网信办违法和不良信息举报中心！">
			</uni-notice-bar>
		</view>
		<view class="message-content-body">
			<view class="message-content-box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-width="160rpx">
					<view>
						<uni-forms-item label="手机号">
							<uni-easyinput v-model="baseFormData.phone" placeholder="请输入对方手机号" />
							<view class="content-tip">每天只能发送5条短信</view>
						</uni-forms-item>
					</view>
					<view>
						<uni-forms-item label="内容">
							<uni-easyinput type="textarea" v-model="baseFormData.message"
								placeholder="请输入短信内容(把想说的话或秘密告诉Ta吧)" />
							<view class="content-tip">{{ 0 }}/350 66字1条, 共1条1元</view>
						</uni-forms-item>
					</view>
					<view>
						<uni-forms-item label="发送时间">
							<uni-datetime-picker type="datetime" return-type="timestamp"
								v-model="baseFormData.datetimesingle" placeholder="请选择发送时间" />
						</uni-forms-item>
					</view>
					<view class="radio-box">
						<radio-group @change="changeAnonymousSendRadio">
							<radio :value="baseFormData.anonymousSend" color="#162a89" class="radio-input"
								:checked="anonymousSendRadio" />
						</radio-group>
						<view @click="changeAnonymousSendRadio">
							匿名发送
						</view>
					</view>
					<view class="radio-box">
						<radio-group @change="changeReadAndAppeptRadio">
							<radio :value="baseFormData.readAndAppept" color="#162a89" class="radio-input"
								:checked="readAndAppeptRadio" />
						</radio-group>
						<view @click="changeReadAndAppeptRadio">
							我已阅读并接受<label @click.stop="goUserAgreement(1)">《用户协议》、</label><label
								@click.stop="goUserAgreement(2)">《隐私政策》</label>
						</view>
					</view>
				</uni-forms>
				<view>
					<button class="send-message-btn" @click="sendMessage">发送</button>
				</view>
				<view class="send-message-price">短信发送价格1元/条</view>
				<view class="use-help" @click="goUserAgreement(3)">使用帮助</view>
			</view>
		</view>
		<BindingPhone v-model:value="showBindingPhone" />
	</view>
</template>

<script setup>
	import BindingPhone from '@/components/BindingPhone.vue'
	import { sendMessage as sendMessageRequest} from '@/api/mail.js'
	import {
		ref,
		unref
	} from 'vue'
	const showBindingPhone = ref(false)
	const baseFormData = ref({})
	const anonymousSendRadio = ref(false)
	const readAndAppeptRadio = ref(false)
	const bindingPhoneNumber = uni.getStorageSync('bindingPhone')
	const sendMessage = () => {
		if (!anonymousSendRadio.value && !bindingPhoneNumber) {
			showBindingPhone.value = true
			return;
		}
		if (!readAndAppeptRadio.value) {
			uni.showToast({
				title: '请阅读并接受《用户协议》、《隐私政策》',
				icon: 'none'
			})
			return;
		}
		sendMessageRequest(baseFormData.value).then(res =>{
			if(res.code != 0){
				uni.showToast({
					title: res.msg,
					icon: 'error'
				})
			}else{
				uni.showToast({
					title: res.msg,
					icon: 'success'
				})
			}
		})
	}
	const changeAnonymousSendRadio = () => {
		anonymousSendRadio.value = !anonymousSendRadio.value
		baseFormData.value.anonymousSend = anonymousSendRadio.value
	}
	const changeReadAndAppeptRadio = () => {
		readAndAppeptRadio.value = !readAndAppeptRadio.value
	}
	const goUserAgreement = (value) => {
		uni.navigateTo({
			url: '/mine/UserAgreement?id=' + value
		})
	}
</script>

<style scoped lang="scss">
	.send-message-tip {
		background: rgba(39, 136, 202, .5);
		color: #fff;
	}

	.message-content-body {
		margin: 10rpx;
		padding: 10rpx;

		.message-content-box {
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;

			.content-tip {
				text-align: right;
				font-size: 24rpx;
				color: #909399;
			}
		}

		.radio-box {
			font-size: 30rpx;
			margin: 20rpx 0;
			display: flex;
			align-items: center;
			line-height: 42rpx;

			label {
				color: #162a89;
			}

			.radio-input {
				transform: scale(0.7);
				margin-right: 6rpx;
			}
		}

		.send-message-btn {
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 80rpx;
			color: #fff;
			background: $uni-theme-btn-color;
			font-size: 30rpx;
			margin-top: 30rpx;
		}

		.send-message-price,
		.use-help {
			text-align: center;
			font-size: 24rpx;
			margin: 10rpx 0;
			color: #909399;
		}
	}
</style>
