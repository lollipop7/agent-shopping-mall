<!--Created by lollipop 2017/11/7-->
<template lang="pug">
  .mall-wrap.copy-right
    .block
      .inline-block(v-for="(item, index) in copyRight")
        span {{item}}
        span(v-if="index != copyRight.length-1" style="padding: 0 6px") |
    .block
      .inline-block.authens(v-for="(item, index) in [1,2,3,4]")
</template>
<script>
  export default {
    data () {
      return {
        copyRight: []
      }
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/footdata').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
//        console.log(data)
        this.copyRight = data.body.data.copyRight
      })
    }
  }
</script>



