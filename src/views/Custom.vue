<template>
  <!-- 习俗组件 -->
  <div class="Custom">
    <div class="main">
      <!-- 习俗 -->
      <div class="customItem">
        <!-- 端午习俗 -->
        <Parallax
          :title="parallaxOption.title"
          :description="parallaxOption.description"
          :img="parallaxOption.img"
        >
          <template #other> </template>
        </Parallax>
        <p class="customText">
          “龙舟竞渡”是在战国时代就已有的习俗。战国时期，人们在急鼓声中划刻成龙形的独木舟，做竞渡游戏，以娱神与乐人，此时的龙舟竞渡是祭仪中半宗教性、半娱乐性的节目。在两湖地区，祭屈原与赛龙舟是紧密相关的。可能屈原及曹娥、伍子胥等逝去后，当地人民也曾用魂舟送其灵魂归葬，故有此俗。但赛龙舟除纪念屈原之外，在各地人们还赋予了不同的寓意。
        </p>
        <p class="customText">
          龙船竞渡前，先要请龙、祭神。如广东龙舟，在端午前要从水下起出，祭过在南海神庙中的南海神后，安上龙头、龙尾，再准备竞渡。并且买一对纸制小公鸡置龙船上，认为可保佑船平安。闽、台则往妈祖庙祭拜。有的直接在河边祭龙头，杀鸡滴血于龙头之上，如四川、贵州等个别地区。
        </p>
        <p class="customText">
          赛龙舟前会举行各种祭祀、纪念之仪式，一般都是点香烛，烧纸钱，供以鸡、米、肉、供果、粽子等。如今这些含有迷信色彩朗仪式已很少见，但在过去，人们祭祀龙神庙时气氛很严肃，多祈求农业丰收、风调雨顺、去邪祟、攘灾异、事事如意，也保佑划船平安。用人们的话说，“图个吉利”，表达人们内心良好的愿望。
        </p>
      </div>
      <div class="customItem">
        <!-- 端午习俗 -->
        <Parallax
          :title="parallaxOption.title"
          :description="parallaxOption.description"
          :img="parallaxOption.img"
        >
          <template #other> </template>
        </Parallax>
        <p class="customText">
          “龙舟竞渡”是在战国时代就已有的习俗。战国时期，人们在急鼓声中划刻成龙形的独木舟，做竞渡游戏，以娱神与乐人，此时的龙舟竞渡是祭仪中半宗教性、半娱乐性的节目。在两湖地区，祭屈原与赛龙舟是紧密相关的。可能屈原及曹娥、伍子胥等逝去后，当地人民也曾用魂舟送其灵魂归葬，故有此俗。但赛龙舟除纪念屈原之外，在各地人们还赋予了不同的寓意。
        </p>
        <p class="customText">
          龙船竞渡前，先要请龙、祭神。如广东龙舟，在端午前要从水下起出，祭过在南海神庙中的南海神后，安上龙头、龙尾，再准备竞渡。并且买一对纸制小公鸡置龙船上，认为可保佑船平安。闽、台则往妈祖庙祭拜。有的直接在河边祭龙头，杀鸡滴血于龙头之上，如四川、贵州等个别地区。
        </p>
        <p class="customText">
          赛龙舟前会举行各种祭祀、纪念之仪式，一般都是点香烛，烧纸钱，供以鸡、米、肉、供果、粽子等。如今这些含有迷信色彩朗仪式已很少见，但在过去，人们祭祀龙神庙时气氛很严肃，多祈求农业丰收、风调雨顺、去邪祟、攘灾异、事事如意，也保佑划船平安。用人们的话说，“图个吉利”，表达人们内心良好的愿望。
        </p>
      </div>
      <!-- 分页功能 -->
      <el-pagination class="flexCenter" background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

import CustomEntrance from '@/components/index/customEntrance.vue'
import Parallax from '@/components/common/parallax.vue'
export default {
  name: 'Custom',
  setup() {
    let parallaxOption = {
      description:
        '赛龙舟是中国端午节的习俗之一，也是端午节最重要的节日民俗活动之一，在中国南方地区普遍存在，在北方靠近河湖的城市也有赛龙舟习俗，而大部分是划旱龙舟舞龙船的形式',
      img:
        'http://b1-q.mafengwo.net/s6/M00/F3/8D/wKgB4lOFtDSANFfNAADRXbPDzaA71.jpeg?imageView2%2F2%2Fw%2F2000%2Fh%2F600%2Fq%2F90',
      title: '赛龙舟'
    }
    return { parallaxOption }
  },
  components: {
    CustomEntrance,
    Parallax
  }
}
</script>

<style lang="less" scoped>
.customItem {
  background-color: var(--bgc);
  .customText {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem 1.875rem;
    font-size: 1.25rem;
    text-indent: 2em;
    line-height: 30px;
    color: var(--navSecondaryColor);
  }
}
.el-pagination {
  padding:2.5rem 0;
  background-color: var(--bgc);
}

</style>
