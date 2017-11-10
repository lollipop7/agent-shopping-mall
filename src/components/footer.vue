<!--Created by lollipop 2017/11/7-->
<template lang="html">
  <div class="fot-sec">
    <div class="fot-sec1 clearfix">
      <div class="mall-wrap">
        <div v-for="(item, index) in traits" class="traits inline-block">
          <div class="table-cell">
            <img :src="item.img" alt="traits">
          </div>
          <div class="table-cell">
            <h3>{{item.title}}</h3>
            <p>{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fot-sec2">
      <div class="mall-wrap clearfix">
        <div class="fot-col pull-left" v-for="(item, key) in fotCol">
          <h3>{{item.title}}</h3>
          <div class="txt-row" v-for="(txt, index) in item.txt">
            <p>{{txt}}</p>
          </div>
          <div class="ver-line" v-if="key != fotCol.length-1"></div>
        </div>
      </div>
    </div>
    <div class="copy-right mall-wrap" align="center">
      <span v-for="(item, index) in copyRight">{{item}}</span>
    </div>
  </div>
</template>
<script>
  import data from '../../static/data/footer.json'
  export default {
    data () {
      return {
        traits: data.traits,   /* 定义一个空数组数据items */
        fotCol: data.fotCol,
        copyRight: data.copyRight
      }
    }
//    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
//      this.$http.get('/api/footdata').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
//        this.traits = data.body.data.traits
//        this.fotCol = data.body.data.fotCol
//        this.copyRight = data.body.data.copyRight
//        console.log(data.body.data)
//      })
//    }
  }
</script>



