<template>
	<view class="no-data-components">
		<image :src="NoDataImage" />
		<slot name="text">
			<view class="no-data-components-text">
				暂无数据
			</view>
		</slot>
	</view>
</template>

<script setup>
import NoDataImage from '@/static/components/no-data.png'
// import { defineProps } from "vue"
</script>

<style scoped lang="scss">
	.no-data-components{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		image{
			width: 300rpx;
			height: 300rpx;
		}
		.no-data-components-text{
			font-size: 24rpx;
			margin: 20rpx 0;
			color: #909399;
		}
	}
</style>