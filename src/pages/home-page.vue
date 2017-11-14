<!--Created by lollipop 2017/11/7-->
<template lang="html">
    <div class="home">
      <div class="banner-box">
        <Carousel v-model="value1" loop autoplay :arrow="arrow">
          <CarouselItem>
            <div class="demo-carousel"><router-link to="/detail/1004"><img class="banner-img" src="/static/images/home/banner_1.png"/></router-link></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><router-link to="/detail/1005"><img class="banner-img" src="/static/images/home/banner_2.png"/></router-link></div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="content">
        <!-- 促销商品 -->
          <div class="container">
              <div class="recommend">
                <img class="icon" src="/static/images/home/icon_1.png"/>
                <div class="chinese">促销商品</div>
                <div class="english">不一样的折扣 只为更美好的你!</div>
                <div class="more">更多>></div>
              </div>
              <div class="goods-box">
                <div class="black-line"></div>
                <div class="goods">
                    <router-link to="/detail/1006">
                        <img src="/static/images/detail/goods_9.png"/>
                        <div class="price-box">
                            <div class="price">自在独行：贾平凹的独行世</div>
                            <div class="down">
                                <div class="pone">￥37.10</div><div class="ptwo">39.00</div>
                                <div class="buy">去抢购</div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="goods">
                    <router-link to="/detail/1007">
                        <img src="/static/images/detail/goods_10.png"/>
                        <div class="price-box">
                            <div class="price">韩后植物能量粉底液bb霜</div>
                            <div class="down">
                                <div class="pone">￥68.90</div><div class="ptwo">43.00</div>
                                <div class="buy">去抢购</div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="goods">
                    <router-link to="/detail/1008">
                        <img src="/static/images/detail/goods_16.png"/>
                        <div class="price-box">
                            <div class="price">贝因美婴儿奶瓶</div>
                            <div class="down">
                                <div class="pone">￥176.00</div><div class="ptwo">390.00</div>
                                <div class="buy">去抢购</div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="goods">
                    <router-link to="/detail/1005">
                        <img src="/static/images/detail/goods_8.png"/>
                        <div class="price-box">
                            <div class="price">惠人原汁机HUO16SG</div>
                            <div class="down">
                                <div class="pone">￥2598</div><div class="ptwo">5900</div>
                                <div class="buy">去抢购</div>
                            </div>
                        </div>
                    </router-link>
                </div>
              </div>
          </div>
          <!-- 发现好货 -->
          <div class="container">
              <div class="recommend">
                <img class="icon" src="/static/images/home/icon_1.png"/>
                <div class="chinese">发现好货</div>
                <div class="english">品牌生活，给你更好的呵护</div>
                <div class="more">发现更多好物 >></div>
              </div>
              <div class="goods-box">
                <div class="black-line"></div>
                  <div class="left-img">
                    <router-link to="/detail/10000">
                        <img src="/static/images/home/home_3.png" class="backimg">
                        <div class="inside-box">
                            <div class="up">不待巅峰 提前放价</div>
                            <div class="mid">5万种图书</div>
                            <div class="down">5折封顶</div>
                        </div>
                    </router-link>
                  </div>
                  <div class="right-content">
                    <div class="small-goods">
                        <router-link to="/detail/10000">
                            <div class="left">
                                <div class="img">个体美妆</div>
                                <div class="up">人生没有什么放不下</div>
                                <div class="mid">满99立减50</div>
                                <div class="down">去看看>></div>
                            </div>
                            <div class="right">
                                <img class="imgbox" src="/static/images/home/home_12.png"/>
                            </div>
                        </router-link>
                    </div>
                    <div class="small-goods">
                        <router-link to="/detail/10000">
                            <div class="left">
                                <div class="img">个体美妆</div>
                                <div class="up">大卫科波菲尔</div>
                                <div class="mid">满99立减50</div>
                                <div class="down">去看看>></div>
                            </div>
                            <div class="right">
                                <img class="imgbox" src="/static/images/home/home_13.png"/>
                            </div>
                        </router-link>
                    </div>
                    <div class="small-goods">
                        <router-link to="/detail/10000">
                            <div class="left">
                                <div class="img">个体美妆</div>
                                <div class="up">围城</div>
                                <div class="mid">满99立减50</div>
                                <div class="down">去看看>></div>
                            </div>
                            <div class="right">
                                <img class="imgbox" src="/static/images/home/home_14.png"/>
                            </div>
                        </router-link>
                    </div>
                    <div class="small-goods">
                        <router-link to="/detail/10000">
                            <div class="left">
                                <div class="img">个体美妆</div>
                                <div class="up">挪威的森林</div>
                                <div class="mid">满99立减50</div>
                                <div class="down">去看看>></div>
                            </div>
                            <div class="right">
                                <img class="imgbox" src="/static/images/home/home_15.png"/>
                            </div>
                        </router-link>
                    </div>
                  </div>
              </div>
          </div>
          <!-- 个护美妆 -->
          <div class="container">
              <div class="recommend">
                <img class="icon" src="/static/images/home/icon_1.png"/>
                <div class="chinese">个护美妆</div>
                <div class="english">只用对的，不用贵的，做最美自己</div>
                <div class="more">最美自己 >></div>
              </div>
              <div class="goods-box">
                <div class="black-line"></div>
                  <div class="left-img">
                  <router-link to="/detail/10000">
                        <img src="/static/images/home/home_5.png" class="backimg">
                      <div class="inside-box2">
                        <div class="up">美妆个护</div>
                        <div class="mid">BEAUTY MAKEUP</div>
                        <div class="down">满199元减100</div>
                        <div class="foot"></div>
                      </div>
                    </router-link>
                  </div>
                  <div class="right-content">
                    <div class="mz-goods">
                        <router-link to="/detail/10000">
                        <div class="up">
                            <img class="imgbox" src="/static/images/home/home_16.png"/>
                        </div>
                        <div class="down">
                            <div class="pone">￥588</div>
                            <div class="ptwo">640</div>
                            <div class="go">带回家>></div>
                        </div>
                        </router-link>
                    </div>
                    <div class="mz-goods">
                    <router-link to="/detail/10000">
                        <div class="up">
                            <img class="imgbox" src="/static/images/home/home_17.png"/>
                        </div>
                        <div class="down">
                            <div class="pone">￥588</div>
                            <div class="ptwo">640</div>
                            <div class="go">带回家>></div>
                        </div>
                        </router-link>
                    </div>
                    <div class="mz-goods">
                    <router-link to="/detail/10000">
                        <div class="up">
                            <img class="imgbox" src="/static/images/home/home_18.png"/>
                        </div>
                        <div class="down">
                            <div class="pone">￥588</div>
                            <div class="ptwo">640</div>
                            <div class="go">带回家>></div>
                        </div>
                        </router-link>
                    </div>
                    <div class="mz-goods">
                    <router-link to="/detail/10000">
                        <div class="up">
                            <img class="imgbox" src="/static/images/home/home_19.png"/>
                        </div>
                        <div class="down">
                            <div class="pone">￥588</div>
                            <div class="ptwo">640</div>
                            <div class="go">带回家>></div>
                        </div>
                        </router-link>
                    </div>
                    <div class="mz-goods">
                    <router-link to="/detail/10000">
                        <div class="up">
                            <img class="imgbox" src="/static/images/home/home_20.png"/>
                        </div>
                        <div class="down">
                            <div class="pone">￥588</div>
                            <div class="ptwo">640</div>
                            <div class="go">带回家>></div>
                        </div>
                    </router-link>
                    </div>
                    <div class="mz-goods">
                    <router-link to="/detail/10000">
                        <div class="up">
                            <img class="imgbox" src="/static/images/home/home_21.png"/>
                        </div>
                        <div class="down">
                            <div class="pone">￥588</div>
                            <div class="ptwo">640</div>
                            <div class="go">带回家>></div>
                        </div>
                    </router-link>
                    </div>
                  </div>
              </div>
          </div>
          <!-- 图书文学 -->
          <div class="container">
              <div class="recommend">
                <img class="icon" src="/static/images/home/icon_1.png"/>
                <div class="chinese">图书文学</div>
                <div class="english">书中自有黄金屋，书中自有黄金屋</div>
                <div class="more">书的海洋 >></div>
              </div>
              <div class="goods-box">
                <div class="black-line"></div>
                  <div class="left-img">
                  <router-link to="/detail/10000">
                    <img src="/static/images/home/home_3.png" class="backimg">
                      <div class="inside-box">
                        <div class="up">新书速递 低价尝鲜</div>
                        <div class="mid">推荐图书</div>
                        <div class="down">5折封顶</div>
                      </div>
                    </router-link>
                  </div>
                  <div class="right-content">
                    <div class="ts-goods">
                        <div class="up">
                        <router-link to="/detail/10000">
                            <img class="upleft" src="/static/images/home/book1.png"/>
                            <div class="upright">
                                <img src="/static/images/home/hot.png"/>
                                <div class="title">龙应台“人生三书”<span>华语世界畅销书</span></div>
                                <div class="introduce">华语世界畅销书——龙应台“人生三书”，华人世界率性犀利的一枝笔，停下来，重新认识突然“长大”的儿女，继《野火集》后，龙应台这堂“人生课”中的三本“作业”，首次套装（《孩子你慢慢来》+《亲爱的安德烈》+《目送》），持续畅销两岸三地及华人世界。</div>
                                <div class="price">$81.60<span>7.5折</span></div>
                            </div>
                        </router-link>
                        </div>
                        <div class="down">
                            <div class="litle">
                            <router-link to="/detail/10000">
                                <img class="bookpic" src="/static/images/home/book3.png"/>
                                <div class="price">￥26.80<span>6.8折</span></div>
                                </router-link>
                            </div>
                            <div class="litle">
                            <router-link to="/detail/10000">
                                <img class="bookpic" src="/static/images/home/book4.png"/>
                                <div class="price">￥26.80<span>6.8折</span></div>
                            </router-link>
                            </div>
                            <div class="litle">
                            <router-link to="/detail/10000">
                                <img class="bookpic" src="/static/images/home/book2.png"/>
                                <div class="price">￥26.80<span>6.8折</span></div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <!-- 家具厨具 -->
          <div class="container">
              <div class="recommend">
                <img class="icon" src="/static/images/home/icon_1.png"/>
                <div class="chinese">家具厨具</div>
                <div class="english">爱家，爱生活，为你保驾护航</div>
                <div class="more">更多 >></div>
              </div>
              <div class="goods-box">
                <div class="black-line"></div>
                  <div class="left-img">
                  <router-link to="/detail/10000">
                    <img src="/static/images/home/home_7.png" class="backimg">
                      <div class="inside-box3">
                        <div class="up">家具器具</div>
                        <div class="mid">满199减100</div>
                        <div class="down">GO></div>
                      </div>
                    </router-link>
                  </div>
                  <div class="right-content">
                    <div class="ts-goods">
                        <div class="up">
                            <div class="small-goods">
                            <router-link to="/detail/10000">
                                <div class="left">
                                    <div class="introduce">Midea电磁炉匀火触摸屏爆炒</div>
                                    <div class="price">￥289</div>
                                    <div class="discount">限时折扣>></div>
                                </div>
                                <div class="right">
                                    <img class="imgbox" src="/static/images/home/home_6.png"/>
                                </div>
                            </router-link>
                            </div>
                            <div class="small-goods">
                            <router-link to="/detail/10000">
                                <div class="left">
                                    <div class="introduce">Midea电磁炉匀火触摸屏爆炒</div>
                                    <div class="price">￥289</div>
                                    <div class="discount">限时折扣>></div>
                                </div>
                                <div class="right">
                                    <img class="imgbox" src="/static/images/home/home_22.png"/>
                                </div>
                            </router-link>
                            </div>
                        </div>
                        <div class="down">
                            <div class="litle">
                            <router-link to="/detail/10000">
                                <img class="bookpic" src="/static/images/home/home_8.png"/>
                                <div class="price">￥26.80<span>6.8折</span></div>
                            </router-link>
                            </div>
                            <div class="litle">
                            <router-link to="/detail/10000">
                                <img class="bookpic" src="/static/images/home/home_6.png"/>
                                <div class="price">￥26.80<span>7.8折</span></div>
                            </router-link>
                            </div>
                            <div class="litle">
                            <router-link to="/detail/10000">
                                <img class="bookpic" src="/static/images/home/home_23.png"/>
                                <div class="price">￥26.80<span>6.8折</span></div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        value1: 0,
        arrow: 'never'
      }
    }
  }
</script>
<style>
</style>



