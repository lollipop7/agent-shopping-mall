<template>
  <!--Created by lollipop 2017/11/7-->
  <div class="channelCon">
    <div class="mall-wrap">
      <div class="reachResults">
        <p class="reachResults">
          当前“母婴玩具”共 202 件商品
        </p>
      </div>
      <div class="classfication clearfix">
        <div class="classificationTit pull-left">
          <p>品&nbsp;&nbsp;&nbsp;&nbsp;牌：</p>
        </div>
        <div class="classificationA pull-right">
          <classification  v-for="(item,index) in classificationA" :key="item.index" :category="item"></classification>
        </div>
      </div>
      <div class="content clearfix">
        <div class="sorting">
          <div class="sorting-cate pull-left">
            <span class="sortingTit" >排序方式：</span>
            <span class="sortingSp" :class="sortingSpObj">默认</span>
            <span class="sortingSp" :class="sortingSpObj">销量</span>
            <span class="sortingSp" :class="sortingSpObj">人气</span>
            <span class="sortingSp" :class="sortingSpObj">价格</span>
          </div>
          <div class="sort-page pull-right">
            <Page :current="2" :total="50" simple></Page>
          </div>
        </div>
        <ul class="cont-ul mt13 clearfix">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
          <common-commend
            v-for="(babyToy,index) in babyToys"
            :key="babyToy.index"
            :cartP="babyToy.cartP"
            :oriP="babyToy.oriP"
            :like="babyToy.like"
            :img="babyToy.img"
            :title="babyToy.title"
            :ads="babyToy.ads">
          </common-commend>
        </ul>
        <div class="shoppingCar-page mt13 clearfix">
          <Page :total="100"></Page>
        </div>
      </div>
      <mytracks></mytracks>
    </div>
  </div>
</template>
<script>
  import classification from '../components/classification'
  import CommonCommend from '../components/commend'
  import mytracks from '../components/tracks'
  import data from '../data/goods.json'
  export default {
    data () {
      return {
        babyToys: data.babyToys,   /* 定义一个空数组数据items */
        classificationA: data.classificationA.babyToySorts,
        isActive: true,
        isSortingSp2: true,
        isActive3: false,
        hasArrow: false
      }
    },
    components: {
      classification,
      CommonCommend,
      mytracks
    },
//    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
//      this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
//        this.babyToys = data.body.data.babyToys
//        this.classificationA = data.body.data.classificationA.babyToySorts
//      })
//    },
    computed: {
      sortingSpObj: function () {
        return {
          active: this.isActive && !this.hasArrow,
          sortingSp2: this.isActive && this.isSortingSp2 && !this.isActive3 && !this.hasArrow,
          active3: this.isActive && this.isActive3 && !this.isSortingSp2 && !this.hasArrow
        }
      }
    }
  }
</script>


