<!--Created by lollipop 2017/11/7-->
<template>
    <div class="mall-wrap">
        <p class="p-title">当前“个体美妆”共1000件商品</p>
        <div class="beauty-shop">
          <div class="shoppingCar" v-for="item in msg">
            <router-link to="/detail" tag="div" class="shoppingCarTop">
              <img :src="item.imgUrl" title="51金融圈商品" width="218" height="218"/>
              <h3>&nbsp;&nbsp;{{item.name}}</h3>
              <p style="color: #ff5b64"></p>
            </router-link>
            <div class="shoppingCarFot">
              <span>&nbsp;&nbsp;{{item.price}}&nbsp;&nbsp;<s>59.9</s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
    }}
</script>
<style scoped>
  .p-title{
    margin: 20px 0px;
  }
  .beauty-shop{
    height: 700px;
  }
  .shoppingCar{
    width: 220px;
    height: 320px;
    border: 1px solid #e7e7e7;
    float: left;
    margin: 11px;
  }
  .shoppingCar:hover{
    border: 1px solid #ff5b63;
  }
  .shoppingCarTop h3{
    width: 218px;
    height: 22px;
    margin-top: 5px;
    line-height: 22px;
    font-size: 14px;
    color: #333;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    table-layout: fixed;
    word-break: break-all;
  }
  .shoppingCarTop p{
    width: 218px;
    height: 24px;
    font-size: 12px;
    line-height: 24px;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    table-layout: fixed;
    word-break: break-all;
  }
</style>


