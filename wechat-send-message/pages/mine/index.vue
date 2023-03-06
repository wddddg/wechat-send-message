<template>
	<view class="mine-box">
		<view class="mine-send-message-box">
			<view class="mine-sent-out-message">
				<view class="message-title">我发送出的短信</view>
				<view class="residual-quantity"><label>0</label>条</view>
			</view>
			<view class="mine-sent-out-message">
				<view class="message-title">剩余短信数量</view>
				<view class="residual-quantity"><label>0</label>条</view>
			</view>
			<view><button class="recharge-btn" @click="shareToggle">充值</button></view>
		</view>
	</view>
	<uni-popup ref="bottomPopup" type="bottom" safeArea backgroundColor="#fff">
		<view class="select-set-meal-list">
			<view class="select-set-meal-title">
				<view>选择套餐</view>
				<view>剩余短信: 0条</view>
			</view>
			<view class="select-set-meal-item" v-for="(item, index) in 8" :key="index">
				<view class="item-money-one">
					￥<label>{{item}}.00</label>/条
				</view>
				<view class="item-money-text">
					<view class="message-text-tip">
						<view>1条短信</view>
						<label>单价高 不推荐</label>
					</view>
					<view>
						<button class="pay-message-btn">￥{{item}}</button>
					</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const bottomPopup = ref(null)
	const shareToggle = () => {
		bottomPopup.value.open()
	}
</script>

<style scoped lang="scss">
	.mine-box {
		height: 140rpx;
		padding: 40rpx;

		.mine-send-message-box {
			height: 100%;
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
			border: 2rpx solid rgba(22,42,137, .1);
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
			.item-money-text{
				width: 100%;
				padding: 0 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.message-text-tip{
					font-size: 30rpx;
					label{
						font-size: 24rpx;
						color: #909399;
						margin-top: 10rpx;
					}
				}
				.pay-message-btn{
					color: #fff;
					font-size: 24rpx;
					height: 60rpx;
					border-radius: 60rpx;
					line-height: 60rpx;
					background: rgb(22,42,137);
				}
			}
		}
	}
</style>
