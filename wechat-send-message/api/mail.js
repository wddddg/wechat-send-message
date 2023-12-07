import $http from "@/utils/request.js"

// 获取当前用户发出的信息
export const getUserMessage = (data) => {
	return $http.get({
		url: '/applet/information/list',
		data
	});
}

// 获取当前用户收到的信息
export const getInformationByPhone = (data) => {
	return $http.get({
		url: '/applet/information/getInformationByPhone',
		data
	});
}

// 发送信息
export const sendMessage = (data) => {
	return $http.post({
		url: '/sms',
		data
	});
}
