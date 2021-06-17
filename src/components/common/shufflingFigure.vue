<template>
  <!-- 轮播图组件 -->
  <div class="shufflingFigure" :style="{ height: isScale }">
    <!-- 展示4张图，但是要5张做无缝 -->
    <el-image
      v-for="(item, i) in figureList"
      :key="i"
      class="figureBg"
      :class="{ active: i == activeIndex }"
      :src="figureList[i].url"
      fit="cover"
    >
    </el-image>

    <ul class="point">
      <!-- li 要减掉一个 -->
      <li
        class="point"
        v-for="(item, i) in figureList.slice(0, -1)"
        :key="i"
        :class="{ active: i == activeIndex }"
        @click="changeActiveIndex(i)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
export default {
  name: 'shufflingFigure',
  props: {
    figureList: Array
  },
  setup(props: any) {
    let activeIndex = ref(0)
    let figureList = [
      {
        url: require('@/assets/image/ShufflingFigure1.jpg')
      },
      {
        url: require('@/assets/image/ShufflingFigure2.jpg')
      },
      {
        url: require('@/assets/image/ShufflingFigure3.jpg')
      },
      {
        url: require('@/assets/image/ShufflingFigure4.jpg')
      },
      {
        url: require('@/assets/image/ShufflingFigure4.jpg')
      }
    ]
    let { documentElement, body } = document
    let scrollTop = ref(0)
    let isScale = ref('100vh')
    const showBtn = () => {
      scrollTop.value =
        window.pageYOffset || documentElement.scrollTop || body.scrollTop
      if (scrollTop.value > 0) {
        isScale.value = '70vh'
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', showBtn, true)
    })
    // 轮播函数
    const figureLoop = () => {
      ++activeIndex.value
      if (activeIndex.value + 1 === figureList.length) {
        activeIndex.value = 0
      }
      console.log(activeIndex.value)
    }
    // 定时器
    let figuretTime = setInterval(figureLoop, 5000)

    // 改变索引函数
    const changeActiveIndex = (index: any) => {
      // 清除定时器
      clearInterval(figuretTime)
      // 改变索引
      activeIndex.value = index
      // 重新启动定时器
      figuretTime = setInterval(figureLoop, 5000)
    }

    return { figureList, activeIndex, changeActiveIndex, isScale }
  }
}
</script>

<style lang="less" scoped>
.shufflingFigure {
  height: 100vh;
  position: relative;
  background: no-repeat cover;
  transition: all 0.2s;

  overflow: hidden;
  .figureBg {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-property: opacity, transform;
    transition-duration: 1s, 3s;
    opacity: 0;
    transform: scale(1.2);
  }
  .active.figureBg {
    opacity: 1;
    transform: scale(1);
  }

  ul.point {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 10px;
    .point {
      cursor: pointer;
      margin: 0 5px;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      opacity: 0.8;
      transition: all 0.2s;
    }
    .active {
      width: 30px;
      border-radius: 5px;
      background-color: var(--activeLink);
      opacity: 1;
    }
    .point:hover {
      background-color: var(--activeLink);
      opacity: 1;
    }
  }
}
</style>
