import $http from "@/utils/request.js"

// 登录
export const login = (code) => {
	return $http.get({
		url: '/user/login?code=' + code,
		noToken: true
	});
}
