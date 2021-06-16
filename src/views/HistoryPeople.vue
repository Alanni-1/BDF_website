<template>
  <div class="main">
    <people-exhibition :id="$route.params.id" />
  </div>
</template>

<script lang="ts">
import PeopleExhibition from '@/components/historyPeople/peopleExhibition.vue'

export default {
  name: 'historyPeople',
  components: { PeopleExhibition },
  setup() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    return {}
  }
}
</script>

<style lang="less" scoped></style>
