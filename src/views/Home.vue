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
// import { test } from '../api/index'

export default {
  name: 'Home',
  components: {
    BottomView,
    MapView,
    SalesView,
    TopView
  },
  mounted () {
    // test()
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
