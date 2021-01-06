import request from '#/utils/request'
const querystring = require("querystring");


export function ddt(specId) {
  return request({
    url: '/web/rs/specGroup/getSpec.json',
    method: 'get',
    params: {
      specId
    }
  })
}
export function addDalei(data) {//增加商品类型
  return request({
    url: '/web/rs/pntree/savePntree.json',
    method: 'post',
    data: data
  })
}
export function getPromotionByCode(data) {
  return request({
    url: '/web/pm/promotionplat/getPromotionByCode.json',
    method: 'get',
    params: data
  })
}
export function addfenlei(data) {//增加商品类型
  return request({
    url: '/web/rs/pntree/savePntree.json',
    method: 'post',
    data: data
  })
}

export function getPromotion(data) {//列表查看详情
  return request({
    url: '/web/pm/promotion/getPromotion.json',
    method: 'post',
    data: data
  })
}
export function queryPromotionRangelistPage(data) {//列表查看详情
  return request({
    url: '/web/pm/promotionRangelist/queryPromotionRangelistPage.json',
    method: 'get',
    params: data
  })
}

export function getPromotionUs(data) {//列表查看详情
  return request({
    url: '/web/pm/promotionuser/getPromotion.json',
    method: 'get',
    params: data
  })
}
export function getPromotionOp(data) {//列表查看详情
  return request({
    url: '/web/pm/promotionbus/getPromotion.json',
    method: 'get',
    params: data
  })
}
// 获取代金营销服务信息
export function getPromotionCasheQuivalent(data) {//列表查看详情
  return request({
    url: '/web/pm/promotion/getPromotionCasheQuivalent.json',
    method: 'post',
    data: data
  })
}

// 获取折扣营销服务信息
export function getPromotionDiscount(data) {
  return request({
    url: '/web/pm/promotion/getPromotionDiscount.json',
    method: 'post',
    data: data
  })
}
//获取满减活动营销服务信息
export function getPromotionFullReduction(data) {//列表查看详情
  return request({
    url: '/web/pm/promotion/getPromotionFullReduction.json',
    method: 'post',
    data: data
  })
}

export function huoquDalei(data) {//获取商品类型信息
  return request({
    url: '/web/rs/pntree/getPntree.json',
    method: 'post',
    data: data
  })
}

export function huoquDaleiliebiao(data) {//获取商品类型列表
  return request({
    url: '/web/rs/pntree/queryPntreeTree.json',
    method: 'post',
    data: data
  })
}


export function huoquzileiliebiao(data) {//获取商品类型列表pntreeParentCode
  return request({
    url: '/web/rs/pntree/getChildByPntree.json',
    method: 'post',
    data: data
  })
}

export function liebiaoupdate(data) {//商品类型编辑更新
  return request({
    url: '/web/rs/pntree/updatePntree.json',
    method: 'post',
    data: data
  })
}

export function deleteleixing(data) {//删除商品类型
  return request({
    url: '/web/rs/pntree/deletePntree.json',
    method: 'post',
    data: data
  })
}

export function obtainpaging(data) {//商品类型列表分页
  return request({
    url: '/web/rs/pntree/queryPntreePage.json',
    method: 'post',
    data: data
  })
}


export function addbrand(data) {//增加商品品牌
  return request({
    url: '/web/rs/brand/saveBrand.json',
    method: 'post',
    data: data
  })
}


export function hubrand(data) {//获取商品品牌信息
  return request({
    url: '/web/rs/brand/getBrand.json',
    method: 'post',
    data: data
  })
}

export function hubrandfen(data) {//商品品牌列表(分页)
  return request({
    url: '/web/rs/brand/queryBrandPage.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}

export function editorbrand(data) {//编辑商品品牌
  return request({
    url: '/web/rs/brand/updateBrand.json',
    method: 'post',
    data: data
  })
}

export function delbrand(data) {//删除商品品牌
  return request({
    url: '/web/rs/brand/deleteBrand.json',
    method: 'post',
    data: data
  })
}

export function addbrandassociated(data) {//增加商品品牌关联
  return request({
    url: '/web/rs/brandrelation/saveBrandRelation.json',
    method: 'post',
    data: data
  })
}

export function hubrandassociated(data) {//获取商品品牌关联可以通过品牌查类型，也可以通过类型查品牌
  return request({
    url: '/web/rs/brandrelation/queryBrandRelationPage.json',
    method: 'post',
    data: data
  })
}

export function collist(data) {//编辑商品品牌关联
  return request({
    url: '/web/rs/brandrelation/updateBrandRelation.json',
    method: 'post',
    data: data
  })
}

export function getMerProType(data) {//获取商家商品分类列表（分页）
  return request({
    url: '/web/rs/classtree/queryBusinessPage.json',
    method: 'post',
    data: data
  })
}

export function colsellei(data) {//获取商品分类列表（分页）
  return request({
    url: '/web/rs/classtree/queryClasstreePromotion.json',
    method: 'post',
    data: data
  })
}

export function addsellei(data) {//增加子分类
  return request({
    url: '/web/rs/classtree/saveClasstree.json',
    method: 'post',
    data: data
  })
}

export function upsel(data) {//编辑分类
  return request({
    url: '/web/rs/classtree/updateClasstree.json',
    method: 'post',
    data: data
  })
}

export function delsel(data) {//删除分类
  return request({
    url: '/web/rs/classtree/deleteClasstree.json',
    method: 'post',
    data: data
  })
}

export function jsglist(data) {//检索规格组
  return request({
    url: '/web/rs/specGroup/listSpecGroupQuery.json',
    method: 'post',
    data: data
  })
}

export function bjglist(data) {//规格组与类型的关联
  return request({
    url: '/web/rs/specGroup/editSepcGroup.json',
    method: 'post',
    data: data
  })
}

//订单操作

export function orderchange(data) {//订单修改
  return request({
    url: '/web/oc/contract/updateContract.json',
    method: 'post',
    data: data
  })
}

export function orderse(data) {//取消订单
  return request({
    url: '/web/oc/contract/updateContractState.json',
    method: 'post',
    data: data
  })
}

export function orderstate(data) {//订单修改状态
  return request({
    url: '/web/oc/contract/offlinePayContractState.json',
    method: 'post',
    data: data
  })
}


export function orderwl(data) {//获取物流列表
  return request({//memberCode:商家编号
    url: '/web/wl/express/queryExpressPageForProp.json?',
    method: 'post',
    data: data
  })
}

export function updatamoney(data) {//价格优惠
  return request({//moneyNew：减免金额
    url: '/web/oc/contract/updateContractSubMoney.json',
    method: 'post',
    data: data
  })
}


export function orderfj(data) {//一件发货
  return request({
    url: '/web/oc/contractEngine/sendContractNext.json',
    method: 'post',
    data: data
  })
}


export function updateorderfj(data) {//修改物流
  return request({
    url: '/web/oc/contract/updateShippedPackageExpress.json',
    method: 'post',
    data: data
  })
}



//角色管理
export function rolemanagement(data) {// 根据租户查询产品角色列表 
  return request({
    url: '/web/up/role/queryRoleByTenantCode.json',
    method: 'post',
    data: data
  })
}

export function addrolemanagement(data) {//增加产品角色管理
  return request({
    url: '/web/up/role/saveRole.json',
    method: 'post',
    data: data
  })
}

export function editrolemanagement(data) {//更新产品角色管理
  return request({
    url: '/web/up/role/updateRole.json',
    method: 'post',
    data: data
  })
}

export function delrolemanagement(data) {//删除产品角色管理
  return request({
    url: '/web/up/role/deleteRole.json',
    method: 'post',
    data: data
  })
}


export function directorymanagement(data) {//根据租户id查询租户产品目录管理
  return request({
    url: '/web/tm/Proapp/queryProappMenuByTenantCode.json',
    method: 'post',
    data: data
  })
}


export function permissionsmanagement(data) {//权限查询分页列表
  return request({
    url: '/web/up/opPermission/queryOpPermissionPage.json',
    method: 'post',
    data: data
  })
}


export function allpermissionsmanagement(data) {//查询全部权限
  return request({
    url: '/web/tm/Proapp/queryProappMenuTree.json',
    method: 'post',
    data: data
  })
}




export function addpermissionsmanagement(data) {//增加角色权限
  return request({
    url: '/web/up/opPermission/saveOpPermission.json',
    method: 'post',
    data: data
  })
}

export function delpermissionsmanagement(data) {//删除角色权限
  return request({
    url: '/web/up/opPermission/deleteOpPermission.json',
    method: 'post',
    data: data
  })
}

export function searchlist(data) {//增加角色权限
  return request({
    url: '/web/oc/contract/getContract.json',//?contractId=订单id
    method: 'post',
    data: data
  })
}

export function searchcltreeCode(data) {//判断该分类是否绑定商品
  return request({
    url: 'web/rs/resourceGoods/queryResourceGoodsPage.json',//?classtreeCode=订单id
    method: 'post',
    data: data
  })
}


// 促销 
export function addPromotion(data) {//满赠发布
  return request({
    url: '/web/pm/promotion/savePromotion.json',
    method: 'post',
    data: data
  })
}///web/pm/promotionplat/savePromotionFullSub.json

// 促销 
export function savePromotionFullSub(data) {//新满赠发布
  return request({
    url: '/web/pm/promotionplat/savePromotionFullSub.json',
    method: 'post',
    data: data
  })
}///web/pm/promotionplat/savePromotionFullSub.json
// 促销 
export function savePromotion(data) {//拼团满赠发布
  return request({
    url: '/web/pm/promotion/savePromotion.json',
    method: 'post',
    data: data
  })
}

// 增加代金营销服务
export function savePromotionCasheQuivalent(data) {//满赠发布
  return request({
    url: '/web/pm/promotion/savePromotionCasheQuivalent.json',
    method: 'post',
    data: data
  })
}

// 促销 新改接口增加满赠营销服务
export function savePromotionFullGift(data) {//满赠发布
  return request({
    url: '/web/pm/promotion/savePromotionFullGift.json',
    method: 'post',
    data: data
  })
}
// 促销 新改接口增加满减营销服务
export function savePromotionFullReduction(data) {//满赠发布
  return request({
    url: '/web/pm/promotion/savePromotionFullReduction.json',
    method: 'post',
    data: data
  })
}
// 促销 包邮新增
export function savePromotionFree(data) {
  return request({
    url: '/web/pm/promotionplat/savePromotionFree.json',
    method: 'post',
    data: data
  })
}
//新改接口 增加满折营销服务
export function savePromotionFullDiscount(data) {
  return request({
    url: '/web/pm/promotion/savePromotionFullDiscount.json',
    method: 'post',
    data: data
  })
}
//新改接口 增加折扣营销服务
export function savePromotionDiscount(data) {
  return request({
    url: '/web/pm/promotion/savePromotionDiscount.json',
    method: 'post',
    data: data
  })
}

export function updatePromotion(data) {
  return request({
    url: '/web/pm/promotion/updatePromotion.json',
    method: 'post',
    data: data
  })
}
 
// 更新满减券营销服务
export function updatePromotionFullReduction(data) {
  return request({
    url: '/web/pm/promotion/updatePromotionFullReduction.json',
    method: 'post',
    data: data
  })
}

// 更新代金营销服务
export function updatePromotionCasheQuivalent(data) {
  return request({
    url: '/web/pm/promotion/updatePromotionCasheQuivalent.json',
    method: 'post',
    data: data
  })
}
// 更新折扣营销服务
export function updatePromotionDiscount(data) {
  return request({
    url: '/web/pm/promotion/updatePromotionDiscount.json',
    method: 'post',
    data: data
  })
}
//新改接口 更新满赠营销服务
export function updatePromotionFullGift(data) {
  return request({
    url: '/web/pm/promotion/updatePromotionFullGift.json',
    method: 'post',
    data: data
  })
}
//新改接口 更新满折营销服务
export function updatePromotionFullDiscount(data) {
  return request({
    url: '/web/pm/promotion/updatePromotionFullDiscount.json',
    method: 'post',
    data: data
  })
}

// export function searchSKU(data) {//商品SKU列表(分页)
//   return request({
//     url: '/web/rs/sku/querySkuPage.json',
//     method: 'post',
//     data:data
//   })
// }
// 新换接口---2019/5/10 只改不增-liuyaxin
export function searchSKU(data) {
  return request({
    url: '/web/rs/resourceGoods/querySimpSkuForPm.json',
    method: 'post',
    data: data
  })
}
export function querySkuPageForBus(data) {
  return request({
    url: 'web/pm/promotionbus/querySkuPageForBus.json',
    method: 'post',
    data: data
  })
}

export function obtainMarketing(data) {//获取营销级基础数据列表
  return request({
    url: '/web/pm/promotionbase/queryPromotionbasePage.json',
    method: 'post',
    data: data
  })
}


export function modifyMarketing(data) {//修改营销优先级列表
  return request({
    url: '/web/pm/promotionbase/updatePromotionBasePriority.json',
    method: 'post',
    data: data
  })
}


export function searchModifyMarketing(data) {//查询营销列表
  return request({
    url: '/web/pm/promotion/getPromotion.json',
    method: 'post',
    data: data
  })
}
// 2019-6-3 营销站点
export function queryProappEnvPageUser(data) {//查询营销列表站点
  return request({
    url: '/web/tm/Proapp/queryProappEnvPageUser.json',
    method: 'post',
    data: data
  })
}
// 2019-6-3 商家站点
export function queryUserMerchantPub() {//查询商家列表站点
  return request({
    url: '/web/um/userMerchant/queryUserMerchantPub.json',
    method: 'get',

  })
}
export function queryMemberGrade() {//查询商家列表站点
  return request({
    url: '/web/um/userserviceinfo/queryMemberGrade.json',
    method: 'get',

  })
}
// 2019-6-3 渠道站点
export function querySaleChannel() {//查询渠道列表站点
  return request({
    url: '/web/dis/channel/querySaleChannel.json',
    method: 'get',

  })
}
// 渠道平台第三方  2020-1-16
export function queryThirdPpartyChannel() {//查询渠道列表站点
  return request({
    url: '/web/dis/channel/queryThirdPpartyChannel.json',
    method: 'get',

  })
}
export function queryChannelPage(data) {//查询渠道列表站点（门店和供应商）
  return request({
    url: '/web/dis/channel/queryChannelPage.json',
    method: 'get',
    params: data

  })
}
//export function queryChannelPage(data) {//查询渠道列表站点（供应商）
//return request({
//  url: '/web/dis/channel/queryChannelPage.json',
//  method: 'get',
//  params: data
//
//})
//}
export function searchCodeShoping(data) {//查询code查询sku商品
  return request({
    url: '/web/rs/sku/getSku.json',
    method: 'post',
    data: data
  })
}
export function queryTginfoPageForPm() {//站点
  return request({
    url: '/web/cms/tginfo/queryTginfoPageForPm.json',
    method: 'get',
  })
}
export function queryUserMerchantPm() {//商家
  return request({
    url: '/web/um/userMerchant/queryUserMerchantPm.json',
    method: 'get',
  })
}
export function queryClasstree() {//团购商品分类
  return request({
    url: '/web/rs/classtree/queryClasstree.json',
    method: 'get',
  })
}
export function queryBrandPage() {//团购商品品牌
  return request({
    url: '/web/rs/brand/queryBrandPage.json',
    method: 'get',
  })
}
export function queryResourceGoodsPageComForPlat(data) {//查询团购商品
  return request({
    url: '/web/rs/resourceBase/queryResourceGoodsPageComForPlat.json',
    method: 'post',
    data: data
  })
}
//
export function updatePromotionStateAudit(data) {//审核通过
  return request({
    url: '/web/pm/promotion/updatePromotionStateAudit.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
export function updatePromotionStateNoAudit(data) {//审核不通过
  return request({
    url: '/web/pm/promotion/updatePromotionStateNoAudit.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
export function querySkuPage(data) {//查询团购货品
  return request({
    url: '/web/rs/resourceBase/querySkuPage.json',
    method: 'post',
    data: data
  })
}//
export function querySkuPageeForPlat(data) {//查询商品
  return request({
    url: '/web/pm/promotionbus/querySkuPageeForPlat.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
export function querySkuPageForUser(data) {//查询商品（用户）
  return request({
    url: '/web/pm/promotionbus/querySkuPageForUser.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
export function querySkuInventory(data) {//查询奖卡（用户）
  return request({
    url: '/web/rs/sku/querySkuInventory.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
export function getPromotions(data) {//查询团购货品
  return request({
    url: '/web/pm/promotion/getPromotions.json',
    method: 'post',
    data: data
  })
}
// 促销秒杀直降
export function savePromotionSeckill(data) {//促销秒杀直降
  return request({
    url: '/web/pm/promotionplat/savePromotionSeckill.json',
    method: 'post',
    data: data
  })
}
// 促销秒杀
export function savePromotionJSeckill(data) {//促销秒杀
  return request({
    url: '/web/pm/promotionplat/savePromotionJSeckill.json',
    method: 'post',
    data: data
  })
}
export function savePromotionInfos(data) {//买x赠n
  return request({
    url: '/web/pm/promotionplat/savePromotionInfos.json',
    method: 'post',
    data: data
  })
}///web/pm/promotionplat/savePromotionOpenNpartsYfold.json
export function savePromotionOpenNpartsYfold(data) {//增加N件Y折/元
  return request({
    url: '/web/pm/promotionplat/savePromotionOpenNpartsYfold.json',
    method: 'post',
    data: data
  })
}
export function savePromotionOpenActivityXy(data) {//增加x元Y件
  return request({
    url: '/web/pm/promotionplat/savePromotionOpenActivityXy.json',
    method: 'post',
    data: data
  })
}
export function queryContractPageForPm(data) {//查询拼团用户
  return request({
    url: '/web/oc/contract/queryContractPageForPm.json',
    method: 'post',
    data: data
  })
}
//new 活动站点
export function queryProappEnvPageForBus(data) {
  return request({
    url: '/web/pm/promotionbus/queryProappEnvPageForBus.json',
    method: 'post',
    data: data
  })
}
//new 活动商家
export function queryUserMerchantForBus(data) {
  return request({
    url: '/web/um/userMerchant/queryUserMerchantForBus.json',
    method: 'post',
    data: data
  })
}
//1.满减（用户）
export function savePromotionFullSubUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionFullSub.json',
    method: 'post',
    data: data
  })
}
//1.满减（运营）
export function savePromotionFullSubOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionFullSub.json',
    method: 'post',
    data: data
  })
}
//2.增加满折营销服务（用户）
export function savePromotionFullDiscountUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionFullDiscount.json',
    method: 'post',
    data: data
  })
}
//2.增加满折营销服务（运营）
export function savePromotionFullDiscountOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionFullDiscount.json',
    method: 'post',
    data: data
  })
}
//3.满赠（用户）
export function savePromotionFullGiftUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionFullGift.json',
    method: 'post',
    data: data
  })
}
//3.满赠（运营）
export function savePromotionFullGiftOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionFullGift.json',
    method: 'post',
    data: data
  })
}
//4.秒杀（用户）
export function savePromotionSeckillUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionSeckill.json',
    method: 'post',
    data: data
  })
}
//4.秒杀（运营）
export function savePromotionSeckillOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionSeckill.json',
    method: 'post',
    data: data
  })
}
//5.包邮（用户）
export function savePromotionFreeUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionFree.json',
    method: 'post',
    data: data
  })
}
//5.包邮（运营）
export function savePromotionFreeOp(data) {
  return request({
    url: '/web/pm/promotionubus/savePromotionFree.json',
    method: 'post',
    data: data
  })
}
//6.团购（用户）

export function savePromotionGroupUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionGroup.json',
    method: 'post',
    data: data
  })
}
//6.团购（运营）
export function savePromotionGroupOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionGroup.json',
    method: 'post',
    data: data
  })
}

//7.拼团（用户）
export function savePromotionAssemblesUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionAssembles.json',
    method: 'post',
    data: data
  })
}
//7.拼团（运营）
export function savePromotionAssemblesOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionAssembles.json',
    method: 'post',
    data: data
  })
}
//8.满减券（用户）
export function savePromotionFullSubRollUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionFullSubRoll.json',
    method: 'post',
    data: data
  })
}
//8.满减券（运营）
export function savePromotionFullSubRollOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionFullSubRoll.json',
    method: 'post',
    data: data
  })
}
//9.统计折扣券统计（用户）
export function queryUsercouponPageDiscountUs(data) {
  return request({
    url: '/web/pm/promotionuser/queryUsercouponPageDiscount.json',
    method: 'post',
    data: data
  })
}
//9.统计折扣券统计（运营）
export function queryUsercouponPageDiscountOp(data) {
  return request({
    url: '/web/pm/promotionbus/queryUsercouponPageDiscount.json',
    method: 'post',
    data: data
  })
}
//9.统计满减券统计（用户）
export function queryUsercouponPageUs(data) {
  return request({
    url: '/web/pm/promotionuser/queryUsercouponPage.json',
    method: 'post',
    data: data
  })
}
//9.统计满减券统计（运营）
export function queryUsercouponPageOp(data) {
  return request({
    url: '/web/pm/promotionbus/queryUsercouponPage.json',
    method: 'post',
    data: data
  })
}
//9.统计代金券统计（用户）
export function queryUsercouponPageCasheQuivalentUs(data) {
  return request({
    url: '/web/pm/promotionuser/queryUsercouponPageCasheQuivalent.json',
    method: 'post',
    data: data
  })
}
//9.统计代金券统计（运营）
export function queryUsercouponPageCasheQuivalentOp(data) {
  return request({
    url: '/web/pm/promotionbus/queryUsercouponPageCasheQuivalent.json',
    method: 'post',
    data: data
  })
}

//10.折扣券（用户）
export function savePromotionDiscountUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionDiscount.json',
    method: 'post',
    data: data
  })
}
//10.折扣券（运营）
export function savePromotionDiscountOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionDiscount.json',
    method: 'post',
    data: data
  })
}
//11.代金券（用户）
export function savePromotionCasheQuivalentUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionCasheQuivalent.json',
    method: 'post',
    data: data
  })
}
//11.代金券（运营）
export function savePromotionCasheQuivalentOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionCasheQuivalent.json',
    method: 'post',
    data: data
  })
}
//12.x元Y件（用户）
export function savePromotionOpenActivityXyUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionOpenActivityXy.json',
    method: 'post',
    data: data
  })
}
//12.x元Y件（运营）
export function savePromotionOpenActivityXyOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionOpenActivityXy.json',
    method: 'post',
    data: data
  })
}
//13.买赠（用户）
export function savePromotionInfosUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionInfos.json',
    method: 'post',
    data: data
  })
}
//13.买赠（运营）
export function savePromotionInfosOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionInfos.json',
    method: 'post',
    data: data
  })
}
////14.直降（用户）
//export function savePromotionSeckillUs(data) {
//return request({
//  url: '/web/pm/promotionuser/savePromotionSeckill.json',
//  method: 'post',
//  data: data
//})
//}
////14.直降（运营）
//export function savePromotionSeckillOp(data) {
//return request({
//  url: '/web/pm/promotionbus/savePromotionSeckill.json',
//  method: 'post',
//  data: data
//})
//}
//15.新满减（用户）
//export function savePromotionFullSubUs(data) {
//return request({
//  url: '/web/pm/promotionuser/savePromotionFullSub.json',
//  method: 'post',
//  data: data
//})
//}
////15.新满减（运营）
//export function savePromotionFullSubOp(data) {
//return request({
//  url: '/web/pm/promotionbus/savePromotionFullSub.json',
//  method: 'post',
//  data: data
//})
//}
//16.第X件N折/元（用户）
export function savePromotionOpenNpartsYfoldUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionOpenNpartsYfold.json',
    method: 'post',
    data: data
  })
}
//16.第X件N折/元（运营）
export function savePromotionOpenNpartsYfoldOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionOpenNpartsYfold.json',
    method: 'post',
    data: data
  })
}
//17.新秒杀（用户）
export function savePromotionJSeckillUs(data) {
  return request({
    url: '/web/pm/promotionuser/savePromotionJSeckill.json',
    method: 'post',
    data: data
  })
}
//17.新秒杀（运营）
export function savePromotionJSeckillOp(data) {
  return request({
    url: '/web/pm/promotionbus/savePromotionJSeckill.json',
    method: 'post',
    data: data
  })
}
//1.x元Y件（门店）ok

export function savePromotionOpenActivityXySp(data) {
  return request({
    url: '/web/pm/promotionstore/savePromotionOpenActivityXy.json',
    method: 'post',
    data: data
  })
}
//2.买赠（门店）ok

export function savePromotionInfosSp(data) {
  return request({
    url: '/web/pm/promotionstore/savePromotionInfos.json',
    method: 'post',
    data: data
  })
}
//3.直降（门店）

export function savePromotionSeckillSp(data) {
  return request({
    url: '/web/pm/promotionstore/savePromotionSeckill.json',
    method: 'post',
    data: data
  })
}
//4.新满减（门店）ok

export function savePromotionFullSubSp(data) {
  return request({
    url: '/web/pm/promotionstore/savePromotionFullSub.json',
    method: 'post',
    data: data
  })
}
//5.第X件N折/元（门店）ok

export function savePromotionOpenNpartsYfoldSp(data) {
  return request({
    url: '/web/pm/promotionstore/savePromotionOpenNpartsYfold.json',
    method: 'post',
    data: data
  })
}
//6.新秒杀（门店）ok

export function savePromotionJSeckillSp(data) {
  return request({
    url: '/web/pm/promotionstore/savePromotionJSeckill.json',
    method: 'post',
    data: data
  })
}

//新增营销商品（批量） /web/pm/promotionTargetlist/savePromotionRangelistBatch.json 
export function savePromotionRangelistBatch(data) {
  return request({
    url: '/web/pm/promotionRangelist/savePromotionRangelistBatch.json',
    method: 'post',
    data: data
  })
}
//删除营销商品（单）  
export function deletePromotionTargetlistState(data) {//promotionId
  return request({
    url: '/web/pm/promotionRangelist/deletePromotionTargetlistState.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
//营销重推（）  
export function sendPromotionById(data) {//promotionId
  return request({
    url: '/web/pm/promotionplat/sendPromotionById.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
//取消（）  
export function updatePromotionStateStop(data) {//promotionId
  return request({
    url: '/web/pm/promotionplat/updatePromotionStateStop.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}//web/pm/promotionplat/promotionStateStop.json
//终止（）  
export function promotionStateStop(data) {//promotionId
  return request({
    url: '/web/pm/promotionplat/promotionStateStop.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
////平台级删除
export function deletePromotionTargetlistStateForPlat(data) {
  return request({
    url: '/web/pm/promotionRangelist/deletePromotionTargetlistStateForPlat.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}
////平台级添加商品
export function savePromotionRangelistBatchForPlat(data) {
  return request({
    url: '/web/pm/promotionRangelist/savePromotionRangelistBatchForPlat.json',
    method: 'post',
    data: querystring.stringify(data)
  })
}//
////平台级添加删除商品
export function updateDelPromotionRangelist(data) {
  return request({
    url: '/web/pm/promotionplat/updateDelPromotionRangelist.json',
    method: 'post',
    data: data
  })
}
export function getQuestuserYY(data) { //问卷结果 查看内容
  return request({
    url: '/web/qt/Questuser/getQuestuserYY.json',
    method: 'post',
    data: data
  })
}
