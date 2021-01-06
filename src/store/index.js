// import Vue from 'vue'
// import Vuex from 'vuex'
import app from '#/store/modules/app'
import user from '#/store/modules/user'
import list from './modules/list'
import mad from './modules/mad'
import getters from './getters'
import menu from '#/store/modules/menu'
// Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    menu,
    list,
    mad
  },
  getters
})

export default store