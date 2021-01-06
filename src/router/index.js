// import Vue from 'vue'
// import Router from 'vue-router'
import store from '../store/index'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

// Vue.use(Router)

/* Layout */
import Layout from '#/views/layout/Layout'
// import Layout from '#/views/pc/default/Layout'
//需要这个两个文件配置 _import_production _import_production
const _import = require('./_import_' + process.env.NODE_ENV)
/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

// import giftTrans from '@/views/salesPromotion/cashcouponReceiveList/index'
// import chaCashcoupon from '@/views/salesPromotion/cashcouponReceiveList/index'
// import couponList from '@/views/pc/coupon/couponList'

export const constantRouterMap = [
  // { path: '/', component: chaCashcoupon } ,//账户流水
  // { path: '/chaCashcoupon', component: chaCashcoupon } //账户流水

  // {
  //   path: '/couponList',
  //   component: couponList
  // }, //账户流水
  // {
  //   path: '/package',
  //   component: _import('promotionActivity/packageMail/index'),
  // },
  {
    path:'/',
    component:Layout,
    name:'小程序管理',
    children: [
      {
        path: '/banner',
        component: _import('banner/list'),
        title: 'banner管理',
        name: 'banner'
      },
      {
        path: '/banner/edit',
        component: _import('banner/edit'),
        title: 'banner编辑',
        name: 'bannerEdit'
      },
      {
        path: '/supply/list',
        component: _import('supply/list'),
        title: '供需列表',
        name: 'supplyList'
      },
      {
        path: '/supply/detail',
        component: _import('supply/detail'),
        title: '供需详情',
        name: 'supplyDetail'
      },
      {
        path: '/setting',
        component: _import('setting'),
        title: '小程序设置',
        name: 'miniSetting'
      },
    ],
  },
];



export default new VueRouter({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: process.env.NODE_ENV == 'development' ? constantRouterMap : []
})