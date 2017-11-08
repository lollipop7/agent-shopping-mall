<!--Created by lollipop 2017/11/7-->
<template>
  <div class="navbar">
    <div class="mall-wrap">
      <v-menu mode="horizontal" :data="horizontalMnueData"></v-menu>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        horizontalMnueData: [{
          name: '首页'
        }, {
          name: '家用电器'
        }, {
          name: '个护美妆'
        }, {
          name: '居家生活'
        }, {
          name: '母婴玩具'
        }, {
          name: '美食健康'
        }]
      }
    }
  }
</script>


