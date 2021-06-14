<template>
  <!-- 端午习俗 -->
  <div class="hot-activity-warp">
    <div class="hot-activity">
      <div class="info-warp">
        <h1 class="title">端午风俗知多少</h1>
        <p class="content">
          <!-- 打字特效 -->
          {{ TyperObj.output }}
          <span class="easy-typed-cursor">|</span>
        </p>
        <el-button class="learn-more" type="primary" round>
          了解更多
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// 导入打字机特效
import EasyTyper from 'easy-typer-js'
import { reactive } from 'vue'

export default {
  name: 'hotActivity',
  setup() {
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
    const type = new EasyTyper(
      TyperObj,
      [],
      (instance: any) => {
        // 回调函数 如果这里使用了递归调用会一直循环打印，需要在外部触发停止
        // 此回调用于获取新的数据然后重新输出
        instance.input = [
          '我国民间过端午节是较为隆重的，庆祝的活动也是各种各样。你知道的端午节习俗有哪些？一起了解一下吧。'
        ]
        instance.play()
      },
      function() {}
    )
    return { TyperObj }
  }
}
</script>

<style lang="less" scoped>
.hot-activity-warp {
  @height: 30rem;

  position: relative;

  width: 100%;
  height: @height;

  z-index: 1;

  background: url("http://demo.vhostgo.com/3165/advs/pics/20130410/1365577295.jpg") no-repeat;
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

  .hot-activity {
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
        margin: 1rem;

        font-size: 20px;
      }

      .learn-more {
        margin: 3rem 0;

        background: #fd614a;
        border: none;
        transition: all 0.2s;
        &:hover {
          background-color: var(--activeLink);
          color: #000000;
        }
      }
    }
  }
}
</style>
