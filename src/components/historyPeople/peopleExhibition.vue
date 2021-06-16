<template>
  <Parallax
    :title="title"
    :description="description"
    :bg="background"
  ></Parallax>
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
        description: `屈原是战国时代的楚国人,二十二岁时,就已官居左徒、三板大夫,辅助楚怀王.
        其时楚怀王受到奸臣的进谗,没有接受屈原关于联齐抗秦的主张,被说客张仪骗到秦国软禁起来,逼他割地献城,后因忧虑成疾,不久便死于秦国.
        屈原知道后悲愤欲绝,上书请求顷襄王为怀王报仇.但顷襄王窕宠信奸佞,不思振复,将屈原削职放逐江南,其后楚国被秦国攻陷,亡在旦夕.
        屈原救国的愿望破灭了,在极度忧愤悲恸的心境下,于公元前278年(屈原六十二岁时)农历五月五日纵路投入波涛汹涌的汨罗江.`,
        background: require('@/assets/image/historyPeople/0.png')
      },
      {
        title: '伍子胥',
        description: `伍子胥名员,楚国人,父兄均为楚王所杀,后来伍子胥弃暗投明,奔向吴国,助吴伐楚,五战而入楚都郢城.
        当时楚平王已死,伍子胥掘墓鞭尸三百,以报杀父兄之仇.吴王阖庐死后,其子夫差继位,吴军士气高昂,百战百胜,越国大败,越王勾践请和,夫差许之.
        伍子胥建议,应彻底消灭越国,夫差不听,吴国大宰,受越国贿赂,谗言陷害伍子胥,夫差信之,赐伍子胥宝剑,伍子胥以此死.
        伍子胥本为忠良,视死如归,在死前对邻舍人说：“我死后,将我眼睛挖出悬挂在吴京之东门上,以看越国军队入城灭吴.”
        便自刎而死,夫差闻言大怒,令取伍子胥之尸体装在皮革里于五月五日投入大江,因此相传端午节亦为纪念伍子胥之日.`,
        background: require('@/assets/image/historyPeople/1.png')
      },
      {
        title: '曹娥',
        description: `曹娥是东汉上虞人,父亲溺于江中,数日不见尸体,当时孝女曹娥年仅十四岁,昼夜沿江号哭.
        过了十七天,在五月五日也投江,五日后抱出父尸.就此传为神话,继而相传至县府知事,令度尚为之立碑,让他的弟子作辞颂扬.
        孝女曹娥之墓,在今浙江绍兴,后传曹娥碑为晋王义所书.后人为纪念曹娥的孝节,在曹娥投江之处兴建曹娥庙,她所居住的村镇改名为曹娥镇,曹娥殉父之处定名为曹娥江.`,
        background: require('@/assets/image/historyPeople/2.png')
      },
      {
        title: '秋瑾',
        description: `秋瑾是六月五日殉国,后人为敬仰其诗,复哀其忠勇事迹,乃与诗人节合并举行纪念,而诗人节亦因纪念爱国诗人屈原而定为端午节.
        秋瑾字睿卿竞雄,号鉴湖女侠,小字玉姑,浙江绍兴人,幼年擅长诗、词、歌、赋,且喜骑马击剑,有花木兰、秦良玉在世之称.
        28岁时参加革命,影响极大,预谋起义,开会时为清兵所捕,不屈,于光绪三十三年六月五日在绍兴轩亨口英勇就义.`,
        background: require('@/assets/image/historyPeople/3.jpg')
      }
    ]

    let currentData = data[id]

    console.log(currentData)

    return {
      title: currentData.title,
      description: currentData.description,
      background: currentData.background,
      portrait: currentData.portrait
    }
  }
}
</script>

<style lang="less" scoped>
.description {
  letter-spacing: 0.1rem;
  line-height: 1.5;

  font-size: 1.5rem;
  color: var(--navSecondaryColor);
}
</style>