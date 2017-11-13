<!--Created by lollipop 2017/11/7-->
<template lang="html">
  <div class="site-nav">
    <div class="mall-wrap clearfix">
      <ul class="pull-left welcome">
        <li>
          <span>嗨，欢迎光临9151福宝，请</span><router-link to="/login">【登陆】</router-link>
        </li>
      </ul>
      <div class="pull-right tel">400 8856112</div>
      <Menu mode="horizontal" class="pull-right clearfix topbar">
        <MenuItem name="1">
          我的收藏
        </MenuItem>
        <Submenu name="2">
          <template slot="title">
            我的订单
          </template>
          <MenuItem name="2-1">待支付</MenuItem>
          <MenuItem name="2-2">待收货</MenuItem>
          <MenuItem name="2-3">待评价</MenuItem>
          <MenuItem name="2-4">修改订单</MenuItem>
        </Submenu>
        <MenuItem name="3">
          <router-link to="/login">
            <Icon type="android-cart"></Icon>
            购物车
          </router-link>
        </MenuItem>
        <MenuItem name="4">
          帮助中心
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  }
</script>



