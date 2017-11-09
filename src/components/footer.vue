<!--Created by lollipop 2017/11/7-->
<template lang="html">
  <div class="fot-sec">
    <div class="traits mall-wrap clearfix">
        <div v-for="(item, index) in traits" class="pull-left">
          <div class="table-cell">
            <img :src="item.img" alt="traits">
          </div>
          <div class="table-cell">
            <h3>{{item.title}}</h3>
            <p>{{item.txt}}</p>
          </div>
        </div>
    </div>
    <div class="fot-sec2">
      <div class="mall-wrap clearfix">
        <div class="fot-col pull-left" v-for="((item,key), index) in fotCol">
          <h3>{{item.title}}</h3>
          <div class="txt-row" v-for="(txt, index) in item.txt">
            <p>{{txt}}</p>
          </div>
          <div class="ver-line" v-if="key != fotCol.length-1"></div>
        </div>
      </div>
      <div class="copy-right">
        <span v-for="(item, index) in copyRight">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        traits: [],   /* 定义一个空数组数据items */
        fotCol: [],
        copyRight: []
      }
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/footdata').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
//        console.log(data)
        this.traits = data.body.data.traits
        this.fotCol = data.body.data.fotCol
        this.copyRight = data.body.data.copyRight
      })
    }
  }
</script>



