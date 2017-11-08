<template lang="pug">
  #app
    .wrap
      common-header  <!--  展示引入的header组件 -->
      search-box
      navbar
      router-view
      common-footer
      copy-right
</template>

<script>
  import CommonHeader from './components/header'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
  import SearchBox from './components/search-box'
  import Navbar from './components/navbar'
  import CommonFooter from './components/footer'
  import CopyRight from './components/copy-right'
  export default {
    name: 'app',
    components: {
      CommonHeader,
      SearchBox,
      Navbar,
      CommonFooter,
      CopyRight
    }
  }
</script>

<style>
  .wrap {
    width: 100%;
    margin: 0 auto;
  }
</style>
