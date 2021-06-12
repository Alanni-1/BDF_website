<template>
  <div>
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />

      <!-- 轮播图 -->
      <el-carousel height="100vh" trigger="click" loop arrow="never">
        <el-carousel-item>
          <div class="wu1"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="wu2"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="wu3"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="wu2"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <Features />
      <Celebrations />
      <Figure />
      <!-- 轮播图 -->
      <el-carousel
        type="card"
        height="300px"
        trigger="click"
        loop
        arrow="never"
      >
        <el-carousel-item>
          <div class="wu1"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="wu2"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="wu3"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="wu2"></div>
        </el-carousel-item>
      </el-carousel>
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
// 特性分类组件
import Features from '@/components/common/features.vue'
// 庆祝活动组件
import Celebrations from '@/components/common/celebrations.vue'
// 庆祝活动组件
import Figure from '@/components/common/figure.vue'
import Copyright from '@/components/common/copyright'
import P2 from '@/components/index/p1'

export default {
  name: 'index',
  components: {
    NavigationBar,
    AboutFeasts,
    Features,
    Celebrations,
    Figure,
    Copyright,
    P2
  }
}
</script>

<style lang="less" scoped>
.wu1 {
  width: 100%;
  height: 100vh;
  background-color: #777;
}
.wu2 {
  width: 100%;
  height: 100vh;

  background-color: #888;
}
.wu3 {
  width: 100%;
  height: 100vh;

  background-color: #999;
}
</style>
