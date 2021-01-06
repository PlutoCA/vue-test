/**
 * 有关订单的所有接口
 */

import request from '#/utils/request'
const querystring = require("querystring");

var API = {
	// /web/oc/contract/queryContractPageBuiMat.json
	queryContractPageBuiMat(data) {
		return request({
			url: '/web/oc/contract/queryContractPageBuiMat.json',
			method: 'post',
			data: data
		})
	},
	//订单操作
	orderchange(data) { //订单修改
		return request({
			url: '/web/oc/contract/updateContract.json',
			method: 'post',
			data: data
		})
	},
	orderse(data) { //取消订单
		return request({
			url: '/web/oc/contract/updateContractState.json',
			method: 'post',
			data: data
		})
	},
	newOrderse(data) { //取消订单
		return request({
			url: '/web/oc/contract/updateContractStateBuiMat.json',
			method: 'post',
			data: data
		})
	},
	newOrderse1(data) { //取消订单
		return request({
			url: '/web/oc/contract/updateContractStateBySg.json',
			method: 'post',
			data: data
		})
	},
	orderstate(data) { //订单修改状态
		return request({
			url: '/web/oc/contract/offlinePayContractState.json',
			method: 'post',
			data: data
		})
	},
	newOrderstate(data) { //订单修改状态
		return request({
			url: '/web/oc/contract/offlinePayContractStateBuiMat.json',
			method: 'post',
			data: data
		})
	},
	newOrderstate1(data) { //订单修改状态
		return request({
			url: '/web/oc/contract/offlinePayContractStateBySg.json',
			method: 'post',
			data: data
		})
	},


	orderwl(data) { //获取物流列表
		return request({ //memberCode:商家编号
			url: '/web/wl/express/queryExpressPageForProp.json?',
			method: 'post',
			data: data
		})
	},

	//增加卖家地址

	saveSellerAddress(data) {
		return request({
			url: '/web/um/address/saveSellerAddress.json',
			method: 'post',
			data: data
		})
	},
	//获取地址列表
	querySellerAddressBymerberCode() {
		return request({
			url: '/web/um/address/querySellerAddressBymerberCode.json',
			method: 'get'
		})
	},
	//删除地址信息
	deleteSellerAddress(data) {
		return request({
			url: '/web/um/address/deleteSellerAddress.json',
			method: 'post',
			data: data
		})
	},
	//设置默认地址
	updateSellerAddressDefault(data) {
		return request({
			url: '/web/um/address/updateSellerAddressDefault.json',
			method: 'post',
			data: data
		})
	},

	//查询退单信息
	queryRefundPage(data) {
		return request({
			url: '/web/oc/refund/queryRefundPage.json',
			method: 'post',
			data: data
		})
	},

	//查询退单详情
	getRefund(data) {
		return request({
			url: '/web/oc/refund/getRefund.json',
			method: 'post',
			data: data
		})
	},
	//查询退单详情
	newGetRefund(data) {
		return request({
			url: '/web/oc/refund/getRefundPlat.json',
			method: 'post',
			data: data
		})
	},

	//审核通过
	// refundCode  退货单编号//备注：meno（审核通过不通过都是这个）
	auditYes(data) {
		return request({
			url: '/web/oc/refund/audit.json',
			method: 'post',
			data: data
		})
	},
	// 供应商审核
	supplieraudit(data) {
		return request({
			url: '/web/oc/refund/supplieraudit.json',
			method: 'post',
			data: data
		})
	},
	// 供应商审核
	newSupplieraudit(data) {
		return request({
			url: '/web/oc/refund/supplierOcAudit.json',
			method: 'post',
			data: data
		})
	},
	//审核不通过
	// refundCode 退货单编号//备注：meno（审核通过不通过都是这个）
	resNo(data) {
		return request({
			url: '/web/oc/refund/res.json',
			method: 'post',
			data: data
		})
	},
	newNesNo(data) {
		return request({
			url: '/web/oc/refund/refuseApplication.json',
			method: 'post',
			data: data
		})
	},
	//新的接口拒绝收货
	refuseGoods(data) {
		return request({
			url: '/web/oc/refund/refuseGoods.json',
			method: 'post',
			data: data
		})
	},
	//状态为商家同意退货，待买家填写退货物流 时
	arrGoods(data) {
		return request({
			url: '/web/oc/refund/arrGoods.json',
			method: 'post',
			data: data
		})
	},

	orderfj(data) { //一件发货
		return request({
			url: '/web/oc/contractEngine/sendContractNext.json',
			method: 'post',
			data: data
		})
	},
	newOrderfj(data) { //一件发货
		return request({
			url: '/web/oc/contractEngine/sendContractNextBuiMat.json',
			method: 'post',
			data: data
		})
	},
	newOrderfj1(data) { //一件发货
		return request({
			url: '/web/oc/contractEngine/sendContractNextBySg.json',
			method: 'post',
			data: data
		})
	},


	updateorderfj(data) { //修改物流
		return request({
			url: '/web/oc/contract/updateShippedPackageExpress.json',
			method: 'post',
			data: data
		})
	},
	newUpdateorderfj(data) { //修改物流
		return request({
			url: '/web/oc/contract/updateShippedPackageExpressBuiMat.json',
			method: 'post',
			data: data
		})
	},
	newUpdateorderfj1(data) { //修改物流
		return request({
			url: '/web/oc/contract/updateShippedPackageExpressBySg.json',
			method: 'post',
			data: data
		})
	},


	//修改地址信息
	updateSellerAddress(data) {
		return request({
			url: '/web/um/address/updateSellerAddress.json',
			method: 'post',
			data: data
		})
	},
	updatamoney(data) { //价格优惠
		return request({ //moneyNew：减免金额
			url: '/web/oc/contract/updateContractSubMoney.json',
			method: 'post',
			data: data
		})
	},
	newUpdatamoney(data) { //价格优惠
		return request({ //moneyNew：减免金额
			url: '/web/oc/contract/updateContractSubMoneyBuiMat.json',
			method: 'post',
			data: data
		})
	},
	newUpdatamoney1(data) { //价格优惠
		return request({ //moneyNew：减免金额
			url: '/web/oc/contract/updateContractSubMoneyBySg.json',
			method: 'post',
			data: data
		})
	},
	// 获取订单分页列表
	queryContractPage(data) {
		return request({
			url: '/web/oc/contract/queryContractPage.json',
			method: 'get',
			params: data
		})
	},
	// 获取订单分页列表
	newQueryContractPage(data) {
		return request({
			url: '/web/oc/contract/queryContractPageBySg.json?childFlag=true',
			method: 'get',
			params: data
		})
	},
	// 平台审核
	platformAuditRefund(data) {
		return request({
			url: '/web/oc/refund/platformAuditRefund.json',
			method: 'post',
			data: data
		})
	},
	//第三方渠道 /web/dis/channel/queryThirdPpartyChannel.json
	queryThirdPpartyChannel(data) {
		return request({
			url: '/web/dis/channel/queryThirdPpartyChannel.json',
			method: 'get',
			data: data
		})
	},
	//门店接口 /web/um/userStore/queryUserStorePageForChannel.json
	queryUserStorePageForChannel(data) {
		return request({
			url: '/web/um/userStore/queryUserStorePageForChannel.json',
			method: 'get',
			data: data
		})
	},
	getQualityByMemberCode(data) { // 查询是平台还是商家
		return request({
			url: '/web/um/userservice/getQualityByMemberCode.json',
			method: 'post',
			data: querystring.stringify(data)
		})
	},
	getContractForAt(data) { // 获取订单服务信息--个人
		return request({
			url: '/web/oc/contract/getContractForAt.json',
			method: 'post',
			data: querystring.stringify(data)
		})
	},
	getContractForPaasAt(data) { // 获取订单服务信息--所有
		return request({
			url: '/web/oc/contract/getContractForPaasAt.json',
			method: 'post',
			data: querystring.stringify(data)
		})
	},
	getContractCForAt(data) { // 查询商品信息
		return request({
			url: '/web/oc/contract/getContractCForAt.json',
			method: 'get',
			data: data
		})
	},



}

export default API