<template>
    <!--Created by lollipop 2017/11/14-->
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
</template>
<script>
</script>
<style>
</style>


