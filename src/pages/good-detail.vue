<!--Created by lollipop 2017/11/7-->
<template>
  <div class="detail mall-wrap">
    <div v-show="isShow">
          <div class="container">
            <p class="site-cont"><b style="font-size: 18px">{{detailData.classfiy}}</b>>{{detailData.name}}</p>
            <div class="productDetails">
              <img :src="detailData.imgUrl" width="440" height="440"/>
              <div class="productDetailInfo">
                <h2>
                  <img src="/static/images/detail/fubao.png"/>
                  {{detailData.name}}
                </h2>
                <div class="price">
                  <span class="marketPrice">参&nbsp;&nbsp;考&nbsp;&nbsp;价：<s>{{detailData.cprice}}</s></span><br/>
                  <span class="lovePrice">京&nbsp;&nbsp;东&nbsp;&nbsp;价：<span><b>￥{{detailData.price}}</b></span></span>
                  <!--<span class="like">0</span>-->
                </div>
                <div class="adress">
                  <div class="selectAdress">
                    <p>配&nbsp;&nbsp;送&nbsp;&nbsp;至：</p>
                    <Cascader :data="CityData" placeholder="请选择配送地区"></Cascader>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;18:00前完成下单预计当天发货</span>
                  </div>
                  <div class="productGet">
                    <span>服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</span>
                    <span style="font-size: 14px">本商品由9151福宝发货并提供售后服务</span>
                  </div>
                </div>
                <div class="payNum">
                  <p>购买数量：</p>
                  <div class="fr">
                    <a href="javascript:;" class="reduce" @click="reduceNum">-</a>
                    <input type="text" v-model="num" class="payNumIpt"/>
                    <a href="javascript:;" class="add" @click="addNum">+</a>
                    <div class="info">
                      <span>已经售出28件</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>库存888件</span>
                    </div>
                  </div>
                </div>
                <div class="shoppingBtn">
                  <router-link to="/login"><a href="javascript:;" class="buyBtn">立即购买</a></router-link>
                  <router-link to="/login"><a href="javascript:;" class="carBtn">加入购物车</a></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="containerProductDetail">
            <div class="detailLeft">
              <div class="detailLeftTop">
                <p class="concern">&nbsp;&nbsp;&nbsp;相关分类</p>
                <ul>
                  <li><span>图书文学</span><span>休闲食品</span></li>
                  <li><span>个护美妆</span><span>家用器具</span></li>
                  <li><span>母婴用品</span><span>电脑数码</span></li>
                  <li><span>新鲜水果</span><span>海鲜水产</span></li>
                  <li><span>电脑配件</span><span>办公设备</span></li>
                  <li><span>洗护用品</span><span>尿裤湿巾</span></li>
                </ul>
              </div>
              <div class="detailLeftBottom">
                <p class="browser">&nbsp;&nbsp;&nbsp;最近浏览</p>
                <div class="title">
                  <img src="/static/images/detail/browser.png" width="150" height="150"/>
                  <p>不畏将来,不念过去——《我的前半生》演员张龄心 诚意推荐</p>
                  <p style="color: #e60012; font-weight: bold; line-height: 35px">￥32.80</p>
                </div>
                <div class="title">
                  <img src="/static/images/detail/browser.png" width="150" height="150"/>
                  <p>不畏将来,不念过去——《我的前半生》演员张龄心 诚意推荐</p>
                  <p style="color: #e60012; font-weight: bold; line-height: 35px">￥32.80</p>
                </div>
                <div class="title">
                  <img src="/static/images/detail/browser.png" width="150" height="150"/>
                  <p>不畏将来,不念过去——《我的前半生》演员张龄心 诚意推荐</p>
                  <p style="color: #e60012; font-weight: bold; line-height: 35px">￥32.80</p>
                </div>
              </div>
            </div>
            <div class="detailRight">
              <div class="detailRightTitle">
                <p class="productDetailTitle">商品详情</p>
                <ul v-show="false">
                  <li>出版社：长江文艺出版社</li>
                  <li>ISBD：12345678</li>
                  <li>版次：1</li>
                  <li>商品编码：12234556</li>
                  <li>包装：平装</li>
                  <li>开本：32开</li>
                  <li>出版时间：2018-10-01</li>
                  <li>用纸：胶版纸</li>
                </ul>
              </div>
              <div style="overflow: hidden;width: 100%">
                <img :src="detailData.imgDetailUrl" width="100%"/><br/>
                <img :src="detailData.imgDetailUrll" width="100%"/>
              </div>

            </div>
          </div>
    </div>
    <h1
      v-show="!isShow"
        style="
            text-align: center;
            height: 300px;
            line-height: 300px;
            font-size: 18px;
            color: #aaa;
            "
    >
      商品正在准备中，去其他地方看看吧。。。
    </h1>
  </div>
</template>
<script>
  import CityData from '../../static/data/city.json'
  export default {
    data () {
      return {
        CityData,
        detailData: [{}],
        isShow: true,
        num: 1
      }
    },
    mounted () {
      let {aid} = this.$route.params
      if (aid < 3 && aid >= 0) {
        this.$http.get(`/static/data/detail/shop.json`).then((res) => {
          console.log(11111, this)
          this.detailData = res.body[aid]
        })
      } else if ((aid < 14 && aid >= 10) || (aid < 1009 && aid >= 1004)) {
        if (aid < 1000) {
          aid = aid - 10
        } else {
          aid = aid - 1000
        }
        this.$http.get(`/static/data/detail/food.json`).then((res) => {
          this.detailData = res.body[aid]
        })
      } else if (aid < 116 && aid >= 100) {
        aid = aid - 100
        this.$http.get(`/static/data/detail/goods.json`).then((res) => {
          this.detailData = res.body[aid]
        })
      } else {
        this.isShow = false
      }
    },
    methods: {
      addNum () {
        this.num = this.num + 1
      },
      reduceNum () {
        if (this.num > 1) {
          this.num = this.num - 1
        }
      }
    }
  }
</script>



