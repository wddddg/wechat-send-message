<template>
	<uni-popup ref="popup" background-color="none" @change="change">
		<view class="popup-content">
			<uni-card border="false" margin="0" :is-shadow="true">
				<template v-slot:title>
					<view class="popup-title">绑定手机号</view>
					<view class="">
						
					</view>
				</template>
				<uni-easyinput v-model="phone" placeholder="请输入姓名" />
				<uni-easyinput v-model="phone" placeholder="请输入姓名" />
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
	watch(() => props.value, (value) => {
		if (value) {
			popup.value.open()
		}
	}, {
		deep: true
	})
	const change = (e) => {
		if (!e.show) {
			emits('update:value', e.show)
		}
	}
</script>

<style scoped lang="scss">
	.popup-title {
		margin: 20rpx 0;
		color: #303133;
		font-size: 24rpx;
	}

	.popup-content {
		padding: 30rpx;
		border-radius: 30rpx;
		background-color: #fff;
	}
</style>
