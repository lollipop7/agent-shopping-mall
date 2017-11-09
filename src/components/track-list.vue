<template>
    <!--Created by lollipop 2017/11/9-->
  <div class="footprintConBox pull-left" style="cursor:pointer;">
    <router-link to="/detail">
      <img :src="img" height="218" width="218" alt="">
      <p class="f14 dark tl lh30">{{title}}</p>
      <p class="f18 dark tl lh28 footprintConBoxPrice">
        {{cartP}}
        <s class="f12 pl8 light">{{oriP}}</s>
      </p>
    </router-link>
  </div>
</template>
<script>
  export default {
    props: [
      'price',
      'title',
      'img',
      'cartP',
      'oriP'
    ]
  }
</script>
<style>
</style>


