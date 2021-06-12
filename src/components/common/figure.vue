<template>
  <!-- 人物组件 -->
  <div class="figure">
    <h1>OurTeamMembers</h1>
    <div class="figureContainer">
      <el-row :gutter="20">
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import figureItem from './figureItem.vue'
export default {
  name: 'figure',
  setup() {
    return {}
  },
  components: {
    figureItem
  }
}
</script>

<style lang="less" scoped>
.figure {
  padding: 3rem 0;
  background: linear-gradient(75deg, #fd614a 10%, #fd844a);
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    font-size: 2.8125rem;
  }
  .figureContainer {
    padding: 3rem 0.9375rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
