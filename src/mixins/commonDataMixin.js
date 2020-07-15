function formate (v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

function wrapperNumber (o, k) {
  return o && o[k] ? formate(o[k]) : 0
}

function wrapperOriginalNumber (o, k) {
  return o && o[k] ? o[k] : 0
}

function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}

function wrapperObject (o, k) {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}

function wrapperMoney (o, k) {
  return o && o[k] ? `￥ ${formate(o[k])}` : '0%'
}

export default {
  // methods: {
  //   formate (v) {
  //     return formate(v)
  //   }
  // },
  filters: {
    formate (v) {
      return formate(v)
    }
  },
  computed: {
    reportData () {
      return this.getReportData()
    },
    // 销售额
    salesToday () {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay () {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    // 订单量
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay () {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    // 交易用户数
    orderUser () {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate () {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis () {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    // 累计用户数
    userToday () {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber () {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth () {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay () {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth () {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },
    // 销售额与访问量
    orderFullYear () {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis () {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank () {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear () {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis () {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank () {
      return wrapperArray(this.reportData, 'userRank')
    },
    // 关键词搜索
    wordCloud () {
      return this.getWordCloud()
    },
    // 分类销售排行
    category1 () {
      return wrapperObject(this.reportData, 'category.data1')
    },
    category2 () {
      return wrapperObject(this.reportData, 'category.data2')
    },
    // 销售大盘
    mapData () {
      return this.getMapData()
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}
