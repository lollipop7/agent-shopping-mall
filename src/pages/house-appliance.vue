<!--Created by lollipop 2017/11/7-->
<template>
    <div class="mall-wrap beautyMakeup">
        <p class="p-title">当前“个体美妆”共1000件商品</p>
        <div class="content clearfix channelCon">
            <div class="sorting">
                <span class="sortingTit" >排序方式：</span>
                <span class="sortingSp" :class="sortingSpObj">默认</span>
                <span class="sortingSp" :class="sortingSpObj">销量</span>
                <span class="sortingSp" :class="sortingSpObj">人气</span>
                <span class="sortingSp" :class="sortingSpObj">价格</span>
            </div>
        </div>
        <div class="beauty-shop">
            <div class="shoppingCar" v-for="item in msg">
                <router-link to="/detail" tag="div" class="shoppingCarTop">
                    <img :src="item.imgUrl" title="51金融圈商品" width="218" height="218"/>
                    <h3>&nbsp;&nbsp;{{item.name}}</h3>
                    <p style="color: #ff5b64"></p>
                </router-link>
                <div class="shoppingCarFot">
                    <span>&nbsp;&nbsp;{{item.price}}&nbsp;&nbsp;<s>59.9</s>&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{{item.sail}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: []   /* 定义一个空数组数据items */
      }
    },
    mounted () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/shop').then((res) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
        console.log(res)
        this.msg = res.body.data
      })
    },
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



