<template>
    <!--Created by lollipop 2017/11/13-->
  <div class="mall-wrap faq-wrapper">
    <Breadcrumb separator=">">
      <BreadcrumbItem>9151福宝</BreadcrumbItem>
      <BreadcrumbItem>购物指南</BreadcrumbItem>
      <BreadcrumbItem>会员介绍</BreadcrumbItem>
    </Breadcrumb>
    <div class="wrapper-container clearfix">
      <div class="pull-left faq-navigation" style="width: 208px; border: 1px solid #eee">
        <div class="faq-category-header">
          常见问题分类
        </div>
        <div class="faq-category-collapse" id="faq-category-collapse">
          <Menu style="width: 206px">
            <Submenu name="1">
              <template slot="title">
                购物指南
              </template>
              <MenuItem name="1-1" ><div v-on:click="toggle('membersInfo')">会员介绍</div></MenuItem>
              <MenuItem name="1-2"><div v-on:click="toggle('invoiceSystem')">发票制度</div></MenuItem>
              <MenuItem name="1-3"><div v-on:click="toggle('afterSalesService')">售后服务政策</div></MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                付款方式
              </template>
              <MenuItem name="2-1"><div v-on:click="toggle('payment')">支付方式</div></MenuItem>
              <MenuItem name="2-2"><div v-on:click="toggle('benusCard')">9151福宝卡</div></MenuItem>
              <MenuItem name="2-3"><div v-on:click="toggle('giftCard')">电子礼品卡说明及使用</div></MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                订单服务
              </template>
                <MenuItem name="3-1"><div v-on:click="toggle('orderState')">订单状态说明</div></MenuItem>
                <MenuItem name="3-2"><div v-on:click="toggle('acceptReject')">验货与拒收政策说明</div></MenuItem>
              </MenuGroup>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                售后服务
              </template>
              <MenuItem name="4-1"><div v-on:click="toggle('returnPolicy')">退换货说明</div></MenuItem>
              <MenuItem name="4-2"><div v-on:click="toggle('refundReport')">退款说明</div></MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </div>
      </div>
      <div class="pull-right" style="width: 724px; border: 1px solid #eee">
        <keep-alive>
          <component v-bind:is="view"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
  import membersInfo from '../components/faq-com/members-info'
  import invoiceSystem from '../components/faq-com/invoice-system'
  import afterSalesService from '../components/faq-com/after-sales-service'
  import payment from '../components/faq-com/payment'
  import benusCard from '../components/faq-com/benus-card'
  import giftCard from '../components/faq-com/gift-card'
  import orderState from '../components/faq-com/order-state'
  import acceptReject from '../components/faq-com/accept-reject'
  import returnPolicy from '../components/faq-com/return-policy'
  import refundReport from '../components/faq-com/refund-report'
  export default {
    data () {
      return {
        view: 'membersInfo'
      }
    },
    components: {
      'membersInfo': membersInfo,
      'invoiceSystem': invoiceSystem,
      'afterSalesService': afterSalesService,
      'payment': payment,
      'benusCard': benusCard,
      'giftCard': giftCard,
      'orderState': orderState,
      'acceptReject': acceptReject,
      'returnPolicy': returnPolicy,
      'refundReport': refundReport
    },
    methods: {
      toggle: function (item) {
        this.view = item
        console.log(this.view, item)
      }
    }
  }
</script>
<style>

</style>


