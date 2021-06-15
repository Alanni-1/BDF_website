<template>
  <div class="parallax-warp" :style="{ backgroundImage: `url(${bg})` }">
    <div class="parallax">
      <div class="info-warp">
        <!-- 标题 -->
        <h1 class="title">{{ title }}</h1>
        <p class="content">
          <!-- 打字特效 -->
          {{ TyperObj.output }}
          <span class="easy-typed-cursor">|</span>
        </p>
        <!-- 自定义 -->
        <div class="other">
          <slot name="other"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// 导入打字机特效
import EasyTyper from 'easy-typer-js'
import { reactive } from 'vue'

export default {
  name: 'parallax',
  props: {
    // 标题
    title: {
      type: String,
      required: true
    },
    // 描述
    description: {
      type: String,
      required: true
    },
    // 背景图片
    bg: {
      type: String
    }
  },
  setup({ description }: any) {
    let TyperObj = reactive({
      output: '',
      isEnd: false,
      speed: 150,
      singleBack: false,
      sleep: 1000,
      type: 'rollback',
      backSpeed: 50,
      sentencePause: false
    })

    // 分割字符串
    if (description.length >= 40) {
      description = description.slice(0, 40)

      // 字符串末尾
      let lastStr = description.slice(
        description.length - 1,
        description.length
      )

      // 判断末尾
      if (lastStr != '？' || lastStr != '。' || lastStr != '！') {
        // 添加省略号Î
        description += '...'
      }
    }

    new EasyTyper(
      TyperObj,
      [],
      (instance: any) => {
        // 回调函数 如果这里使用了递归调用会一直循环打印，需要在外部触发停止
        // 此回调用于获取新的数据然后重新输出
        instance.input = [description]
        instance.play()
      },
      function () {}
    )

    return { TyperObj }
  }
}
</script>

<style lang="less" scoped>
.parallax-warp {
  @height: 30rem;

  position: relative;

  width: 100%;
  height: @height;

  z-index: 1;

  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  &::before {
    content: '';

    position: absolute;

    width: 100%;
    height: @height;
    z-index: -1;

    background: rgba(0, 0, 0, 0.4);
  }

  .parallax {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    padding: 3rem;

    text-align: center;

    .info-warp {
      padding: 0 3rem;

      margin: 0 10rem;
      @media (max-width: 992px) {
        margin: 0;
      }

      color: #fff;

      h1.title {
        margin: 1rem;

        font-size: 3rem;
      }

      p {
        height: 2rem;

        margin: 1rem;

        font-size: 20px;
      }
    }
  }
}
</style>
