import request from '#/utils/request'
import queryString from 'querystring'
// 获取关联活动优惠券列表
export function queryActivityRelatedList(data) { //addressId
	return request({
		url: '/web/pm/promotion/queryActivityRelatedList.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
// 保存注册有礼活动
export function saveActivityRegisterGift(data) { //addressId
	return request({
		url: '/web/pm/activityRegisterGift/saveActivityRegisterGift.json',
        method: 'post',
        data
	})
}
// 注册有礼查看接口
export function getActivityRegisterGift(data) {//列表查看详情
    return request({
      url: '/web/pm/activityRegisterGift/getActivityRegisterGift.json',
      method: 'post',
      data: data
    })
  }

  // 保存限量有礼活动
export function saveActivityDrawCoupon(data) { //addressId
	return request({
		url: '/web/pm/activityDrawCoupon/saveActivityDrawCoupon.json',
    method: 'post',
    data
	})
}
// 列表查看详情
export function getActivityDrawCoupon(data) {//列表查看详情
  return request({
    url: '/web/pm/activityDrawCoupon/getActivityDrawCoupon.json',
    method: 'post',
    data: data
  })
}

// 组合套餐 新改接口
export function saveActivityDiscount(data) {//满赠发布
  return request({
    url: '/web/pm/activityDiscount/saveActivityDiscount.json',
    method: 'post',
    data: data
  })
}

// 套餐查看接口
export function getActivityDiscount(data) {//列表查看详情
  return request({
    url: '/web/pm/activityDiscount/getActivityDiscount.json',
    method: 'post',
    data: data
  })
}

// 数据来源接口
export function queryBiddingSourcePage() {//列表查看详情
  return request({
    url: '/web/pm/biddingSource/queryBiddingSourcePage.json',
    method: 'post',
  })
}