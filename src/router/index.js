import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import VueResource from 'vue-resource'
import HomePage from '@/pages/home'  /* HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../” */
import HouseAppliancePage from '@/pages/house-appliance'
import BeautyMakeupPage from '@/pages/beauty-makeup'
import FamilyStylePage from '@/pages/family-style'
import BabyToyPage from '@/pages/baby-toy'
import DietHealthyPage from '@/pages/diet-healthy'
import DetailPage from '@/pages/good-detail'
import LoginPage from '@/pages/login'

Vue.use(Router) /* 使用路由 */
Vue.use(VueResource)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/houseAppliance',
      name: 'HouseAppliancePage',
      component: HouseAppliancePage
    },
    {
      path: '/beautyMakeup',
      name: 'BeautyMakeupPage',
      component: BeautyMakeupPage
    },
    {
      path: '/familyStyle',
      name: 'FamilyStylePage',
      component: FamilyStylePage
    },
    {
      path: '/babyToy',
      name: 'BabyToyPage',
      component: BabyToyPage
    },
    {
      path: '/dietHealthy',
      name: 'DietHealthyPage',
      component: DietHealthyPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/',
      redirect: '/homePage'
    }
  ]
})
