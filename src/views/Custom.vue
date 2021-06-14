<template>
  <!-- 习俗组件 -->
  <div class="Custom">
    <div class="main">
      <!-- 习俗 -->
      <CustomEntrance />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

import CustomEntrance from '@/components/index/customEntrance.vue'
export default {
  name: 'Custom',
  setup() {
    return {}
  },
  components: {
    CustomEntrance
  }
}
</script>

<style lang="less" scoped></style>
