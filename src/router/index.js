import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import VueResource from 'vue-resource'
import HomePage from '@/pages/home-page'  /* HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../” */
import SnackFoodPage from '@/pages/snack-food'
import BeautyMakeupPage from '@/pages/beauty-makeup'
import LiteratureBookPage from '@/pages/literature-book'
import HouseAppliancePage from '@/pages/house-appliance'
import BabyToyPage from '@/pages/baby-toy'
import DigitalMallPage from '@/pages/digital-mall'
import DetailPage from '@/pages/good-detail'
import LoginPage from '@/pages/login'
import detailOnePage from '@/pages/detail-one'
import detailTwoPage from '@/pages/detail-two'
import detailThreePage from '@/pages/detail-three'
import detailFourPage from '@/pages/detail-four'
import detailFivePage from '@/pages/detail-five'
import detailSixPage from '@/pages/detail-six'

Vue.use(Router) /* 使用路由 */
Vue.use(VueResource)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/homePage',
      component: HomePage
    },
    {
      path: '/snackFood',
      component: SnackFoodPage
    },
    {
      path: '/beautyMakeup',
      component: BeautyMakeupPage
    },
    {
      path: '/literatureBook',
      component: LiteratureBookPage
    },
    {
      path: '/houseAppliance',
      component: HouseAppliancePage
    },
    {
      path: '/babyToy',
      component: BabyToyPage
    },
    {
      path: '/digitalMall',
      component: DigitalMallPage
    },
    {
      path: '/detail/:id',
      component: DetailPage,
      children: [
        {
          path: '/detailOne',
          component: detailOnePage
        },
        {
          path: '/detailTwo',
          component: detailTwoPage
        },
        {
          path: '/detailThree',
          component: detailThreePage
        },
        {
          path: '/detailFour',
          component: detailFourPage
        },
        {
          path: '/detailFive',
          component: detailFivePage
        },
        {
          path: '/detailSix',
          component: detailSixPage
        }
      ]
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/',
      redirect: '/homePage'
    }
  ]
})
