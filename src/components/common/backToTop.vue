<template>
  <div class="back-to-top">
    <el-button @click="btnClick" v-show="scrollTop">
      <i class="iconfont icon-fanhuidingbu"></i>
    </el-button>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
export default {
  name: 'backToTop',
  setup() {
    let { documentElement, body } = document

    let scrollTop = ref(0)

    const showBtn = () => {
      scrollTop.value =
        window.pageYOffset || documentElement.scrollTop || body.scrollTop
    }

    onMounted(() => {
      window.addEventListener('scroll', showBtn, true)
    })

    // 返回顶部函数
    const btnClick = () => {
      let currentOsTop = 0
      var timer = setInterval(function () {
        let osTop = documentElement.scrollTop || body.scrollTop

        if (currentOsTop != 0 && osTop - currentOsTop > 5) {
          clearInterval(timer)
          return false
        }

        currentOsTop = osTop

        let ispeed = Math.floor(-osTop / 5)

        documentElement.scrollTop = body.scrollTop = osTop + ispeed

        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    }

    return {
      btnClick,
      scrollTop
    }
  }
}
</script>

<style lang="less" scoped>
.back-to-top {
  position: fixed;

  right: 2rem;
  bottom: 5rem;

  z-index: 999;

  button {
    padding: 12px;

    color: #fff;

    background: var(--activeLink);
    border-color: var(--activeLink);
  }
}
</style>