<template>
  <div>
    <div class="header">
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
      <HistoryCharacterEntrance />
      <P2 />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

// 特性分类组件
import Features from '@/components/index/features'
// 庆祝活动组件
import Celebrations from '@/components/index/celebrations.vue'
// 历史人物入口组件
import HistoryCharacterEntrance from '@/components/index/historyCharacterEntrance'

// 新闻组件
import News from '@/components/index/news'

import P2 from '@/components/index/p2'

// 习俗入口组件
import CustomEntrance from '@/components/index/customEntrance'

export default {
  name: 'index',
  components: {
    Features,
    Celebrations,
    HistoryCharacterEntrance,
    News,
    P2,
    CustomEntrance
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
