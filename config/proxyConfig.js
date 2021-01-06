module.exports = {
    proxy: {
        '/apis': {  //将www.exaple.com印射为/apis
            target: 'https://manage.izgl.com', // 接口域名
            changeOrigin: true, //是否跨域
            secure: false,
            pathRewrite: {
                '^/apis': ''  //需要rewrite的,
            }
        }
    }
}