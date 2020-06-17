<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <map-view></map-view>
    <bottom-view></bottom-view>
  </div>
</template>

<script>
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import SalesView from '../components/SalesView'
import TopView from '../components/TopView'

export default {
  name: 'Home',
  components: {
    BottomView,
    MapView,
    SalesView,
    TopView
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
