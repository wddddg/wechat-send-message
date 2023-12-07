<template>
	<view class="mail-box">
		<view class="tabs">
			<view v-for="(item, index) in tabsList" :key="item.type" class="tabs-item"
				:class="{'active-tabs-item': activeIndex === item.type}" @click="changeActiveIndex(item.type)">
				{{item.name}}
			</view>
		</view>
		<BindingPhone v-model:value="showBindingPhone" />
		<view class="mail-data-list" v-if="dataList.length">
			<view class="mail-data-item" v-for="(item, index) in dataList" :key="index" @click="goDetails(item.phone)">
				<view class="author-name"><label>{{ item.phone }}</label>收</view>
				<view class="mail-item-content">{{ item.informationContext }}</view>
				<view class="mail-item-time">{{ item.accessTime }}</view>
			</view>
		</view>
		<view class="no-mail-data" v-else>
			<NoData />
		</view>
	</view>
</template>

<script setup>
	import BindingPhone from '@/components/BindingPhone.vue'
	import {
		ref
	} from 'vue'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import NoData from '@/components/NoData.vue'
	import { getUserMessage, getInformationByPhone } from '@/api/mail.js'
	const activeIndex = ref(1)
	const showBindingPhone = ref(false)
	const dataList = ref([])
	const user = uni.getStorageSync('user')
	const tabsList = [{
		name: '我发出的',
		type: 1
	}, {
		name: '我收到的',
		type: 2
	}]
	const goDetails = (item) => {
		uni.navigateTo({
			url: '/mail/Details?phone=' + item
		})
	}
	const getDataList = () => {
		if (activeIndex.value === 1) {
			getUserMessage().then(res => {
				dataList.value = res.rows
			})
		} else {
			getInformationByPhone().then(res => {
				dataList.value = res.rows
			})
		}
	}
	const changeActiveIndex = (type) => {
		activeIndex.value = type
		getDataList()
	}
	onShow(() => {
		if (!user.phone) {
			setTimeout(() => {
				showBindingPhone.value = true
			}, 0)
		}
		getDataList()
	})
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

		.mail-data-list {
			.mail-data-item {
				padding: 20rpx 0;
				border-bottom: 1rpx solid #C0C4CC;
				font-size: 24rpx;

				.author-name {
					color: #909399;

					label {
						margin-right: 10rpx;
					}
				}

				.mail-item-content {
					display: inline-block;
					padding: 20rpx;
					background-color: rgba(#162a89, .5);
					border-radius: 20rpx;
					margin: 20rpx 0;
				}

				.mail-item-time {
					color: #909399;
				}
			}
		}

		.no-mail-data {
			margin-top: 120rpx;
		}
	}
</style>
