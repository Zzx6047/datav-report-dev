<!--  -->
<template>
  <div>
    <common-card title="累计用户数" :value="userToday">
      <template>
        <v-chart :options="getOptions()"></v-chart>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比 </span>
          <span class="emphasis">{{userGrowthLastDay}}</span>
          <div class="increase"></div>
          <span class="month">月同比 </span>
          <span class="emphasis">{{userGrowthLastMonth}}</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: '',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions () {
      return {
        color: ['#3398DB'],
        tooltip: {},
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [{
          name: '上月平台用户数',
          type: 'bar',
          stack: '总量',
          data: [this.userLastMonth],
          barWidth: '10px',
          itemStyle: {
            color: '#45c946'
          }
        }, {
          name: '今日平台用户数',
          type: 'bar',
          stack: '总量',
          data: [this.userTodayNumber],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [this.userLastMonth],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])

            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
