import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import VueResource from 'vue-resource'
import MainPage from '@/pages/main'
import HomePage from '@/pages/home-page'  /* HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../” */
import SnackFoodPage from '@/pages/snack-food'
import BeautyMakeupPage from '@/pages/beauty-makeup'
import LiteratureBookPage from '@/pages/literature-book'
import HouseAppliancePage from '@/pages/house-appliance'
import BabyToyPage from '@/pages/baby-toy'
import DigitalMallPage from '@/pages/digital-mall'
import DetailPage from '@/pages/good-detail'
import FyqPage from '@/pages/fyq-page'
import LoginPage from '@/pages/login'

Vue.use(Router) /* 使用路由 */
Vue.use(VueResource)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/homePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/snackFood',
          name: 'SnackFoodPage',
          component: SnackFoodPage
        },
        {
          path: '/beautyMakeup',
          name: 'BeautyMakeupPage',
          component: BeautyMakeupPage
        },
        {
          path: '/literatureBook',
          name: 'LiteratureBookPage',
          component: LiteratureBookPage
        },
        {
          path: '/houseAppliance',
          name: 'HouseAppliancePage',
          component: HouseAppliancePage
        },
        {
          path: '/babyToy',
          name: 'BabyToyPage',
          component: BabyToyPage
        },
        {
          path: '/digitalMall',
          name: 'DigitalMallPage',
          component: DigitalMallPage
        },
        {
          path: '/detail/:aid',
          name: 'DetailPage',
          component: DetailPage
        },
        {
          path: '/fyq',
          name: 'FqyPage',
          component: FyqPage
        }
      ]
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
