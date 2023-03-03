<template>
	<view class="details-body">
		<view class="details-title">
			xxxxxxxxxxxxxxxxxx
		</view>
		<view class="details-content">
			<view class="details-content-list" v-for="(item, index) in 10" :key="index">
				<view class="details-content-time">
					2023-03-03 10:34:41
				</view>
				<view class="details-content-user-send">
					<view class="he-send-mail-box" v-if="index % 2">
						<view>他</view>
						<view>7777777777777</view>
					</view>
					<view class="mine-send-mail-box" v-else>
						<view>666666666666</view>
						<view>我</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	onLoad((value) => {
		console.log(value);
	})
</script>

<style scoped lang="scss">
	.details-body {
		padding: 0 20rpx;

		.details-title {
			margin: 40rpx 0;
			text-align: center;
			font-size: 40rpx;
			font-weight: 800;
		}

		.details-content {
			padding: 20rpx 40rpx;
			background-color: #fff;
			border-radius: 20rpx;

			.details-content-time {
				color: #909399;
				font-size: 24rpx;
				text-align: center;
			}

			.details-content-user-send {
				.he-send-mail-box {
					display: flex;
					margin: 10rpx 0;
					view:first-child {
						background-color: rgba(39, 136, 202, .5);
						box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
						width: 80rpx;
						height: 80rpx;
						line-height: 80rpx;
						font-size: 24rpx;
						text-align: center;
						border-radius: 50%;
						color: #fff;
						margin-right: 20rpx;
					}

					view:last-child {
						padding: 20rpx;
						background-color: rgb(39, 136, 202);
						border-radius: 20rpx;
						color: #e0e0e0;
					}
				}
				.mine-send-mail-box{
					display: flex;
					margin: 10rpx 0;
					justify-content: flex-end;
					view:last-child {
						background-color: rgba(22, 42, 137, .5);
						box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
						width: 80rpx;
						height: 80rpx;
						line-height: 80rpx;
						font-size: 24rpx;
						text-align: center;
						border-radius: 50%;
						color: #fff;
					}
					
					view:first-child {
						margin-right: 20rpx;
						padding: 20rpx;
						background-color: rgb(22, 42, 137);
						border-radius: 20rpx;
						color: #e0e0e0;
					}
				}
			}
		}
	}
</style>
