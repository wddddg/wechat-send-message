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


// 获取用户详细信息
export const getInfo = () => {
  return $http.get({
    url: '/applet/getInfo'
  })
}