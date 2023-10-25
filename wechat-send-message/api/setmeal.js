import $http from "@/utils/request.js"

// 登录
export const getSetmealList = () => {
	return $http.get({
		url: '/setmeal/list',
		params: {
			pageSize: 99999,
			pageNum: 1
		}
	});
}
