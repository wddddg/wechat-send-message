<script>
	import {
		login
	} from '@/api/index.js'
	export default {
		onLaunch: function() {
			let user = uni.getStorageSync("user");
			if (!user?.token) {
				uni.login({
					provider: 'weixin', //使用微信登录
					success: async (loginRes) => {
						await login({
							code: loginRes.code
						})
					}
				});
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import './uni.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
