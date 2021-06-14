<template>
  <div class="main">
    <people-exhibition :id="$route.params.id" />
  </div>
</template>

<script lang="ts">
import PeopleExhibition from '@/components/historyPeople/peopleExhibition.vue'

export default {
  name: 'historyPeople',
  components: { PeopleExhibition }
}
</script>

<style lang="less" scoped>
</style>
