import $http from "@/utils/request.js"

// 登录
export const login = (code) => {
	return $http.get({
		url: '/user/wx229364b9cd249db0/login?code=' + code,
		noToken: true
	});
}
