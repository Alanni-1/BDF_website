<template>
  <div class="base-layout">
    <h1 class="baseLayout-title">
      <slot name="title"></slot>
    </h1>
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
  padding: 3rem 3rem 0 3rem;
  background-color: var(--bgc);
  transition: background-color 0.4s ease;
  h1.baseLayout-title {
    padding: 2.8125rem;

    text-align: center;
  }
}
</style>