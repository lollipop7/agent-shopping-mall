<template>
    <!--Created by lollipop 2017/11/14-->
  <div class="order-state faq-content">
    <Breadcrumb separator=">">
      <BreadcrumbItem>订单服务</BreadcrumbItem>
      <BreadcrumbItem>订单状态说明</BreadcrumbItem>
    </Breadcrumb>
    <div class="faq-article">
      <div class="anchor">
        <h3>1. 各种订单状态说明</h3>
        <ul>
          <li>
            1)等待到款
            <div class="inner-item">
              如果您选择“网上支付”和“银行转账”这两种付款方式，当当在暂未收到您款项时，订单会显示“等待到款”，建议您在订
              单保留期限内及时付款。
            </div>
          </li>
          <li>
            2)等待审核
            <div class="inner-item">
              订单提交成功后，我们会审核您的信息，如：收货地址、手机号码、发票信息等，在此期间订单会显示“等待审核”。
            </div>
          </li>
          <li>
            3)等待预售商品到货
            <div class="inner-item">
              若您订购的商品为预售商品，商品到货前订单会显示“等待预售商品到货”。
            </div>
          </li>
          <li>
            4)正在配货
            <div class="inner-item">
              此状态说明您的订单正在库房配货。
            </div>
          </li>
          <li>
            5)等待移仓
            <div class="inner-item">
              若您订单中的商品当地库房缺货，我们将从北京仓库调货至当地仓库，此时订单显示“等待移仓”。
            </div>
          </li>
          <li>
            6)正在移仓
            <div class="inner-item">
              若您订单中的商品正在从北京仓库发往当地仓库，订单会显示“正在移仓”。
            </div>
          </li>
          <li>
            7)已配货
            <div class="inner-item">
              此状态说明您的订单已完成配货，正在等待发货。
            </div>
          </li>
          <li>
            8)已发货
            <div class="inner-item">
              若您的订单已从库房发出，正在配送途中，订单会显示“已发货”。
            </div>
          </li>
          <li>
            9)已送达
            <div class="inner-item">
              1）若您已收到商品并在“我的订单”中进行了“收货反馈”，订单会显示“已送达”。
            </div>
            <div class="inner-item">
              2）若您未进行“收货反馈”操作，系统在发货后的20天默认变为“已送达”。
            </div>
            <div class="inner-item">
              3） 订单状态为“已发货”，但订单中的物流配送信息显示“配送成功”时，系统会默认将您的订单状态显示为“已送达”。
            </div>
          </li>
          <li>
            10)交易成功
            <div class="inner-item">
              若您的订单状态为“已送达”，且此状态后的15天内未发生退货，系统将默认变为“交易成功”。
            </div>
          </li>
          <li>
            11)交易未成功
            <div class="inner-item">
              若订单未送达、送达后未签收或签收后办理了退货，订单状态都会默认显示“交易未成功”。
            </div>
          </li>
          <li>
            12)取消
            <div class="inner-item">
              若您订单中的商品缺货，或您的订单超出了订单保留期限，或您将订单进行了取消操作，订单都将显示“取消”状态。
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


