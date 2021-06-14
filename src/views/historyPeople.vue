<template>
  <div>
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />
    </div>
    <div class="main"></div>
    <div class="footer">
      <AboutFeasts />
      <!-- 版权 -->
      <Copyright />
      <!-- 返回顶部 -->
      <BackToTop />
    </div>
  </div>
</template>

<script>
// 导航栏组件
import NavigationBar from '@/components/common/navigationBar'
// 关于
import AboutFeasts from '@/components/common/aboutFeasts'
// 版权组件
import Copyright from '@/components/common/copyright'
// 返回顶部组件
import BackToTop from '@/components/common/backToTop.vue'

export default {
  name: 'historyPeople',
  components: {
    NavigationBar,
    AboutFeasts,
    Copyright,
    BackToTop
  }
}
</script>

<style lang="less" scoped>
.wu1 {
  width: 100%;
  height: 100vh;
  background-color: #777;
}
.msk {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: #000;
  opacity: 0.2;
}
</style>
