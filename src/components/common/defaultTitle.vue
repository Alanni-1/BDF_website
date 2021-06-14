<template>
  <el-divider>
    <h1>
      <slot></slot>
    </h1>
  </el-divider>
</template>

<script lang="ts">
export default {
  name: 'defaultTitle',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-divider {
  margin-bottom: 6.875rem;
  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--mainColor);
    font-family: cursive !important;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>
