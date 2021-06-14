<template>
  <div class="title flexCenter">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'title',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.title {
  height: 3.75rem;
  background-color: pink;
  h1 {
    text-align: center;
  }
}
</style>
