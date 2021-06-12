<template>
  <!-- 特性组件 -->
  <div class="features">
    <div class="featuresContainer">
      <el-row :gutter="20">
        <el-col :md="6" :sm="12">
          <FeaturesItem />
        </el-col>
        <el-col :md="6" :sm="12">
          <FeaturesItem />
        </el-col>
        <el-col :md="6" :sm="12">
          <FeaturesItem />
        </el-col>
        <el-col :md="6" :sm="12">
          <FeaturesItem />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import FeaturesItem from './featuresItem.vue'
export default {
  name: 'features',
  setup() {
    return {}
  },
  components: {
    FeaturesItem
  }
}
</script>

<style lang="less" scoped>
.features {
  padding: 3rem 0 ;
  background-color: var(--bgc);
  opacity: .9;
  .featuresContainer {
    padding: 3rem 0.9375rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
