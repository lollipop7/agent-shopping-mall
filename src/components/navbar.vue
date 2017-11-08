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
            <router-link to="/houseAppliance" active-class="active">
              家用电器
            </router-link>
          </MenuItem>

          <Submenu name="3">
            <template slot="title">
              <router-link to="/beautyMakeup" active-class="active">
                个护美妆
              </router-link>
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>

          <MenuItem name="4">
            <router-link to="/familyStyle" active-class="active">
              居家生活
            </router-link>
          </MenuItem>
          <MenuItem name="5">
            <router-link to="/babyToy" active-class="active">
              母婴玩具
            </router-link>
          </MenuItem>
          <MenuItem name="6">
            <router-link to="/dietHealthy" active-class="active">
            美食健康
            </router-link>
          </MenuItem>
      </Menu>
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


