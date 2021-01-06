import request from '#/utils/request'
const querystring = require("querystring");
// 1.获取商品类型列表
export function getProductTypeList() {
  return request({
      url: '/web/rs/pntree/queryPntreeTree.json',
      method: 'get'
  })
}
// 2.获取商品子类列表
export function getChildProductTypeList(data) {
  return request({
      url: '/web/rs/pntree/getChildByPntree.json',
      method: 'get',
      params: {pntreeParentCode:data}
  })
}
// 3.获取商品参数/属性
export function getProductParamsList(data){
  return request({
    url: '/web/rs/prop/queryPropertiesPage.json',
    method: 'get',
    params: data
  })
}

// 4.增加商品参数
export function addProductParams(data) {
  return request({
      url: '/web/rs/prop/saveProp.json',
      method: 'get',
      params: data
  })
}

// 5.编辑商品参数 
export function editProductParams(data) {
  return request({
      url: '/web/rs/prop/updateProperties.json',
      method: 'get',
      params: data
  })
}

// 6.删除商品参数/属性
export function deleteProductParams(PropertiesId){
  return request({
    url: '/web/rs/prop/deleteProperties.json',
    methods: 'get',
    params: {PropertiesId:PropertiesId}
  })
}

// 7.增加商品属性
export function addProductProperty(data) {
  return request({
      url: '/web/rs/prop/saveProp.json',
      method: 'get',
      params: data
  })
}
// 8.编辑商品属性

export function updateProductProperty(data) {
  return request({
      url: '/web/rs/prop/updateProperties.json',
      method: 'get',
      params: data
  })
}
// 9.获取属性选项
export function getProductPropertyOption(data) {
  return request({
      url: '/web/rs/rsPropertiesOption/queryRsPropertiesOptionPage.json',
      method: 'get',
      params: data
  })
}
// 10.新增属性选项
export function addProductPropertyOption(data) {
  return request({
      url: '/web/rs/rsPropertiesOption/saveRsPropertiesOption.json',
      method: 'get',
      params: data
  })
}
// 11.修改属性选项
export function updateProductPropertyOption(data) {
  return request({
      url: '/web/rs/rsPropertiesOption/updateRsPropertiesOption.json',
      method: 'get',
      params: data
  })
}
// 12.删除属性选项
export function deleteProductPropertyOption(data) {
  return request({
      url: '/web/rs/rsPropertiesOption/deleteRsPropertiesOption.json',
      method: 'get',
      params: {rsPropertiesOptionId:data}
  })
}
// 13.获取属性值列表

export function getProductPropertyValue(propertiesCode) {
  return request({
      url: '/web/rs/propvalue/queryPropertiesValuePage.json',
      method: 'get',
      params: {propertiesCode:propertiesCode}
  })
}

// 14.获取规格组

export function getProductSpecGroup(data) {
  return request({
      url: '/web/rs/specGroup/listSpecGroupQuery.json',
      method: 'get',
      params:data
  })
}
// 15.新增规格组
export function addProductSpecGroup(data) {
  return request({
      url: '/web/rs/specGroup/saveSpecGroup.json',
      method: 'get',
      params: data
  })
}
// 16.修改规格组
export function updateProductSpecGroup(data) {
  return request({
      url: '/web/rs/specGroup/editSepcGroup.json',
      method: 'get',
      params: data
  })
}
// 17.删除商品规格组
export function deleteProductSpecGroup(data) {
  return request({
      url: '/web/rs/specGroup/deleteSpecGroup.json',
      method: 'get',
      params: {specGroupId:data}
  })
}
// 18.得到规格信息
export function getProductSpec(data) {
  return request({
      url: '/web/rs/specGroup/querySpecPage.json',
      method: 'get',
      params: data
  })
}
// 19新增规格信息
export function addProductSpec(data) {
  return request({
      url: '/web/rs/specGroup/saveSpec.json',
      method: 'post',
      data
  })
}
// 20.编辑规格信息
export function updataProductSpec(data) {
  return request({
      url: '/web/rs/specGroup/updateSpec.json',
      method: 'get',
      params: data
  })
}
// 21.删除规格信息
export function deleteProductSpec(specId) {
  return request({
      url: '/web/rs/specGroup/deleteSpec.json',
      method: 'get',
      params: {specId:specId}
  })
}
// 22.获取规格选项信息
export function getProductSpecOption(data) {
  return request({
      url: '/web/rs/specOption/querySpecOptionPage.json',
      method: 'get',
      params: data
  })
}
// 23增加规格选项信息
export function addProductSpecOption(data) {
  return request({
      url: '/web/rs/specOption/saveSpecOption.json',
      method: 'get',
      params: data
  })
}
// 24修改规格组选项
export function updateProductSpecOption(data) {
  return request({
      url: '/web/rs/specOption/updateSpecOption.json',
      method: 'get',
      params: data
  })
}
// 25删除商品规格组
export function deleteProductSpecOption(data) {
  return request({
      url: '/web/rs/specOption/deleteSpecOption.json',
      method: 'get',
      params: {specOptionId:data}
  })
}
// 26 获取商品列表

export function queryResourceGoodsPage() {
  return request({
      url: '/web/rs/resourceGoods/queryResourceGoodsPage.json',
      method: 'get',
  })
}

// 27获取订单列表分页
export function queryContractPage(data) {
  return request({
      url: '/web/oc/contract/queryContractPage.json',
      method: 'get',
      params:data
  })
}


// 28获取操作员列表分页
export function queryUserservicePage(data) {
  return request({
      url: '/web/um/userservice/queryUserservicePage.json',
      method: 'get',
      params:data
  })
}

// 29获取会员列表分页
export function queryUserinfoservicePage(data) {
  return request({
      url: '/web/um/userserviceinfo/queryUserinfoservicePage.json',
      method: 'post',
      data:data
  })
}
// 29获取会员列表分页
export function getUserinfoservice(data) {
  return request({
      url: '/web/um/userserviceinfo/getUserinfoservice.json',
      method: 'get',
      params:data
  })
}

export function saveUserinfoservice(data) {
  return request({
      url: '/web/ml/muser/saveUmuserAll.json',
      method: 'post',
      data:data
  })
}

// // 31 删除会员 
// export function deleteUserinfoservice(data) {
//   return request({
//       url: '/web/um/userserviceinfo/deleteUserinfoservice.json',
//       method: 'get',
//       params:data
//   })
// }

// 31 启用停用 
export function changeVipStatus(data) {
  return request({
      url: '/web/um/userserviceinfo/updateUserinfoserviceState.json',
      method: 'get',
      params:data
  })
}
// 31 启用停用 
export function changeVipStatusTwo(data) {
  return request({
      url: '/web/um/userservice/updateUserserviceState.json',
      method: 'get',
      params:data
  })
}


// 31 删除操作员/管理员
export function deleteUserservice(data) {
  return request({
      url: '/web/um/userservice/deleteUserservice.json',
      method: 'get',
      params:data
  })
}
// 32 新增管理员

export function saveUserservice(data) {
  return request({
      url: '/web/um/userservice/saveUserserviceByPcode.json',
      method: 'post',
      data:data
  })
}


// 34 编辑管理员
export function updateUserservice(data) {
  return request({
      url: '/web/um/userservice/updateUserservice.json',
      method: 'post',
		    data:data
  })
}
//35 重置密码
export function updatePsw(data) {
  return request({
      url: '/web/um/userservice/updatePsw.json',
      method: 'get',
      params:data
  })
}
// 36获取角色列表
export function queryRoleByTenantCode(data) {
  return request({
      url: '/web/up/role/queryRoleByTenantCode.json',
      method: 'get',
      params:data
  })
}
// 37获取管理员列表
export function queryUserAdminPage(data) {
  return request({
      url: 'web/um/userservice/queryUserAdminPage.json',
      method: 'get',
      params:data
  })
}
// 38获取营销满减/满赠列表
export function queryPromotionPage(data) {
  return request({
      url: '/web/pm/promotion/queryPromotionPage.json',
      method: 'get',
      params:data
  })
}
// 38-1新改接口 查询满赠营销服务分页列表
export function queryPromotionPageFullGift(data) {
  return request({
      url: '/web/pm/promotion/queryPromotionPageFullGift.json',
      method: 'get',
      params:data
  })
}
// 查询满折营销服务分页列表
export function queryPromotionPageFullDiscount(data) {
  return request({
      url: '/web/pm/promotion/queryPromotionPageFullDiscount.json',
      method: 'get',
      params:data
  })
}

// 39获取营销满减/满赠信息
export function getPromotion(data) {
  return request({
      url: '/web/pm/promotion/getPromotion.json',
      method: 'get',
      params:data
  })
}
// 获取满折扣活动营销服务信息
export function getPromotionFullDiscount(data) {
  return request({
      url: '/web/pm/promotion/getPromotionFullDiscount.json',
      method: 'get',
      params:data
  })
}

// 39获取折扣营销服务信息
export function getPromotionDiscount(data) {
  return request({
      url: '/web/pm/promotion/getPromotionDiscount.json',
      method: 'get',
      params:data
  })
}

// 39-1 新该接口 获取满赠活动营销服务信息
export function getPromotionFullGift(data) {
  return request({
      url: '/web/pm/promotion/getPromotionFullGift.json',
      method: 'get',
      params:data
  })
}
// 40获取虚拟分类列表
export function queryRsGoodsClassPage(data) {
  return request({
      url: '/web/rs/rsGoodsClass/queryRsGoodsClassPage.json',
      method: 'get',
      params:data
  })
}
// 41添加虚拟子分类列表
export function saveRsGoodsClass(data) {
  return request({
      url: '/web/rs/rsGoodsClass/saveRsGoodsClass.json',
      method: 'post',
      data
  })
}
// 41编辑虚拟分类
export function updateRsGoodsClass(data) {
  return request({
      url: '/web/rs/rsGoodsClass/updateRsGoodsClass.json',
      method: 'post',
      data
  })
}
// 41删除虚拟分类
export function deleteRsGoodsClass(data) {
  return request({
      url: '/web/rs/rsGoodsClass/deleteRsGoodsClass.json',
      method: 'post',
      data
  })
}
//获取单个虚拟分类
export function getRsGoodsClass(data) {
  return request({
      url: '/web/rs/rsGoodsClass/getRsGoodsClass.json',
      method: 'get',
      params:data
  })
}

// 49删除满减/满赠
  export function deletePromotion(data) {
    return request({
        url: '/web/pm/promotion/deletePromotion.json',
        method: 'get',
        params:data
    })
  }
  // 49-1 新改接口 删除满赠营销服务
  export function deletePromotionFullGift(data) {
    return request({
        url: '/web/pm/promotion/deletePromotionFullGift.json',
        method: 'get',
        params:data
    })
  }
  
  // 查看会员信息
  
  export function getUserinfoservices(data) {
    return request({
        url: '/web/um/userserviceinfo/queryUserinfoPageByMerchant.json',
        method: 'get',
        params:data
    })
  }
  //商品编号是否重复
  export function checkGoodsNoForBus(data) {
    return request({
        url: '/web/rs/resourceBase/checkGoodsNoForBus.json',
        method: 'get',
        params:data
    })
  }
   //新增奖卡
  export function saveResourceGoodsForPlat(data) {
    return request({
        url: '/web/rs/resourceBase/saveResourceGoodsForPlat.json',
        method: 'post',
        data:querystring.stringify(data) 
    })
  }
