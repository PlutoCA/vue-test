'use strict'
module.exports = {
  NODE_ENV: '"production"',
  // BASE_API: '"http://exchange.test.com:8088/qjsoft-app-laser-controller-exchange"'//按照生产的需求更改
		APP_PATH:'"promotion-manager"',
		API_ROOT: '(location.href.split(":")[0] || "http")+"://"+location.hostname + ":"+(location.port ? location.port :"") ' // 配置服务器地址,
}
