<!--Created by lollipop 2017/11/7-->
<template>
  <div class="navbar">
    <div class="mall-wrap">
      <!--<router-link to="/homePage" active-class="active">首页</router-link>-->
      <!--<router-link to="/houseAppliance" active-class="active">家用电器</router-link>-->
      <!--<router-link to="/beautyMakeup" active-class="active">个护美妆</router-link>-->
      <!--<router-link to="/familyStyle" active-class="active">居家生活</router-link>-->
      <!--<router-link to="/babyToy" active-class="active">母婴玩具</router-link>-->
      <!--<router-link to="/dietHealthy" active-class="active">美食健康</router-link>-->
      <Menu mode="horizontal">
          <MenuItem name="1">
            <router-link to="/homePage" active-class="active">
              首页
            </router-link>
          </MenuItem>
          <MenuItem name="2">
            <router-link to="/snackFood" active-class="active">
              休闲食品
            </router-link>
          </MenuItem>
          <MenuItem name="3">
              <router-link to="/beautyMakeup" active-class="active">
                个护美妆
              </router-link>
          </MenuItem>
          <MenuItem name="4">
            <router-link to="/literatureBook" active-class="active">
              图书文学
            </router-link>
          </MenuItem>
          <MenuItem name="5">
            <router-link to="/houseAppliance" active-class="active">
              家用器具
            </router-link>
          </MenuItem>
          <MenuItem name="6">
            <router-link to="/babyToy" active-class="active">
              母婴用品
            </router-link>
          </MenuItem>
          <MenuItem name="6">
          <router-link to="/digitalMall" active-class="active">
            电脑数码
          </router-link>
        </MenuItem>
      </Menu>
      <div class="shop-cart">
        <router-link to="/login">
          <a href="javascript:void(0)" style="padding-top: 10px">
            <img src="/static/images/nav-bar/icon-gouwuche.png" alt="">
            <span>购物车</span>
            <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: false
      }
    }
  }
</script>


