<!--Created by lollipop 2017/11/7-->
<template>
  <div class="detail mall-wrap">
    <div class="container">
      <p class="site-cont"><b style="font-size: 18px">母婴用品</b>>母婴>贝因美婴儿奶瓶新生儿玻璃宽口径宝宝吸管带手柄母婴用品</p>
        <div class="productDetails">
            <img src="/static/images/detail/goods_17.png" width="440" height="440"/>
            <div class="productDetailInfo">
                <h2>
                    <img src="/static/images/detail/fubao.png"/>
                    贝因美婴儿奶瓶新生儿玻璃宽口径宝宝吸管带手柄母婴用品
                </h2>
                <div class="price">
                    <span class="marketPrice">参&nbsp;&nbsp;考&nbsp;&nbsp;价：<s>￥176.00</s></span><br/>
                    <span class="lovePrice">京&nbsp;&nbsp;东&nbsp;&nbsp;价：<span><b>￥39.00</b></span></span>
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
                  <li><span>中国文学</span><span>中国文学</span></li>
                  <li><span>中国文学</span><span>中国文学</span></li>
                  <li><span>中国文学</span><span>中国文学</span></li>
                  <li><span>中国文学</span><span>中国文学</span></li>
                  <li><span>中国文学</span><span>中国文学</span></li>
                  <li><span>中国文学</span><span>中国文学</span></li>
                </ul>
            </div>
            <div class="detailLeftBottom">
                <p class="browser">&nbsp;&nbsp;&nbsp;最近浏览</p>
                <div class="title">
                    <img src="/static/images/detail/goods_18.png" width="150" height="150"/>
                    <p>不畏将来,不念过去——《我的前半生》演员张龄心 诚意推荐</p>
                    <p style="color: #e60012; font-weight: bold; line-height: 35px">￥32.80</p>
                </div>
                <div class="title">
                    <img src="/static/images/detail/goods_19.png" width="150" height="150"/>
                    <p>不畏将来,不念过去——《我的前半生》演员张龄心 诚意推荐</p>
                    <p style="color: #e60012; font-weight: bold; line-height: 35px">￥32.80</p>
                </div>
                <div class="title">
                    <img src="/static/images/detail/goods_20.png" width="150" height="150"/>
                    <p>不畏将来,不念过去——《我的前半生》演员张龄心 诚意推荐</p>
                    <p style="color: #e60012; font-weight: bold; line-height: 35px">￥32.80</p>
                </div>
            </div>
        </div>
        <div class="detailRight">
            <div class="detailRightTitle">
                <p class="productDetailTitle">商品详情</p>
                <ul>
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
            <img src="/static/images/detail/goods_21.png" width="100%"/>
        </div>
    </div>
  </div>
</template>
<script>
//  import CityData from '../../static/data/city.json'
//  export default {
//    data () {
//      return {
//        CityData,
//        num: 1
//      }
//    },
//    methods: {
//      addNum () {
//        this.num = this.num + 1
//      },
//      reduceNum () {
//        if (this.num > 1) {
//          this.num = this.num - 1
//        }
//      }
//    }
 // }
</script>



