<template>
  <!-- 端午习俗 -->
  <Parallax :title="title" :description="description" :bg="img">
    <template #other>
      <el-button class="learn-more" type="success" @click="$router.push(`/custom`)" round> 了解更多 </el-button>
    </template>
  </Parallax>
</template>

<script lang="ts">
import Parallax from '@/components/common/parallax.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'custom',
  components: {
    Parallax
  },
  setup() {
    let title = ref('端午风俗知多少')
    let description = ref(
      '我国民间过端午节是较为隆重的，庆祝的活动也是各种各样。你知道的端午节习俗有哪些？一起了解一下吧。'
    )

    let img = require('@/assets/image/indexCustom1.jpg')

    return {
      title,
      description,
      img
    }
  }
}
</script>

<style lang="less" scoped>
.learn-more {
  margin: 3rem 0 0;
  transition: all 0.2s;
  &:hover {
    background: #fd614a;
    border: 1px solid #fd614a;
  }
}
</style>
