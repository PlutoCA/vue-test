import request from '#/utils/request'
import queryString from 'querystring'


export function ApplyInfo(data) { //addressId
	return request({
		url: '/web/cms/supply/applyBack.json',
		data: queryString.stringify(data),
		method: 'post'
		// params: data,
		// method: 'get'
	})
}

export function getSupplyInfo(data) { //addressId
	return request({
		url: '/web/cms/supply/getSupply.json',
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