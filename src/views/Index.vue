<template>
  <div>
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />
      <div class="box"></div>
    </div>
    <div class="content">
      <P2 />
    </div>
    <AboutFeasts />
    <Copyright />
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
// 导航栏组件
import NavigationBar from '@/components/common/navigationBar'
import AboutFeasts from '@/components/common/aboutFeasts'
import Copyright from '@/components/common/copyright'
import P2 from '@/components/index/p1'

export default {
  name: 'index',
  components: {
    NavigationBar,
    AboutFeasts,
    Copyright,
    P2
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 400px;
  // width: 100vw;
  width: 100%;
  background-color: pink;
}
</style>
