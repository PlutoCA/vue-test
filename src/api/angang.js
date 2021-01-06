import request from '#/utils/request'
import queryString from 'querystring'
//1.保存授权协议
export function saveMemoauth(data) { //addressId
	return request({
		url: '/web/um/memoauth/saveMemoauth.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//2.更新授权协议
export function updateMemoauth(data) { //addressId
	return request({
		url: '/web/um/memoauth/updateMemoauth.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//3.获取授权协议信息
export function getMemoauthDateState(data) { //addressId
	return request({
		url: '/web/um/memoauth/getMemoauthDateState.json',

		method: 'get'
	})
}
//3.保存升级为卖家
export function saveUserinfoapply(data) { //addressId
	return request({
		url: '/web/um/userservice/saveUserinfoapply.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}

//3.查询是否为卖家
export function getUserinfoapplyByMem(data) { //addressId
	return request({
		url: '/web/um/userservice/getUserinfoapplyByMem.json',
		method: 'get'
	})
}

//3.更新卖家
export function updateUserinfoapplyByMem(data) { //addressId
	return request({
		url: '/web/um/userservice/updateUserinfoapplyByMem.json',
		data: queryString.stringify(data),
		method: 'post'

	})
}


//3.获取分类
export function queryClasstreePageForAt(data) { //addressId
	return request({
		url: '/web/rs/classtree/queryClasstreePageForAt.json',

		method: 'get'
	})
}

//上传
export function uploadGoodsFile(data) {
	return request({
		url: '/web/rs/goodsFile/uploadGoodsFileFroAt.json', //鞍钢专用
		method: 'post',
		data: data
	})
}
export function updateAuctionEnrollToSubmit(data) {//重新提交资质
	return request({
		url: '/web/at/auctionEnroll/updateAuctionEnrollToSubmit.json', 
		method: 'post',
		data: queryString.stringify(data)
	})
}

//3.供求
export function saveRsinfoByJson(data) { //addressId
	return request({
		url: '/web/gd/rsinfo/saveRsinfoByJson.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//4.供求列表
export function queryRsinfoPageByMem(data) { //addressId
	return request({
		url: '/web/gd/rsinfo/queryRsinfoPageByMem.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//4.删除	
export function deleteRsinfo(data) { //addressId
	return request({
		url: '/web/gd/rsinfo/deleteRsinfo.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//4.获取/web/gd/rsinfo/getRsinfo.json	
export function getRsinfo(data) { //addressId
	return request({
		url: '/web/gd/rsinfo/getRsinfo.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
export function updateRsinfoStateToReSubmit(data) { //addressId
	return request({
		url: '/web/gd/rsinfo/updateRsinfoStateToReSubmit.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//获取分类
export function getClasstreeFullName(data) { //addressId
	return request({
		url: '/web/rs/classtree/getClasstreeCodeName.json',
		data: queryString.stringify(data),
		method: 'post'
	})
} ///web/um/userservice/getUserinfoAndVd.json
//我的账户资金信息
export function getUserinfoAndVd(data) { //addressId
	return request({
		url: '/web/um/userservice/getUserinfoAndVd.json',
		data: queryString.stringify(data),
		method: 'post'
	})
} ///web/at/auctiondt/queryAuctiondtPage.json
//查询我的账号明细
export function queryAccountOuterDtByPcode(data) { //addressId
	return request({
		url: '/web/vd/vdfaccountouter/queryAccountOuterDtByPcode.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
///web/at/auctiondt/updateForzenAuctiondtToWaitForReturn.json
//查询可解冻保证金列表
export function queryMemAuctiondtPage(data) { //addressId
	return request({
		url: '/web/at/auctiondt/queryMemAuctiondtPage.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//
//申请已交保证金提现
export function updateForzenAuctiondtToWaitForReturn(data) { //addressId
	return request({
		url: '/web/at/auctiondt/updateForzenAuctiondtToWaitForReturn.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//积分
export function getUpmupointsPageByPC(data) { //addressId
	return request({
		url: '/web/upm/upmupoints/getUpmupointsPageByPC.json',
		data: queryString.stringify(data),
		method: 'post'
	})
}
//我的消息
export function queryImsgPushmsgPage(data) {
	return request({
		url: '/web/imsg/imsgPushmsg/queryImsgPushmsgPage.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}

//获取个人信息
export function getUserinfoDearler(data) {
	return request({
		url: '/web/um/userserviceinfo/getUserinfoDearler.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}

// 查看全部订单
export function queryMyAuction(data) {

	return request({
		url: '/web/at/auctionEnroll/queryMyAuctionEnroll.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}
// 竞价详情
export function getMyAuctionInfo(data) {

	return request({
		url: '/web/at/auction/getMyAuctionInfo.json',
		method: 'post',
		data: queryString.stringify(data)
	})
} //
// 保证金提现
export function saveWithdrawByAgDt(data) {

	return request({
		url: '/web/cp/withdraw/saveWithdrawByAgDt.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}

// 保证金金额（冻结中，解冻中等）
export function getFreezeDtNumBymem(data) {

	return request({
		url: '/web/at/auctiondt/getFreezeDtNumBymem.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}

// 保证金充值（保证金审核）
export function queryRechargePageForAtByMem(data) {

	return request({
		url: '/web/cp/recharge/queryRechargePageForAtByMem.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}

// 解冻（保证金审核）
//export function queryMemAuctiondtPage(data) {
//	return request({
//		url: '/web/at/auctiondt/queryMemAuctiondtPage.json',
//		method: 'post',
//		data: queryString.stringify(data)
//	})
//} 
// 提现（保证金审核）
export function queryWithdrawPageByMem(data) {
	return request({
		url: '/web/cp/withdraw/queryWithdrawPageByMem.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}

export function loginOut(data) {
	return request({
		url: '/web/ml/mlogin/loginOut.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}
export function getAuctionWinByCode(data) { // 获取通知书信息
	return request({
		url: '/web/at/auctionWin/getAuctionWinByCode.json',
		method: 'get',
		params: data
	})
}
export function updateStateToReApprove(data) { //完善信息买家
	return request({
		url: '/web/um/userservice/updateStateToReApprove.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}
export function updateStateToReApproveByCom(data) { //完善信息买家 企业
	return request({
		url: '/web/um/userservice/updateStateToReApproveByCom.json',
		method: 'post',
		data: queryString.stringify(data)
	})
}
export function updateStateToReApproveByJson(data) { //完善信息卖家
	return request({
		url: '/web/um/userservice/updateStateToReApproveByJson.json',
		method: 'post',
		data: queryString.stringify(data)
	})
};
export function checkScShopdeByOwn(data) { //查询买家或者卖家
	return request({
		url: '/web/sc/scShopde/checkScShopdeByOwn.json',
		method: 'post',
		data: queryString.stringify(data)
	})
};
export function saveUserinfoapplyForModify(data) { //信息修改
	return request({
		url: '/web/um/userservice/saveUserinfoapplyForModify.json',
		method: 'post',
		data: queryString.stringify(data)
	})
};
export function getUserinfoapplyQuaByMem() { //信息修改
	return request({
		url: '/web/um/userservice/getUserinfoapplyQuaByMem.json',
		method: 'post'
	})
};