import request from '#/utils/request'

//获取商品类型信息
export function queryPntreeTree(pntreeId) {
  return request({
    url: '/web/rs/pntree/queryPntreeTree.json',
    method: 'get',
    data: {pntreeId}
  })
}


//获取商品子集类型信息
export function getChildByPntree(pntreeParentCode) {
  return request({
    url: '/web/rs/pntree/getChildByPntree.json',
    method: 'post',
    data: pntreeParentCode
  })
}

//获取平台分类
export function queryClasstreePage(pntreeParentCode) {
  return request({
    url: '/web/rs/classtree/queryClasstreePage.json',
    method: 'post',
    data: pntreeParentCode
  })
}

//获取平台分类(整棵树)
export function queryClasstree() {
		return request({
				url: '/web/rs/classtree/queryClasstree.json',
				method: 'get'
		})
}

//获取商家商品分类
export function queryClasstreeForMerchant(pntreeParentCode) {
		return request({
				url: '/web/rs/classtree/queryBusinessPage.json',
				method: 'post',
				data: pntreeParentCode
		})
}

//获取商家商品分类（整棵树）
export function queryBusinessClasstree() {
		return request({
				url: '/web/rs/classtree/queryBusinessClasstree.json',
				method: 'get'
		})
}


//获取商品品牌信息
export function getBrand(brandId) {
  return request({
    url: '/web/rs/brand/getBrand.json',
    method: 'post',
    data: brandId
  })
}


//获取商品品牌信息
export function getUsercouponPage(usercouponId) {
  return request({
    url: `/web/pm/usercoupon/getUsercoupon.json?userCouponId=${usercouponId}`,
    method: 'get'
  })
}
// 获取代金营销用户优惠券服务信息
export function getUsercouponCasheQuivalent(usercouponId) {
  return request({
    url: `/web/pm/usercoupon/getUsercouponCasheQuivalent.json?userCouponId=${usercouponId}`,
    method: 'get'
  })
}

//获取商品品牌信息
export function getUsercouponDiscount(usercouponId) {
  return request({
    url: `/web/pm/usercoupon/getUsercouponDiscount.json?userCouponId=${usercouponId}`,
    method: 'get'
  })
}


//获取商品品规格组信息
export function listSpecGroupQuery(specGroupId) {
  return request({
    url: '/web/rs/specGroup/listSpecGroupQuery.json',
    method: 'post',
    data: specGroupId
  })
}
//获取商品规格列表
export function querySpecPage(specGroupCode) {
  return request({
    url: '/web/rs/specGroup/querySpecPage.json',
    method: 'post',
    data: specGroupCode,
  })
}

//获取商品规格选项信息
export function querySpecOptionPage(specGroupCode) {
  return request({
    url: '/web/rs/specOption/querySpecOptionPage.json',
    method: 'post',
    data: specGroupCode
  })
} 

//获取商品属性/参数信息
export function queryPropertiesPage(data) {
  return request({
    url: '/web/rs/prop/queryPropertiesPage.json',
    method: 'post',
    data: data
  })
}

//获取商品属性选项列表
export function queryRsPropertiesOptionPage(propertiesCode) {
  return request({
    url: '/web/rs/rsPropertiesOption/queryRsPropertiesOptionPage.json',
    method: 'post',
    data: propertiesCode
  })
} 

//增加商品
export function saveResourceGoods(data) {
  return request({
    url: '/web/rs/resourceGoods/saveResourceGoods.json',
    method: 'post',
    data: data
  })
} 


//提交图片文件
export function uploadGoodsFile(data) {
  return request({
    url: '/web/rs/goodsFile/uploadGoodsFile.json',
    method: 'post',
    data: data
  })
} 


//获取商品品牌分页列表
export function queryBrandRelationPage(data) {
  return request({
    url: '/web/rs/brandrelation/queryBrandRelationPage.json',
    method: 'post',
    data: data
  })
} 

//获取商品信息

export function queryResourceGoodsPage(data) {
  return request({
    url: '/web/rs/resourceGoods/queryResourceGoodsPage.json',
    method: 'post',
    data: data
  })
} 

//获取商品详情

export function getResourceGoods(data) {
  return request({
    url: '/web/rs/resourceGoods/getResourceGoods.json',
    method: 'post',
    data: data
  })
} 

//更新商品信息

export function updateResourceGoods(data) {
  return request({
    url: '/web/rs/resourceGoods/updateResourceGoods.json',
    method: 'post',
    data: data
  })
}
// /web/rs/sku/querySkuPage.json
//查找sku列表
// export function querySkuPage(data) {
//   return request({
//     url: '/web/rs/sku/querySkuPage.json',
//     method: 'post',
//     data: data
//   })
// }
// 新换接口---2019/5/10 只改不增-liuyaxin
export function querySkuPage(data) {
  return request({
    url: '/web/rs/resourceGoods/querySimpSkuForPm.json',
    method: 'post',
    data: data
  })
}

//获取sku
export function getskuBrand(data) {
  return request({
    url: '/web/rs/sku/getSku.json',
    method: 'post',
    data: data
  })
}

//更新sku信息

export function updateSku(data) {
  return request({
    url: '/web/rs/sku/updateSku.json',
    method: 'post',
    data: data
  })
}

//更新sku信息

export function updateSkuGoods(data) {
		return request({
				url: '/web/rs/resourceGoods/updateSku.json',
				method: 'post',
				data: data
		})
}


//商品评论列表
export function queryEvaluateGoodsPage(data) {
  return request({
    url: '/web/res/evaluate/queryEvaluateGoodsPage.json',
    method: 'post',
    data: data
  })
}

//商品评价信息   //参数：evaluateGoodsId：商品评价ID
export function getEvaluateBusinessByOrderCode(data) {
  return request({
    url: '/web/res/evaluate/getEvaluateShopByOrderCode.json?',
    method: 'post',
    data: data
  })
}


//店铺评价信息  参数：contractBillcode：订单编号（从评价列表接口中获取）
export function getEvaluateGoods(data) {
  return request({
    url: '/web/res/evaluate/getEvaluateGoods.json',
    method: 'post',
    data: data
  })
}
//评价模版
export function queryUseTemplate(data) {
  return request({
    url: 'web/res/template/queryUseTemplate.json',
    method: 'post',
    data: data
  })
}

//店铺回复评价

export function saveEvaluateReply(data) {
  return request({
    url: '/web/res/evaluateReply/saveEvaluateReply.json',
    method: 'post',
    data: data
  })
}
//是否显示隐藏评价 evaluateGoodsId=1&show=false

export function updateGoodsShow(data) {
  return request({
    url: 'web/res/evaluate/updateGoodsShow.json',
    method: 'post',
    data: data
  })
}

//商品上架
export function updateAuditResourcePass(data) {
  return request({
    url: '/web/rs/resourceGoods/updateAhAndAuditResourcePass.json',
    method: 'post',
    data: data
  })
}

//商品下架
export function updateCannelResourceList(data) {
  return request({
    url: '/web/rs/resourceGoods/updateCannelResourceList.json',
    method: 'post',
    data: data
  })
}

//删除商品

export function batchDeleteResourceGoods(data) {
  return request({
    url: '/web/rs/resourceGoods/batchDeleteResourceGoods.json',
    method: 'post',
    data: data
  })
}

//获取物流模版
export function queryFreightExpPage(data) {
  return request({
    url: '/web/wl/freightExp/queryFreightExpPage.json',
    method: 'post',
    data: data
  })
}
// sku图片修改

export function updateSkuFile(data) {
  return request({
    url: '/web/rs/sku/updateSkuFile.json',
    method: 'post',
    data: data
  })
}
//校验 商品编码
export function checkGoodsNo(data) {
		return request({
				url: 'web/rs/resourceGoods/checkGoodsNo.json',
				method: 'post',
				data: data
		})
}
//校验 货品编码
export function checkSkuGoodsNo(data) {
  return request({
    url: 'web/rs/sku/checkGoodsNo.json',
    method: 'post',
    data: data
  })
}
//获取 市区

export function queryAreaPage(data) {
  return request({
    url: '/web/bs/area/queryAreaPage.json',
    method: 'post',
    data: data
  })
}
// /web/bs/area/queryAreaThree.json
// export function queryAreaPage(data) {
//   return request({
//     url: '/web/bs/area/queryAreaThree.json',
//     method: 'post',
//     data: data
//   })
// }
//获取省

export function queryProvincePage() {
  return request({
    url: '/web/bs/province/queryProvincePage.json',
    method: 'get'
  })
}
//增加卖家地址

export function saveSellerAddress(data) {
  return request({
    url: '/web/um/address/saveSellerAddress.json',
    method: 'post',
    data: data
  })
}
//获取地址列表


export function querySellerAddressBymerberCode() {
  return request({
    url: '/web/um/address/querySellerAddressBymerberCode.json',
    method: 'get'
  })
}
//删除地址信息 

export function deleteSellerAddress(data) {
  return request({
    url: '/web/um/address/deleteSellerAddress.json',
    method: 'post',
    data: data
  })
}
//设置默认地址

export function updateSellerAddressDefault(data) {
  return request({
    url: '/web/um/address/updateSellerAddressDefault.json',
    method: 'post',
    data: data
  })
}

//查询退单信息
export function queryRefundPage(data) {
  return request({
    url: '/web/oc/refund/queryRefundPage.json',
    method: 'post',
    data: data
  })
}

//查询退单详情
export function getRefund(data) {
  return request({
    url: '/web/oc/refund/getRefund.json',
    method: 'post',
    data: data
  })
}

//审核通过
// refundCode  退货单编号//备注：meno（审核通过不通过都是这个）
export function auditYes(data) {
  return request({
    url: '/web/oc/refund/audit.json',
    method: 'post',
    data: data
  })
}
//审核不通过
// refundCode 退货单编号//备注：meno（审核通过不通过都是这个）
export function resNo(data) {
  return request({
    url: '/web/oc/refund/res.json',
    method: 'post',
    data: data
  })
}
//状态为商家同意退货，待买家填写退货物流 时
 export function arrGoods(data) {
  return request({
    url: '/web/oc/refund/arrGoods.json',
    method: 'post',
    data: data
  })
}

//修改地址信息
export function updateAddress(data) {
  return request({
    url: '/web/um/address/updateAddress.json',
    method: 'post',
    data: data
  })
}
//获取是否是关联商品
export function associate (data) {
  return request({
    url:'/web/rs/resourceGoods/checkGoodsRel.json',
    method:'post',
    data:data
  })
}
