<template>
  <div class="main">
    <source-exhibition :id="$route.params.id" />
  </div>
</template>

<script lang="ts">
import SourceExhibition from '@/components/holidaySource/sourceExhibition.vue'

export default {
  name: 'holidaySource',
  components: { SourceExhibition },
  setup() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    return {}
  }
}
</script>

<style lang="less" scoped></style>
