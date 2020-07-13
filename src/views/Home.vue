<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import SalesView from '../components/SalesView'
import TopView from '../components/TopView'
import { wordcloud, mapScatter, screenData } from '../api/index'

export default {
  name: 'Home',
  components: {
    BottomView,
    MapView,
    SalesView,
    TopView
  },
  data () {
    return {
      reportData: null,
      wordcloud: null,
      mapData: null
    }
  },
  methods: {
    getReportData () {
      return this.reportData
    },
    getWordCloud () {
      return this.wordcloud
    },
    getMapData () {
      return this.mapData
    }
  },
  provide () {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted () {
    wordcloud().then(data => {
      this.wordcloud = data
    })
    mapScatter().then(data => {
      this.mapData = data
    })
    screenData().then(data => {
      this.reportData = data
    })
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: auto;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
