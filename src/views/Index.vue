<template>
  <div>
    <div class="header">
      <!-- 导航栏 -->
      <NavigationBar />
      123123
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
// 导航栏组件
import NavigationBar from '@/components/common/navigationBar'
export default {
  name: 'index',
  components: {
    NavigationBar,
  },
}
</script>

<style lang="less" scoped></style>
