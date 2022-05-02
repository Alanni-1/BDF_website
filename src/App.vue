<template>
  <div>
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />
    </div>

    <!-- <transition name="fade" mode="ease"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <div class="footer">
      <AboutFeasts class="wow fadeInUp" />
      <!-- 版权 -->
      <Copyright class="wow fadeInUp" />
      <!-- 返回顶部 -->
      <BackToTop class="wow fadeInRight"
                 data-wow-delay="0.5s" />
    </div>
    <waves />
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
// 鼠标特效
import waves from '@/components/common/waves.vue'

export default {
  name: 'app',
  components: {
    NavigationBar,
    AboutFeasts,
    Copyright,
    BackToTop,
    waves
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
