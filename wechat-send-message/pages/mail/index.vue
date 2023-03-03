<template>
	<view class="mail-box">
		<view class="tabs">
			<view v-for="(item, index) in tabsList" :key="item.type" class="tabs-item"
				:class="{'active-tabs-item': activeIndex === item.type}" @click="activeIndex = item.type">
				{{item.name}}
			</view>
		</view>
		<view class="mail-data-list" v-if="false"></view>
		<view class="no-mail-data" v-else>
			<NoData />
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import NoData from '@/components/NoData.vue'
	const activeIndex = ref(1)
	const tabsList = [{
		name: '我发出的',
		type: 1
	}, {
		name: '我收到的',
		type: 2
	}]
</script>

<style scoped lang="scss">
	.mail-box {
		padding: 40rpx 40rpx 0 40rpx;
		height: 100%;

		.tabs {
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 20rpx;
			overflow: hidden;
			text-align: center;
			display: flex;

			.tabs-item {
				width: 50%;
				background: #f0f0f0;
			}

			.active-tabs-item {
				background: $uni-theme-transparent-color;
				color: #fff;
			}
		}

		.mail-data-list {}

		.no-mail-data {
			margin-top: 120rpx;
		}
	}
</style>
