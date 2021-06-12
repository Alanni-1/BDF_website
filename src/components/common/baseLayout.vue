<template>
  <div class="base-layout">
    <header class="baseLayout-title">
      <slot name="title"></slot>
    </header>
    <div class="base-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseLayout'
}
</script>

<style lang='less' scoped>
.base-layout {
  padding: 2.8125rem;

  header.baseLayout-title {
    padding: 3rem;

    font-size: 1.5rem;
    text-align: center;
  }
}
</style>