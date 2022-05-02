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
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRquestAnimationFrame ||
      function(fn) {
        setTimeout(fn, 15)
      }
      
    const EasingFunctions = {
      linear: function(t) {
        return t
      },
      easeInQuad: function(t) {
        return t * t
      },
      easeOutQuad: function(t) {
        return t * (2 - t)
      },
      easeInOutQuad: function(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      },
      easeInCubic: function(t) {
        return t * t * t
      },
      easeOutCubic: function(t) {
        return --t * t * t + 1
      },
      easeInOutCubic: function(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      },
      easeInQuart: function(t) {
        return t * t * t * t
      },
      easeOutQuart: function(t) {
        return 1 - --t * t * t * t
      },
      easeInOutQuart: function(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
      },
      easeInQuint: function(t) {
        return t * t * t * t * t
      },
      easeOutQuint: function(t) {
        return 1 + --t * t * t * t * t
      },
      easeInOutQuint: function(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
      }
    }

    let position = function(start, end, elapsed, duration) {
      if (elapsed > duration) {
        return end
      }
      return (
        start +
        (end - start) * EasingFunctions.easeInOutQuint(elapsed / duration)
      )
    }

    let smoothScroll = function(el) {
      console.log(position)
      // var el = document.getElementsByClassName('header')[0]
      let duration = 1000
      let clock = Date.now()
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop - el.offsetTop
      let start = scrollTop
      let end = 0
      let step = function() {
        console.log(1)
        var elapsed = Date.now() - clock
        var position_1 = position(start, end, elapsed, duration)
        window.scrollTo(0, position_1)
        if (elapsed > duration) {
        } else {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }

    const btnClick = () => {
      var el = document.getElementsByClassName('header')[0]
      smoothScroll(el)
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
