import request from '#/utils/request'
import queryString from 'querystring'


export function getBannerDetail(data) { //addressId
	return request({
		url: '/web/cms/banner/getBanner.json',
		params: data,
		method: 'get'
	})
}

export function saveBanner(data) { //addressId
	return request({
        url: '/web/cms/banner/getBanner.json',
		data:queryString.stringify(data),
		method: 'post'
	})
}