<template>
    <!--Created by lollipop 2017/11/13-->
  <div class="mall-wrap fyq-wrapper">
    <Breadcrumb separator=">">
      <BreadcrumbItem>9151福宝</BreadcrumbItem>
      <BreadcrumbItem>购物指南</BreadcrumbItem>
      <BreadcrumbItem>会员介绍</BreadcrumbItem>
    </Breadcrumb>
    <div class="wrapper-container clearfix">
      <div class="pull-left fyq-navigation" style="width: 208px; border: 1px solid #eee">
        <div class="fyq-category-header">
          常见问题分类
        </div>
        <div class="fyq-category-collapse" id="fyq-category-collapse">
          <div class="fyq-item" @click="toggle()">
            购物指南
            <Icon type="chevron-down"></Icon>
          </div>
          <transition name="fade" mode="out-in">
            <ul v-show="show">
              <li>会员介绍</li>
              <li>发票制度</li>
              <li>售后服务政策</li>
            </ul>
          </transition>
          <div class="fyq-item" @click="toggle()">
            付款方式
            <Icon type="chevron-down"></Icon>
          </div>
          <transition name="fade" mode="out-in">
            <ul v-show="show">
              <li>支付方式</li>
              <li>9151福宝卡</li>
              <li>电子礼品卡说明及使用</li>
            </ul>
          </transition>
          <div class="fyq-item" @click="toggle()">
            订单服务
            <Icon type="chevron-down"></Icon>
          </div>
          <transition name="fade" mode="out-in">
            <ul v-show="show">
              <li>订单状态说明</li>
              <li>验货与拒收政策说明</li>
            </ul>
          </transition>
          <div class="fyq-item" @click="toggle()">
            售后服务
            <Icon type="chevron-down"></Icon>
          </div>
          <transition name="fade" mode="out-in">
            <ul v-show="show">
              <li>退换货说明</li>
              <li>退款说明</li>
            </ul>
          </transition>
        </div>
      </div>
      <div class="pull-right" style="width: 724px; border: 1px solid #eee">
        <div class="members-info fyq-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>购物指南</BreadcrumbItem>
            <BreadcrumbItem>会员介绍</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-article">
            <div class="anchor">
              <h3>1.成为企业用户需要哪些条件？（如何成为企业用户？)</h3>
              <ul>
                <li>申请成为企业用户条件：企业行为采购，能提供合法营业执照的单位或公司。满足条件的用户可联系我们，我们竭诚为您服务。</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2.用户权益？</h3>
              <ul>
                <li>企业用户不增加续重运费，具体请参考配送服务收费标准；</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3.专属服务</h3>
              <ul>
                <li>A.享有专属VIP专线服务（400-885-6112），及时为您解答和处理企业采购常见问题；</li>
                <li>B.享有专属客户经理服务，及时为您解答和处理合同签订、批量采购、企业解决方案等采购需求；</li>
                <li>C.享有专属票据服务：多单统一增票：可根据用户同日内的购买记录集中开具增值税发票；</li>
                <li>D.享有企业用户专属活动特权。</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>4.说明</h3>
              <ul>
                <li>欢迎有采购需求的企业用户可联系我们客户经理告知您的采购需求，我们将竭诚为您服务。</li>
                <li>更多专属权益不断提升中，敬请关注。</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>5.特别声明</h3>
              <ul>
                <li>会员账号禁止转借或转让他人使用，如因转借或转让他人使用所带来的一切后果，上海鹰扬人力资源有限公司概不负责，如被公司发现有转借或转让使用情况，上海鹰扬人力资源有限公司则有权立即取消此会员账号的消费资格。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="invoice-system fyq-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>购物指南</BreadcrumbItem>
            <BreadcrumbItem>发票制度</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-article">
            <div class="anchor">
              <h3>1.电子发票</h3>
              <ul>
                <li>
                  1)发票说明:
                  <div class="inner-item">
                    电子发票是指在购销商品、提供或者接受服务以及从事其他经营活动中，开具、收取的以电子方式存储的收付款凭证。当当开
                    具的电子发票均为真实有效的合法发票，与传统纸质发票具有同等法律效力，可作为用户维权、保修凭据、单位报销。
                  </div>
                </li>
                <li>
                  2）如何获得发票：
                  <div class="inner-item">
                    下单时，在“发票信息”处，选择“电子发票”，填写发票抬头、纳税人识别码或者社会统一信用代码、发票内容，点击“确认
                    发票信息”，用户可在商品送达后的1天，进入“我的订单”订单详情内下载电子发票。
                  </div>
                </li>
                <li>
                  3）开票说明：
                  <div class="inner-item">
                    <span>a. </span>
                    <div class="inner-item">发票金额：不包含礼券、礼品卡、积分及优惠活动的金额，发票金额不能高于订单金额。</div>
                  </div>
                  <div class="inner-item">
                    <span>b. </span>
                    <div class="inner-item">发票抬头：不能为空，可填写：个人、您的姓名、或您的单位名称。</div>
                  </div>
                  <div class="inner-item">
                    <span>c.</span>
                    <div class="inner-item">发票内容：数码、手机、家电类商品：发票内容只能开具明细（即：商品名称+型号）。</div>
                    <div class="inner-item">
                      图书类商品：发票内容只能开具：图书、资料、明细。
                    </div>
                    <div class="inner-item">
                      音像类商品：发票内容只能开具：音像、资料、办公用品。
                    </div>
                    <div class="inner-item">
                      百货类商品：发票内容不可选择图书、音像、资料。
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>d.</span>
                    <div class="inner-item">
                      合开发票：电子发票不支持合开。
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>e.</span>
                    <div class="inner-item">
                      税务局规定手机号码作为电子发票必填内容，方便用户在税务局指定的发票服务平台，通过手机号码查询电子发票信息。
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>f.</span>
                    <div class="inner-item">
                      查询发票真伪：电子发票下载成功后，顾客可凭借电子发票上所标识的发票代码、发票号码、防伪码等信息在国税局服务平台
                      进行查询验证，税务局网站链接：http://fpxxbd.tjsat.gov.cn:8001/fpxxbd/。
                    </div>
                  </div>
                </li>
                <li>
                  4）补开发票：
                  <div class="inner-item">
                    只针对1年内，未索要发票的订单（以订单发货时间为准，且订单状态为“已送达”或“交易成功”）。
                    您可以登录“我的福宝-在线补开/合开发票”，勾选订单，点击“补开发票”，提交补开发票申请。
                  </div>
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2. 普通纸质发票</h3>
              <ul>
                <li>
                  1）发票说明：
                  <div class="inner-item">
                    本公司所使用的发票是经税务局批准的正规自印发票，因自印发票不在税务系统上显示，所以消费者无法在税务网上查询到相关
                    信息。根据中国税法及税务管理部门的要求，并依据“商品货款由福宝网统一代收款，福宝各物流中心独立开具发票”的原则，
                    福宝物流中心就其所销售的商品各自开具发票，所有福宝开具的发票均合法有效。
                  </div>
                </li>
                <li>
                  2）如何获得发票：
                  <div class="inner-item">
                    下单时，在“发票信息”处，选择“普通发票”，填写发票抬头、发票内容，点击“确认发票信息”，发票会和订单一起送达。
                  </div>
                </li>
                <li>
                  3）开票说明：
                  <div class="inner-item">
                    <span>a.</span>
                    <div class="inner-item">
                      发票金额：不包含礼券、礼品卡、积分及优惠活动的金额，发票金额不能高于订单金额。
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>b.</span>
                    <div class="inner-item">
                      发票抬头：不能为空，可填写：个人、您的姓名、或您的单位名称。
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>c.</span>
                    <div class="inner-item">
                      发票内容：数码、手机、家电类商品：发票内容只能开具明细（即：商品名称+型号）。
                    </div>
                    <div class="inner-item">
                      图书类商品：发票内容只能开具：图书、资料。
                    </div>
                    <div class="inner-item">
                      音像类商品：发票内容只能开具：音像、资料、办公用品。
                    </div>
                    <div class="inner-item">
                      百货类商品：发票内容不可选择图书、音像、资料。
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>d.</span>
                    <div class="inner-item">
                      合开发票：仅支持发票专用章相同的普通发票和增值税发票合开。
                    </div>
                  </div>
                </li>
                <li>
                  4）补开发票：
                  <div class="inner-item">
                    只针对1年内，未索要发票的订单（以订单发货时间为准，且订单状态为“已送达”或“交易成功”）。
                  </div>
                  <div class="inner-item">
                    您可以登录“我的福宝-在线补开/合开发票”，勾选订单，点击“补开发票”，提交补开发票申请。
                  </div>
                </li>
                <li>
                  5）换开发票：
                  <div class="inner-item">
                    若您收到的发票信息有误，请在换开发票期限内，将原发票寄至：上海市浦东新区浦东南路1088号中融大厦801， 收信人：福
                    宝网发票组（收） 邮编：200120，务必注明订单号、发票抬头、内容、新发票需邮寄地址、邮编、收件人（不支持接收快递到
                    付），收到您的原发票后，我们会在48小时内为您重新开具发票并以快递方式寄出
                  </div>
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3.增值税发票</h3>
              <ul>
                <li>
                  1）如何获得发票：
                  <div class="inner-item">
                    下单时，在“发票信息”处，选择“增值税发票”，无需填写发票抬头，发票内容默认“明细”，点击“确认发票信息”。
                    首次开具增值税发票：下单成功后，需在“我的福宝-在线补开/合开发票-我的增值税发票资质”填写资质信息，上传资质文件
                    。我们会在资质信息审核通过，且订单状态变为“交易成功”后的7-15个工作日内，使用快递为您寄出发票（寄出时会短信通
                    知），预计3-4天可送达（除西藏、新疆、港澳台）。
                  </div>
                  <div class="inner-item">
                    注：自助提交增值税发票申请7天后，还未填写资质信息的，系统会自动取消增值税发票申请。
                  </div>
                  <div class="inner-item">
                    增值税专用发票资质信息：
                  </div>
                  <div class="inner-item">
                    <span>a.</span>
                    <div class="inner-item">开票单位名称—必须是您企业营业执照的全称</div>
                  </div>
                  <div class="inner-item">
                    <span>b.</span>
                    <div class="inner-item">
                      纳税人识别号—必须是您企业《税务登记证》的编号，一般为15位
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>c.</span>
                    <div class="inner-item">
                      注册地址—必须是您企业营业执照上的注册地址
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>d.</span>
                    <div class="inner-item">
                      电话—应该是与您企业保持联系的有效电话
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>e.</span>
                    <div class="inner-item">
                      开户银行—必须是您企业银行开户许可证上的开户银行
                    </div>
                  </div>
                  <div class="inner-item">
                    <span>f.</span>
                    <div class="inner-item">
                      银行账号—必须是您企业开户许可证上的银行账号
                    </div>
                  </div>
                  <div class="inner-item">
                    注：如上述资质信息和资质文件不一致，请提供加盖您企业公章的发票信息，包括开票单位名称，纳税人识别号，地址、开户行
                    及账号。
                  </div>
                </li>
                <li>
                  2）开票说明：
                  <div class="inner-item">
                    <span>a.</span><div class="inner-item">增值税发票只面向企业用户，个人用户不支持开具增值税发票。</div>
                  </div>
                  <div class="inner-item">
                    <span>b.</span><div class="inner-item">购买礼品卡不能开具增值税专用发票。</div>
                  </div>
                  <div class="inner-item">
                    c.合开发票：仅支持发票专用章相同的普通发票和增值税发票合开。
                  </div>
                  <div class="inner-item">
                    <span>d.</span><div class="inner-item">一个福宝账号原则上只能关联一个增值税专用发票资质，增值税专用发票的抬头只能是公司名称，内容只能选择商品明细。</div>
                  </div>
                  <div class="inner-item">
                    <span>e.</span><div class="inner-item">根据国家税务总局增值税发票管理规定,商业企业一般纳税人零售的烟、 酒、食品、服装、鞋帽（不包括劳保专用部分）、化
                    妆品等消费品不得开具专用发票（国税发【2006】156号）。因此，如您采购上述产品的订单将不能取得增值税专用发票。</div>
                  </div>
                </li>
                <li>
                  3）补开发票：
                  <div class="inner-item">
                    只针对1年内（自然年）未索要发票的订单（以订单交易成功时间为准，且订单状态为“交易成功”）。
                  </div>
                  <div class="inner-item">
                    您可以登录“我的福宝-在线补开/合开发票”，勾选订单，点击“补开发票”，提交补开发票申请。
                  </div>
                </li>
                <li>
                  4）换开发票：
                  <div class="inner-item">
                    若您收到的发票信息有误，请在换开发票期限内，将原发票寄至：上海市浦东新区浦东南路1088号中融大厦801 收信人：福宝
                    网发票组（收） 邮编：200120，务必注明订单号、发票抬头、内容、新发票需邮寄地址、邮编、收件人（不支持接收快递到付
                    ），收到您的原发票后，我们会在48小时内为您重新开具发票并以快递方式寄出。
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="after-sales-service fyq-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>购物指南</BreadcrumbItem>
            <BreadcrumbItem>售后服务政策</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-article">
            <div class="anchor">
              <h3>1. 7天无理由退货</h3>
              <ul>
                <li>
                  客户购买福宝网商品7日内（含7日，自客户签收商品次日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2. 售后服务</h3>
              <ul>
                <li>
                  购买福宝网商品自签收之日起15日内提交退换货申请,自申请提交成功之时起，福宝网会在48小时内完成客户售后问题的处理。
                  温馨提示：此服务仅针对部分区域指定商品，具体以提交退换货服务单申请成功时的页面标识为准。
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3. 如何判断商品购买了退换货运费险？</h3>
              <ul>
                <li>
                  您可在商品详情页查看，带有“运费险”标识的商品即表示卖家为该商品投保了退换货运费险。
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>4. 退换货运费险理赔后多久可以到账？</h3>
              <ul>
                <li>
                  完成退换货后，保险公司开始审核运费险理赔申请，理赔款将在触发理赔申请后72小时内退回至客户网银钱包账户余额中，并将短信通知客户理赔款到账。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="payment fyq-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>付款方式</BreadcrumbItem>
            <BreadcrumbItem>支付方式</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-article">
            <div class="anchor">
              <h3>1. 网上支付</h3>
              <ul>
                <li>
                  选择在线支付，请您进入“我的订单”，点击“付款”，按提示进行操作；目前在线支付支持余额、银行卡、网银+、微信、银联在线、网银钱包、信用卡等方式进行支付，可根据您的使用喜好进行选择；
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2. 公司转账</h3>
              <ul>
                <li>
                  提交订单后选择线下公司转账会生成15位汇款识别码，请您按照提示到银行操作转账， 线下公司转账方式的到账时间是1-3个工作日。
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3. 卡券抵扣</h3>
              <ul>
                <li>利用礼品卡和福宝卡卡内金额可进行现金抵扣。</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>4. 疑难解答</h3>
              <ul>
                <li>如果您仍有任何疑问，请致电客服中心：400-885-6112。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="benus-card fyq-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>售后服务</BreadcrumbItem>
            <BreadcrumbItem>9151福宝卡</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-article">
            <div class="anchor">
              <h3>1. 9151福宝卡种类</h3>
              <ul>
                <li>有300元、500元、800元、1000元四种面额。 </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2. 9151福宝卡特点</h3>
              <ul>
                <li>充入福宝网账户后，视同于现金，可在网站上挑选任意商品购买。在结算时选择使用以“福宝卡支付”即可。 </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3. 9151福宝卡使用</h3>
              <ul>
                <li>
                  购买“福宝卡”后需按卡面提示将卡中的金额充值到您在福宝网的账户中即可正常使用。
                </li>
              </ul>
            </div>
          </div>
          <div class="anchor">
            <h3>4. 疑难解答</h3>
            <ul>
              <li>
                如果您仍有任何疑问，请致电客服中心：400-885-6112。
              </li>
            </ul>
          </div>
        </div>
        <div class="gift-card fqy-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>付款方式</BreadcrumbItem>
            <BreadcrumbItem>电子礼品卡说明及使用</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-acticle">
            <div class="anchor">
              <h3>1. 电子礼品卡种类</h3>
              <ul>
                <li>9151福宝网会根据日常欢乐节日，推出不同款特色鲜明的各种档次的礼包券。</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2. 电子礼品卡特点</h3>
              <ul>
                <li>拿到此礼品券后可便捷的通过券上标识的“实物购物券”找到礼包商品并以此券抵偿货品金额（不可选择其他商品及与礼品券上内容不符的礼包</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3. 电子礼品卡使用</h3>
              <ul>
                <li>礼品券与礼包一一对应，只需按券面提示下单即可。</li>
              </ul>
            </div>
            <div class="anchor">
              <h3>4. 疑难解答</h3>
              <ul>
                <li>
                  如果您仍有任何疑问，请致电客服中心：400-885-6112。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="return-policy fyq-content">
          <Breadcrumb separator=">">
            <BreadcrumbItem>售后服务</BreadcrumbItem>
            <BreadcrumbItem>退换货说明</BreadcrumbItem>
          </Breadcrumb>
          <div class="fyq-article">
            <div class="anchor">
              <h3>1. 退换货说明</h3>
              <ul>
                <li>
                  9151福宝为您提供了在线受理退换货的服务，您可在申请退换货前了解退换货相关条款，确认符合退换货标准后您只需登陆个
                  人账户，在“我的福宝—退换货服务”页面中根据提示在线提交申请信息即可。
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>2. 如果您需要办理退换货，请优先选择您原购物渠道进行反馈，目前支持的申请方式有：</h3>
              <ul>
                <li>1)自助页面申请“我的福宝—订单中心—退/换货”</li>
                <li>2)登陆9151福宝点击在线客服；</li>
                <li>
                  3)电话拨打400-885-6112。
                </li>
              </ul>
            </div>
            <div class="anchor">
              <h3>3.下述商品不支持7天无理由退货</h3>
              <ul>
                <li>1)人定制类商品或服务；</li>
                <li>2)鲜活易腐的商品；</li>
                <li>3)在线下载或者您拆封的音像制品、电子书、代金券、充值卡、网游、计算机软件等数字化商品；</li>
                <li>
                  4)不完好的商品：
                  <ul>
                    <li>1）食品（含保健食品）、化妆品、医疗器械、计生用品类商品的最小销售单位包装被损坏；</li>
                    <li>2）电子电器类产品有未经授权的维修、改动，破坏、涂改强制性产品认证标志、指示标贴、机器序列号等，有难以恢复原状
                      的外观类使用痕迹，或者产生激活、授权信息、不合理的个人使用数据留存等数据类使用痕迹；如手机入网许可证损坏或遗
                      失，电视、空调已安装，单反相机已使用
                    </li>
                    <li>3）服装、鞋帽、箱包、玩具、家纺、家居类商品商标标识被</li>
                  </ul>
                </li>
              </ul>
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
        show: false
      }
    },
    methods: {
      toggle: function () {
        this.show = !this.show
      }
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>


