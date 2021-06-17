<template>
  <div>
    <video
      :src="require('@/assets/video/duanwu1.mp4')"
      controls="controls"
    >
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
export default {
  name: 'test',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped></style>
