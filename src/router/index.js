import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import VueResource from 'vue-resource'
import HomePage from '@/pages/home'  /* HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../” */
import DetailPage from '@/pages/good-detail'

Vue.use(Router) /* 使用路由 */
Vue.use(VueResource)

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    }
  ]
})
