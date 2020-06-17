<!--  -->
<template>
  <div>
    <common-card title="累计销售额" value="￥ 32039165">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span>7.33%</span>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span>7.33%</span>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="money">￥ 30000000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: '',
  mixins: [commonCardMixin]
}
</script>
<style lang='scss' scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    margin-top: 3px;
    font-size: 12px;
    background: yellowgreen;
    color: #666;
  }
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>
