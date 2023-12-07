<script>
	import {
		login, getInfo
	} from '@/api/index.js'
	export default {
		onLaunch: async function() {
			await this.userLogin()
			await uni.$on('loginError', async () => {
				await this.userLogin()
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			async userLogin() {
				let token = uni.getStorageSync("token");
				if (!token) {
					await uni.login({
						provider: 'weixin', //使用微信登录
						success: async (loginRes) => {
							await login(loginRes.code).then(res => {
								const {
									token
								} = res
								uni.setStorageSync('token', token)
								getInfo().then(res => {
									uni.setStorageSync("user", res.user);
								})
							})
						}
					});
				} else {
					await getInfo().then(res => {
						uni.setStorageSync("user", res.user);
					})
				}
			}
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
