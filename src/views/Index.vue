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
            :src="require('@/assets/image/ShufflingFigure5.jpg')"
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
      <CustomEntrance />
      <Features />
      <!-- 新闻 -->
      <News />

      <!-- 历史人物介绍 -->
      <Figure />
      <P2 />
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

<script>
import { ref, reactive } from 'vue'

// 导航栏组件
import NavigationBar from '@/components/common/navigationBar'
// 关于
import AboutFeasts from '@/components/common/aboutFeasts'
// 特性分类组件
import Features from '@/components/index/features'
// 庆祝活动组件
import Celebrations from '@/components/index/celebrations.vue'
// 庆祝活动组件
import Figure from '@/components/index/figure'
// 版权组件
import Copyright from '@/components/common/copyright'
// 新闻组件
import News from '@/components/index/news'

import P2 from '@/components/index/p2'

// 习俗入口组件
import CustomEntrance from '@/components/index/customEntrance'
// 返回顶部组件
import BackToTop from '@/components/common/backToTop.vue'

export default {
  name: 'index',
  components: {
    NavigationBar,
    AboutFeasts,
    Features,
    Celebrations,
    Figure,
    Copyright,
    News,
    P2,
    CustomEntrance,
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
