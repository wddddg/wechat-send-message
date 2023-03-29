import $http from "@/utils/request.js"

// 登录
export const login = (code) => {
	return $http.get({
		url: '/login?code=' + code,
		noToken: true
	});
}
