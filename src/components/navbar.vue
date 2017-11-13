<!--Created by lollipop 2017/11/7-->
<template>
  <div class="navbar">
    <div class="mall-wrap clearfix">
      <Dropdown class="pull-left all-category">
        <a href="javascript:void(0)" style="position: static">
          全部
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <Dropdown placement="right-start">
            <DropdownItem>
              休闲食品
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list" >
              <DropdownItem v-for="item in dietHealthySorts" class="inline-block">
                <router-link to="/snackFood" tag="p" key="item">{{item}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="right-start">
            <DropdownItem>
              个护美妆
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list" >
              <DropdownItem v-for="item in beautyMakeupSorts" class="inline-block">
                <router-link to="/beautyMakeup" tag="p" key="item">{{item}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="right-start">
            <DropdownItem>
              图书文学
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list" >
              <DropdownItem v-for="item in literatureBookSorts" class="inline-block">
                <router-link to="/literatureBook" tag="p" key="item">{{item}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="right-start">
            <DropdownItem>
              家用器具
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list" >
              <DropdownItem v-for="item in houseAppSorts" class="inline-block">
                <router-link to="/houseAppliance" tag="p" key="item">{{item}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="right-start">
            <DropdownItem>
              母婴用品
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list" >
              <DropdownItem v-for="item in babyToySorts" class="inline-block">
                <router-link to="/babyToy" tag="p" key="item">{{item}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="right-start">
            <DropdownItem>
              电脑数码
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list" >
              <DropdownItem v-for="item in digitalMallSorts" class="inline-block">
                <router-link to="/digitalMall" tag="p" key="item">{{item}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenu>
      </Dropdown>
      <Menu mode="horizontal"  class="pull-left">
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
      <div class="shop-cart pull-right">
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
  import data from '../../static/data/goods.json'
  export default {
    data () {
      return {
        active: false,
        dietHealthySorts: data.classificationA.dietHealthySorts,
        beautyMakeupSorts: data.classificationA.beautyMakeupSorts,
        literatureBookSorts: data.classificationA.literatureBookSorts,
        houseAppSorts: data.classificationA.houseAppSorts,
        babyToySorts: data.classificationA.babyToySorts,
        digitalMallSorts: data.classificationA.digitalMallSorts
      }
    }
  }
</script>


