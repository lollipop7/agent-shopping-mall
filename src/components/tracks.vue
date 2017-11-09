<template>
  <!--Created by lollipop 2017/11/7-->
  <!--我的足迹-->
  <div class="mall-wrap Myfoot">
    <div class="footprintTop mt18 clearfix">
      <div class="pull-left">
        <h2 class="lh36 f18 dark">我的足迹</h2>
        <span></span>
      </div>
      <div class="pull-right">
        <a href="javascript:void(0)" class="lh36 f14 lightDark tr">换一批</a>
      </div>
    </div>
    <div class="footprintCon clearfix">
      <tracklist
        class="footprintConBox pull-left"
        v-for="(list, index) in trackLists"
        :key="list.index"
        :img="list.img"
        :title="list.title"
        :cartP="list.cartP"
        :oriP="list.oriP">
      </tracklist>
    </div>
  </div>
</template>
<script>
  import tracklist from './track-list'
  export default {
    data () {
      return {
        trackLists: []
      }
    },
    components: {
      tracklist
    },
    created () {
      this.$http.get('api/goods').then((data) => {
        this.trackLists = data.body.data.trackLists
        console.log(data, this.trackLists)
      })
    }
  }
</script>
<style>
</style>


