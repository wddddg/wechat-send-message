<template>
	<view class="mine-box">
		<view class="mine-send-message-box">
			<view class="mine-sent-out-message">
				<view class="message-title">我发送出的短信</view>
				<view class="residual-quantity"><label>{{ user.sendMessageNumber }}</label>条</view>
			</view>
			<view class="mine-sent-out-message">
				<view class="message-title">剩余短信数量</view>
				<view class="residual-quantity"><label>{{ user.balance }}</label>条</view>
			</view>
			<view><button class="recharge-btn" @click="shareToggle">充值</button></view>
		</view>
		<view class="clear-binding-phone-number" @click="clearBindingPhone">
			<view>
				清除绑定的手机号码
			</view>
			<view class="right-icon-box">
				<uni-icons type="right" size="24"></uni-icons>
			</view>
		</view>
	</view>
	<uni-popup ref="bottomPopup" type="bottom" safeArea backgroundColor="#fff">
		<view class="select-set-meal-list">
			<view class="select-set-meal-title">
				<view>选择套餐</view>
				<view>剩余短信: {{ user.balance }}条</view>
			</view>
			<view class="select-set-meal-item" v-for="(item, index) in sysSetmealList" :key="index">
				<view class="item-money-one">
					￥<label>{{item.price}}.00</label>/条
				</view>
				<view class="item-money-text">
					<view class="message-text-tip">
						<view>{{ item.number }}条短信</view>
						<label>{{ item.remark }}</label>
					</view>
					<view>
						<button class="pay-message-btn">￥{{item.price}}</button>
					</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import { getSetmealList } from '@/api/setmeal.js'
	import {
		ref
	} from 'vue'
	const sysSetmealList = ref([])
	const bottomPopup = ref(null)
	const user = ref({})
	const shareToggle = async() => {
		await getSetmealList().then(res => {
			sysSetmealList.value = res.rows
		})
		bottomPopup.value.open()
	}
	const clearBindingPhone = () => {
		uni.removeStorageSync('bindingPhone')
		uni.showToast({
			title: '清除成功',
			icon: "success"
		})
	}
	user.value = uni.getStorageSync('user')
</script>

<style scoped lang="scss">
	.mine-box {
		padding: 40rpx;

		.mine-send-message-box {
			height: 140rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx;
			border-radius: 20rpx;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

			.mine-sent-out-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				height: 100%;

				.message-title {
					color: #909399;
					font-size: 24rpx;
				}

				.residual-quantity {
					color: #909399;
					font-size: 24rpx;

					label {
						font-size: 50rpx;
						margin-right: 10rpx;
						color: #000;
					}
				}
			}

			.recharge-btn {
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 30rpx;
				padding: 0 40rpx;
				color: #fff;
				background: $uni-theme-btn-color;
				font-size: 30rpx;
			}
		}

		.clear-binding-phone-number {
			height: 50rpx;
			line-height: 50rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx;
			margin: 30rpx 0;
			border-radius: 20rpx;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

			.right-icon-box {
				color: #909399;
			}
		}
	}

	.select-set-meal-list {
		padding: 10rpx 20rpx;

		.select-set-meal-title {
			margin: 20rpx 0;
			position: relative;

			view:first-child {
				font-size: 36rpx;
				font-weight: 800;
				text-align: center;
			}

			view:last-child {
				position: absolute;
				right: 40rpx;
				top: 10rpx;
				font-size: 24rpx;
				color: #909399;
			}
		}

		.select-set-meal-item {
			display: flex;
			border: 2rpx solid rgba(22, 42, 137, .1);

			.item-money-one {
				display: inline-block;
				font-size: 24rpx;
				color: #010101;
				background: rgba(22, 42, 137, .2);
				padding: 20rpx;
				flex: none;

				label {
					font-size: 40rpx;
					color: #000;
				}
			}

			.item-money-text {
				width: 100%;
				padding: 0 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.message-text-tip {
					font-size: 30rpx;

					label {
						font-size: 24rpx;
						color: #909399;
						margin-top: 10rpx;
					}
				}

				.pay-message-btn {
					color: #fff;
					font-size: 24rpx;
					height: 60rpx;
					border-radius: 60rpx;
					line-height: 60rpx;
					background: rgb(22, 42, 137);
				}
			}
		}
	}
</style>
