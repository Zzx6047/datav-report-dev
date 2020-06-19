<!--  -->
<template>
  <div class="bottom-view">
    <div class="view">
      <el-card>
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-title">93,634</div>
              <v-chart :options="searchUserOption"></v-chart>
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-title">198,782</div>
              <v-chart :options="searchNumberOption"></v-chart>
            </div>
          </div>
          <div class="tabel-wrapper">
            <el-table :data="tableData">
              <el-table-column prop="prop" label="label" width="width">
              </el-table-column>
            </el-table>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <v-chart :options="categoryOptions"></v-chart>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      searchUserOption: {},
      searchNumberOption: {},
      tableData: [],
      radioSelect: '品类',
      categoryOptions: {}
    }
  }
}
</script>
<style lang='scss' scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
  }
}
</style>
