<template>
  <Parallax :title="title" :description="description" :img="img">
  </Parallax>
  <BaseLayout>
    <template #title> 人物描述 </template>
    <template #content>
      <div class="description">
        {{ description }}
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import Parallax from '@/components/common/parallax.vue'
import BaseLayout from '@/components/common/baseLayout.vue'

export default {
  name: 'peopleExhibition',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Parallax,
    BaseLayout
  },
  setup({ id }: any) {
    let data: any = [
      {
        title: '屈原',
        description: `屈原是战国du时代的楚国人,二十二岁时,就已官居左zhi徒、三板大夫,辅助楚怀王.其时楚怀王受到dao奸臣的进谗,没有接受屈原关于联齐抗秦的主张,被说客张仪骗到秦国软禁起来,逼他割地献城,后因忧虑成疾,不久便死于秦国.
      屈原知道后悲愤欲绝,上书请求顷襄王为怀王报仇.但顷襄王窕宠信奸佞,不思振复,将屈原削职放逐江南,其后楚国被秦国攻陷,亡在旦夕.屈原救国的愿望破灭了,在极度忧愤悲恸的心境下,于公元前278年(屈原六十二岁时)
      农历五月五日纵路投入波涛汹涌的汨罗江.`,
        img: require('@/assets/image/5d.jpg')
      },
      {
        title: '屈原1',
        description: '11',
        img: '21212'
      },
      {
        title: '屈原2',
        description: '11',
        img: '21212'
      }
    ]

    let currentData = data[id]

    console.log(currentData)

    return {
      title: currentData.title,
      description: currentData.description,
      img: currentData.img
    }
  }
}
</script>

<style lang="less" scoped>
.description {

  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: var(--navSecondaryColor)
}
</style>