<!--Created by lollipop 2017/11/7-->
<template lang="html">
  <div class="wrap">
    <common-header></common-header>   <!--  展示引入的header组件 -->
    <search-box></search-box>
    <navbar></navbar>
    <div class="mall-wrap">
      <reach-results></reach-results>
    </div>
    <div class="content clearfix">
      <ul class="cont-ul">
        <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <common-commend v-for="item in items" :key="item.index" :price="item.price" :title="item.title" :img="item.img"></common-commend>
      </ul>
    </div>
    <!--<common-footer></common-footer>  &lt;!&ndash;  展示引入的footer组件 &ndash;&gt;-->
    <div class="mall-wrap">
      <!--<copy-right></copy-right>-->
    </div>
  </div>
</template>
<script>
  import CommonHeader from '../components/header'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
//  import CommonFooter from '../components/footer'
//  import CopyRight from '../components/copy-right'
  import SearchBox from '../components/search-box'
  import Navbar from '../components/navbar'
  import ReachResults from '../components/reach-results'
  import CommonCommend from '../components/commend'
  export default {
    data () {
      return {
        items: []   /* 定义一个空数组数据items */
      }
    },
    components: {
      CommonHeader,
//      CommonFooter,
//      CopyRight,
      SearchBox,
      Navbar,
      ReachResults,
      CommonCommend
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
//        console.log(data.body.data)
        this.items = data.body.data
      })
    }
  }
</script>

<style>
  .wrap {
    width: 100%;
    margin: 0 auto;
  }
</style>



