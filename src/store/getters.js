const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  proappEnvIndex: state => state.user.proappEnvIndex,
  isLoadRoutes: state => state.menu.isLoadRoutes,
  menuitems: state => state.menu.items,
		validate: state => state.list.validate,
		isPlat: state => state.user.isPlat,
		appList: state => state.user.appList
}
export default getters
