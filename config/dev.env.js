'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '"http://192.168.5.172:8081/"',
  //BASE_API: '"http://exchange.test.com:8088/qjsoft-app-laser-controller-exchange"',
  // BASE_API: '"http://local.test.com:8189/controller-goods"'
  // BASE_API: '"http://uat.paas.qjclouds.com"', // 配置服务器地址,
  // API_ROOT: ' "https://manage.izgl.com/" ' 
  API_ROOT: '"http://localhost:3000/"'
})