<!--Created by lollipop 2017/11/7-->
<template>
  <div class="navbar">
    <div class="mall-wrap">
      <v-menu mode="horizontal" :data="menuData" @item-click="itemclick"></v-menu>
      <!--<router-link to="/">首页</router-link>-->
      <!--<router-link to="/houseAppliance">家用电器</router-link>-->
      <!--<router-link to="/beautyMakeup">个护美妆</router-link>-->
      <!--<router-link to="/familyStyle">居家生活</router-link>-->
      <!--<router-link to="/babyToy">母婴玩具</router-link>-->
      <!--<router-link to="/dietHealthy">美食健康</router-link>-->
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menuData: [{
          name: '首页',
          to: '/'
        }, {
          name: '家用电器',
          to: '/houseAppliance'
        }, {
          name: '个护美妆',
          to: '/beautyMakeup'
        }, {
          name: '居家生活',
          to: '/familyStyle'
        }, {
          name: '母婴玩具',
          to: '/babyToy'
        }, {
          name: '美食健康',
          to: '/dietHealthy'
        }]
      }
    },
    methods: {
      itemclick: function (item) {
        this.$router.push(item[0].to)
      }
    }
  }
</script>


