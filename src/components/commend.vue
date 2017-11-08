<!--Created by lollipop 2017/11/7-->
<template lang="html">
  <li class="shoppingCar" style="border-top-color: rgb(255, 255, 255);">
    <router-link to="/detail"  class="goods-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
      <div class="shoppingCarTop" style="cursor:pointer">
        <img :src="img" height="218" width="218" title="title">
        <h3 title="title">{{title}}</h3>
        <p style="color:#FF5B64;">{{ads}}</p>
      </div>
      <div class="shoppingCarFot">
        <span class="shoppingCarFotPrice">{{cartP}}<s>{{oriP}}0</s></span>
        <span class="like2 fr mt3">已售{{like}}件</span>  <!-- 按销量排序的时候显示 -->
      </div>
    </router-link>
  </li>
</template>

<script>
  export default {
    props: ['price', 'title', 'img', 'ads', 'cartP', 'oriP', 'like']   /*  props是子组件获取父组件数据用的 */
  }
</script>

<style lang="css" scoped>

</style>

