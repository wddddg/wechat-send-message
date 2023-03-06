import $http from "@/utils/request.js"

// 登录
export const login = (data) => {
	$http.post({
		url: '/login',
		data
	});
}
