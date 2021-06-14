<template>
  <div>
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />

      <!-- 轮播图 -->
      <el-carousel height="100vh" trigger="click" loop arrow="never">
        <el-carousel-item>
          <el-image
            fit="cover"
            style="height:100%"
            :src="require('@/assets/image/ShufflingFigure1.jpg')"
          ></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            fit="cover"
            style="height:100%"
            :src="require('@/assets/image/ShufflingFigure2.jpg')"
          ></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            fit="cover"
            style="height:100%"
            :src="require('@/assets/image/ShufflingFigure3.jpg')"
          ></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image
            style="height:100%"
            fit="cover"
            :src="require('@/assets/image/ShufflingFigure4.jpg')"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- 遮罩层 -->
      <div class="msk"></div>
    </div>
    <div class="main">
      <Celebrations />
      <HotActivity />
      <Features />
      <!-- 新闻 -->
      <P1 />

      <!-- 历史人物介绍 -->
      <Figure />
      <P2 />
      <!-- 轮播图 -->
      <div>
        <el-carousel
          direction="vertical"
          height="400px"
          trigger="click"
          loop
          arrow="never"
        >
          <el-carousel-item>
            <el-image
              fit="cover"
              style="height:100%"
              :src="require('@/assets/image/ShufflingFigure1.jpg')"
            ></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image
              fit="cover"
              style="height:100%"
              :src="require('@/assets/image/ShufflingFigure2.jpg')"
            ></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image
              fit="cover"
              style="height:100%"
              :src="require('@/assets/image/ShufflingFigure2.jpg')"
            ></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image
              fit="cover"
              style="height:100%"
              :src="require('@/assets/image/ShufflingFigure3.jpg')"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <AboutFeasts />
    <!-- 版权 -->
    <Copyright />
    <!-- 返回顶部 -->
    <BackToTop />
  </div>

  <!-- 回到顶部 -->
  <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap">
  </el-backtop> -->
</template>

<script>
import { ref, reactive } from 'vue'

// 导航栏组件
import NavigationBar from '@/components/common/navigationBar'
// 关于
import AboutFeasts from '@/components/common/aboutFeasts'
// 特性分类组件
import Features from '@/components/common/features.vue'
// 庆祝活动组件
import Celebrations from '@/components/common/celebrations.vue'
// 庆祝活动组件
import Figure from '@/components/common/figure.vue'
import Copyright from '@/components/common/copyright'
import P1 from '@/components/index/p1'
import P2 from '@/components/index/p2'

import HotActivity from '@/components/index/hotActivity'

import BackToTop from '@/components/common/backToTop'

export default {
  name: 'index',
  components: {
    NavigationBar,
    AboutFeasts,
    Features,
    Celebrations,
    Figure,
    Copyright,
    P1,
    P2,
    HotActivity,
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
