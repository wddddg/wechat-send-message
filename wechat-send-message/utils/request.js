import ajax from '@/uni_modules/u-ajax/js_sdk'
import baseURL from './base-url.js'
const $http = ajax.create({
	baseURL,
	timeout: 10000
})

// 添加请求拦截器
$http.interceptors.request.use(
	config => {
		// 在发送请求前做些什么
		//请求前加入token
		let user = uni.getStorageSync("user");
		// if (!user?.token) {
		// 	uni.$emit('loginError')
		// 	return config
		// }
		if (user.token) {
			config.header['X-Access-Token'] = user.token;
		};
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
$http.interceptors.response.use(
	response => {
		// 对响应数据做些什么
		if (response.data.code == 500) {
			uni.showToast({
				title: response.data.message || '系统有误，请联系管理员',
				duration: 1000,
				icon: "none"
			});
		}
		if (response.data.code == 510) {
			uni.showToast({
				title: '操作过时，请重新登录',
				duration: 1000,
				icon: "none"
			});
		}
		return response.data
	},
	error => {
		if (error.statusCode == 404) {
			uni.showToast({
				title: '未找到该地址',
				duration: 1000,
				icon: "none"
			});
		} else {
			uni.showToast({
				title: '请求错误',
				duration: 1000,
				icon: "none"
			});
		}

		// 对响应错误做些什么
		return Promise.reject(error)
	}
)

export default $http
