<!--Created by lollipop 2017/11/7-->
<template lang="html">
  <div class="footer">
    <div class="mall-wrap clearfix">
      <Col span="16">
        <Row>
          <Col span="6" v-for="item in fotNav" class="pull-left">
            <div class="fotNav">
              <h3>{{item.title}}</h3>
              <ul>
                <li v-for="txt in item.txt"><span>{{txt}}</span></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span="8">
        <Row>
          <Col span="12" v-for="img in er" class="pull-left er">
              <img :src="img" alt="二维码">
          </Col>
        </Row>
      </Col>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fotNav: [],   /* 定义一个空数组数据items */
        er: []
      }
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/footdata').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
//        console.log(data)
        this.fotNav = data.body.data.tops
        this.er = data.body.data.qrCode
      })
    }
  }
</script>



