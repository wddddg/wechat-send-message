import $http from "@/utils/request.js"

// 登录
export const login = (code) => {
	return $http.post({
		url: '/applet/login',
		noToken: true,
		data: {
			code
		}
	});
}
