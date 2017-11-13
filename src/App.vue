<template>
  <div id="app">
      <div class="wrap">
          <common-header v-show="show"></common-header>
          <SearchBox v-show="show"></SearchBox>
          <navbar v-show="show"></navbar>
          <router-view></router-view>
          <common-footer v-show="show"></common-footer>
      </div>
  </div>
  <!--#app-->
    <!--.wrap-->
      <!--common-header  &lt;!&ndash;  展示引入的header组件 &ndash;&gt;-->
      <!--search-box-->
      <!--navbar-->
      <!--router-view-->
      <!--common-footer-->
</template>

<script>
  import CommonHeader from './components/header'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
  import SearchBox from './components/search-box'
  import Navbar from './components/navbar'
  import CommonFooter from './components/footer'
  export default {
    name: 'app',
    data () {
      return {
        show: true   /* 定义一个空数组数据items */
      }
    },
    components: {
      CommonHeader,
      SearchBox,
      Navbar,
      CommonFooter
    },
    mounted () {
      const {name} = this.$route
      if (name === 'LoginPage') {
        this.show = false
      }
    },
    watch: {
      $route (to) {
        let path = to.path.substring(1)
        if (path === 'login') {
          this.show = false
        } else {
          this.show = true
        }
      }
    }
  }
</script>

<style>
  .wrap {
    width: 100%;
    margin: 0 auto;
  }
</style>
