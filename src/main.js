import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '#/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import '#/permission' // permission control
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en' //element-ui ui英文
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' //element-ui ui中文
import eLocale from 'element-ui/lib/locale/lang/ru-RU'
import en from '@/lang/en' //
import zh from '@/lang/zh' //
import e from '@/lang/e'
import sh from '@/lang/sh' //上蔬
import _en from '#/lang/en' //  英文
import _zh from '#/lang/zh' // 中文 
import _e from '#/lang/e'
import App from './App'
import router from './router'
import store from './store'
import '#/icons' // icon
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('inter') || 'zh', // 默认展示语言，这里默认是中文
  messages: {
    en: {
      ...en,
      ..._en,
      ...enLocale
    },
    zh: {
      ...zh,
      ..._zh,
      ...zhLocale
    },
    sh: {
      ...sh,
      ..._zh,
      ...zhLocale
    },
     e: {
      ...e,
      ..._e,
      ...eLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
    }
  }
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

Vue.prototype.$th = (key1, key) => {
  return i18n.t(key1 ? key1 + key : key);
}

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: {
    App
  }
})