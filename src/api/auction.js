import request from '#/utils/request'
const querystring = require("querystring");
//查询接口管理分类
let api = {
    deleteAuctionrulebatch(data) {
        return request({
            url: '/web/at/auctionrule/deleteAuctionrulebatch.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    queryWarehouseForAt(data) { // 获取仓库列表
        return request({
            url: '/web/wh/warehouse/queryWarehouseForAt.json',
            method: 'get',
            params: data
        })
    },
    uploadGoodsFileFroAt(data) { // 上传图片修改
        return request({
            url: '/web/rs/goodsFile/uploadGoodsFileFroAt.json',
            method: 'post',
            data: data
        })
    },
    saveAuction(data) { // 新增公告和预告
        return request({
            url: '/web/at/auction/saveAuction.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    deleteAuction(data) { // 删除公告和预告
        return request({
            url: '/web/at/auction/deleteAuction.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    deleteAuctionRevoke(data) { // 撤销发布
        return request({
            url: '/web/at/auction/deleteAuctionRevoke.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuction(data) { // 更新
        return request({
            url: '/web/at/auction/updateAuction.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAcutionRelease(data) { // 重新发布
        return request({
            url: '/web/at/auction/updateAcutionRelease.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuctionEnrollState(data) { // 设为已看货
        return request({
            url: '/web/at/auctionEnroll/updateAuctionEnrollState.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    queryAuctionrulePageForAt(data) { // 获取竞价规则列表
        return request({
            url: '/web/at/auctionrule/queryAuctionrulePageForAt.json',
            method: 'get',
            params: data
        })
    },
    getAuctionruleForAt(data) { // 根据id 获取竞价规则信息
        return request({
            url: '/web/at/auctionrule/getAuctionruleForAt.json',
            method: 'get',
            params: data
        })
    },

    queryGroupPageBySCodeForAt(data) { // 查询可参与人员
        return request({
            url: '/web/um/userservice/queryGroupPageBySCodeForAt.json',
            method: 'get',
            params: data
        })
    },
    queryGroupPageBySCodeForPaasAt(data) { // 查询所有的可参与人员
        return request({
            url: '/web/um/userservice/queryGroupPageBySCodeForPaasAt.json',
            method: 'get',
            params: data
        })
    },
    queryAuctionPageNotice(data) { // 关联竞价预告列表
        return request({
            url: '/web/at/auction/queryAuctionPageNotice.json',
            method: 'get',
            params: data
        })
    },
    queryResourceGoodsPageAt(data) { // 已选竞价资源获取商品列表
        return request({
            url: '/web/rs/resourceGoods/queryResourceGoodsPageAt.json',
            method: 'get',
            params: data
        })
    },
    queryClasstreePageForAt(data) { // 获取商品分类
        return request({
            url: '/web/rs/classtree/queryClasstreePageForAt.json',
            method: 'get',
            params: data
        })
    },
    saveAuctionGinfo(data) { // 包裹保存
        return request({
            url: '/web/at/auction/saveAuctionGinfo.json',
            method: 'get',
            params: data
        })
    },
    getAuctionGinfo(data) { // 获取包裹信息
        return request({
            url: '/web/at/auction/getAuctionGinfo.json',
            method: 'get',
            params: data
        })
    },
    deleteAuctions(data) { // 删除公告
        return request({
            url: '/web/at/auction/deleteAuctions.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuctionTermination(data) {
        return request({
            url: '/web/at/auction/updateAuctionTermination.json', // 公告撤销
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAcutionReleases(data) {
        return request({
            url: '/web/at/auction/updateAcutionReleases.json', // 重新发布
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    getAuction(data) {
        return request({
            url: '/web/at/auction/getAuction.json', // 获取公告信息
            method: 'get',
            params: data
        })
    },
    updateAuctionTerminationForAt(data) {
        return request({
            url: '/web/at/auction/updateAuctionTerminationForAt.json', // 终止
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateGinfoCodeEnable(data) {
        return request({
            url: '/web/rs/resourceGoods/updateGinfoCodeEnable.json ', // 释放包裹
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    saveAuctionItems(data) { // 新增单品
        return request({
            url: '/web/at/auction/saveAuctionItems.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    deleteAuctionsItems(data) { // 删除
        return request({
            url: '/web/at/auction/deleteAuctionsItems.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuctionGinfoItems(data) { // 编辑更新
        return request({
            url: '/web/at/auction/updateAuctionGinfoItems.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuctionTrailerAudit(data) { // 预告审核
        return request({
            url: '/web/at/auction/updateAuctionTrailerAudit.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuctionAuditPaas(data) { // 公告审核
        return request({
            url: '/web/at/auction/updateAuctionAuditPaas.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    getQualityByMemberCode(data) { // 查询是平台还是商家
        return request({
            url: '/web/um/userservice/getQualityByMemberCode.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    getAuctionEnrollForPaasAt(data) {
        return request({
            url: '/web/at/auctionEnroll/getAuctionEnrollForPaasAt.json', // 
            method: 'get',
            params: data
        })
    },
    updateAuctionEnrollAuditQstate(data) {
        return request({
            url: '/web/at/auctionEnroll/updateAuctionEnrollAuditQstate.json', // 资质审核
            method: 'get',
            params: data
        })
    },
    updateAuctionEnrollAuditDstateByTrans(data) {
        return request({
            url: '/web/at/auctionEnroll/updateAuctionEnrollAuditDstateByTrans.json', // 保证金审核通过
            method: 'get',
            params: data
        })
    },
    updateAuctionEnrollAuditDstateFail(data) {
        return request({
            url: '/web/at/auctionEnroll/updateAuctionEnrollAuditDstateFail.json', // 保证金审核失败
            method: 'get',
            params: data
        })
    },
    queryUserInfoByCode(data) {
        return request({
            url: '/web/ml/muser/queryUserInfoByCode.json', // 保证金获取手机号
            method: 'get',
            params: data
        })
    },
    getOtherUserinfoAndVd(data) {
        return request({
            url: '/web/um/userservice/getOtherUserinfoAndVd.json', // 获取保证金
            method: 'get',
            params: data
        })
    },
    queryMemoauthPageForAt(data) {
        return request({
            url: '/web/um/memoauth/queryMemoauthPageForAt.json', // 获取报名主体
            method: 'get',
            params: data
        })
    },
    getAuctionEnrollForPaasAt(data) {
        return request({
            url: '/web/at/auctionEnroll/getAuctionEnrollForPaasAt.json', // 审核数据更新
            method: 'get',
            params: data
        })
    },
    saveOtherWithdraw(data) { // 提现
        return request({
            url: '/web/cp/withdraw/saveOtherWithdraw.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateWithdrawState(data) { // 提现审核
        return request({
            url: '/web/cp/withdraw/updateWithdrawState.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    getOtherUserinfoAndVd(data) {
        return request({
            url: '/web/um/userservice/getOtherUserinfoAndVd.json', // 查看金额
            method: 'get',
            params: data
        })
    },
    updateAuctionEnrollAuditByReturn(data) { // 释放保证金审核成功
        return request({
            url: '/web/at/auctionEnroll/updateAuctionEnrollAuditByReturn.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateAuctionEnrollAuditByReturnFail(data) { // 释放保证金审核失败
        return request({
            url: '/web/at/auctionEnroll/updateAuctionEnrollAuditByReturnFail.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    getAuction(data) { // 查看详情
        return request({
            url: '/web/at/auction/getAuction.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateGinfoCodeEnable(data) { // 根据goodsCode 释放包裹
        return request({
            url: '/web/rs/resourceGoods/updateGinfoCodeEnable.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    updateWarehouseForAt(data) { // 根据goodsCode 释放包裹
        return request({
            url: '/web/wh/warehouse/updateWarehouseForAt.json',
            method: 'post',
            data: querystring.stringify(data)
        })
    },



}
export default api;