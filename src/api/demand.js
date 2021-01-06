import request from '#/utils/request'
const querystring = require("querystring");
//查询接口管理分类
let api = {
    updateRsinfoSort(data) {
        return request({
            url: '/web/gd/rsinfo/updateRsinfoSort.json', //排序接口
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    queryClasstreePageForAt(data) {
        return request({
            url: '/web/rs/classtree/queryClasstreePageForAt.json', //查询分类
            method: 'get',
            params: data
        })
    },
    updateOpbillstateByCode(data) {
        return request({
            url: '/web/gd/rsinfo/updateOpbillstateByCode.json', //批量上下架
            method: 'post',
            data: querystring.stringify(data)
        })
    },
    deleteRsinfoBatch(data) {
        return request({
            url: '/web/gd/rsinfo/deleteRsinfoBatch.json', //批量删除
            method: 'post',
            data: querystring.stringify(data)
        })
    },
}
export default api;