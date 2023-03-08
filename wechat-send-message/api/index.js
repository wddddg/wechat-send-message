import $http from "@/utils/request.js"

// 登录
export const login = (code) => {
	return $http.post({
		url: '/login?code=' + code,
		noToken: true
	});
}
