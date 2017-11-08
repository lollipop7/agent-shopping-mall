<!--Created by lollipop 2017/11/7-->
<template>
  <div class="mall-wrap">
    <reach-results></reach-results>
    <div class="content clearfix">
      <ul class="cont-ul">
        <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <common-commend v-for="item in items" :key="item.index" :price="item.price" :title="item.title" :img="item.img"></common-commend>
      </ul>
    </div>
  </div>
</template>
<script>
  import ReachResults from '../components/reach-results'
  import CommonCommend from '../components/commend'
  export default {
    data () {
      return {
        items: []   /* 定义一个空数组数据items */
      }
    },
    components: {
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
</style>


