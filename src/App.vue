<template>
  <div class="header">
    <!-- 导航栏 -->
    <NavigationBar />
  </div>

  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <div class="footer">
    <AboutFeasts />
    <!-- 版权 -->
    <Copyright />
    <!-- 返回顶部 -->
    <BackToTop />
  </div>
</template>

<script lang="ts">
// 导航栏组件
import NavigationBar from '@/components/common/navigationBar.vue'
// 关于
import AboutFeasts from '@/components/common/aboutFeasts.vue'
// 版权组件
import Copyright from '@/components/common/copyright.vue'
// 返回顶部
import BackToTop from '@/components/common/backToTop.vue'
import { ref } from '@vue/reactivity'
export default {
  name: 'app',
  setup() {
    return {}
  },
  components: {
    NavigationBar,
    AboutFeasts,
    Copyright,
    BackToTop
  }
}
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
