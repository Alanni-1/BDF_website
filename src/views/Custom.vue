<template>
  <!-- 习俗组件 -->
  <div class="Custom">
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />
    </div>
    <div class="main">
      <!-- 习俗 -->
      <CustomEntrance />
    </div>
    <div class="footer">
      <AboutFeasts />
      <!-- 版权 -->
      <Copyright />
      <!-- 返回顶部 -->
      <BackToTop />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

// 导航栏组件
import NavigationBar from '@/components/common/navigationBar.vue'
// 关于
import AboutFeasts from '@/components/common/aboutFeasts.vue'
// 版权组件
import Copyright from '@/components/common/copyright.vue'
// 返回顶部
import BackToTop from '@/components/common/backToTop.vue'

import CustomEntrance from '@/components/index/customEntrance.vue'
export default {
  name: 'Custom',
  setup() {
    return {}
  },
  components: {
    NavigationBar,
    AboutFeasts,
    Copyright,
    BackToTop,
    CustomEntrance
  }
}
</script>

<style lang="less" scoped></style>
