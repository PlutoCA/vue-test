import request from '#/utils/request'
////查询优惠券列表
export function getCoupon(data) {
  return request({
    url: '/web/pm/usercoupon/queryUsercouponPageForC.json',
    method: 'get',
    params: data
  })
}