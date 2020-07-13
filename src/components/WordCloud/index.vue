<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '张三',
          value: '100'
        }, {
          name: '李四',
          value: '90'
        }, {
          name: '王五',
          value: '80'
        }, {
          name: '赵六',
          value: '70'
        }, {
          name: '杜七',
          value: '60'
        }, {
          name: '穆八',
          value: '50'
        }]
      },
      chartSettings: {
        color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)',
          'rgba(245, 166, 35, .7)', 'rgba(156, 13, 113, .7)']
      }
    }
  }
}
</script>

<style>

</style>
