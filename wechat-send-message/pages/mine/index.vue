<template>
	<view class="mine-box">
		<view class="mine-send-message-box">
			<view class="mine-sent-out-message">
				<view class="message-title">我发送出的短信</view>
				<view class="residual-quantity"><span>0</span>条</view>
			</view>
			<view class="mine-sent-out-message">
				<view class="message-title">剩余短信数量</view>
				<view class="residual-quantity"><span>0</span>条</view>
			</view>
			<view><button class="recharge-btn">充值</button></view>
		</view>
	</view>
</template>

<script>
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

					span {
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
</style>
