<template>
  <div class="wrap">
    <!--Created by lollipop 2017/11/13-->
    <common-header ></common-header>
    <SearchBox ></SearchBox>
    <navbar ></navbar>
    <router-view></router-view>
    <common-footer ></common-footer>
  </div>
</template>
<script>
  import CommonHeader from '../components/header'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
  import SearchBox from '../components/search-box'
  import Navbar from '../components/navbar'
  import CommonFooter from '../components/footer'
  export default {
    name: 'main',
    components: {
      CommonHeader,
      SearchBox,
      Navbar,
      CommonFooter
    }
  }
</script>
<style>
  .wrap {
    width: 100%;
    margin: 0 auto;
  }
</style>


