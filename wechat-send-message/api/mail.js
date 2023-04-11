import $http from "@/utils/request.js"

// 登录
export const sendMessage = (data) => {
	return $http.post({
		url: '/sms',
		data
	});
}
