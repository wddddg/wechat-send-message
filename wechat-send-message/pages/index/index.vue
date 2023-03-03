<template>
	<view class="home-container">
		<view class="home-send-mail-box">
			<view class="you-look">你瞧</view>
			<view>被人记起的感觉是多么美好</view>
			<view>至少在这个世界上</view>
			<view>你能真真切切地想到我</view>
			<view><button class="to-send-text-messages" @click="goSendMessage">去发短信</button></view>
		</view>
	</view>
</template>

<script setup>
const goSendMessage = () =>[
	uni.navigateTo({
		url: '/mail/SendMessage'
	})
]
</script>

<style scoped lang="scss">
	.home-container {
		padding: 20rpx 40rpx;

		.home-send-mail-box {
			height: 800rpx;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			padding: 60rpx 80rpx;
			view{
				margin: 30rpx 0;
			}
			view:last-child{
				margin-top: 60rpx;
			}
			.you-look{
				display: inline;
				padding: 12rpx 20rpx;
				background-color: rgb(203, 203, 203);
			}
			.to-send-text-messages {
				display: inline;
				height: 60rpx;
				border-radius: 80rpx;
				padding: 20rpx 80rpx;
				color: #fff;
				background: $uni-theme-btn-color;
				font-size: 30rpx;
				&::after{
					border-radius: 80rpx;
				}
			}
		}
	}
</style>
