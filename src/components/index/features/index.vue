<template>
  <!-- 历史源于组件 -->
  <div class="features">
    <div class="featuresContainer">
      <defaultTitle>端午的由来</defaultTitle>
      <el-row :gutter="20">
        <el-col :md="6" :sm="12" v-for="item in FeaturesArray" :key="item">
          <FeaturesItem
            :title="item.title"
            :text="item.text"
            :img="item.img"
            :link="item.link"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import FeaturesItem from './featuresItem.vue'
// 导入标题组件
import defaultTitle from '@/components/common/defaultTitle.vue'
export default {
  name: 'features',
  setup() {
    let FeaturesArray = [
      {
        title: '源于纪念屈原',
        text: '据《史记》“屈原贾生列传”记载，屈原，是春秋时期楚怀王的大臣...',
        img: require('@/assets/image/featuresAtavar2.jpg'),
        link: '/holiday/0'
      },
      {
        title: '源于纪念伍子胥',
        text:
          '端午节的第二个传说，在江浙一带流传很广，是纪念春秋时期的伍子胥...',
        img: require('@/assets/image/featuresAtavar4.jpg'),
        link: '/holiday/1'
      },
      {
        title: '源于纪念孝女曹娥',
        text:
          '端午节的第三个传说，是为纪念东汉(公元23--220年)孝女曹娥救父投江...',
        img: require('@/assets/image/featuresAtavar1.jpg'),
        link: '/holiday/2'
      },
      {
        title: '源于古越族图腾祭',
        text: '近代大量出土文物和考古研究证实：长江中下游广大地区，在新石器...',
        img: require('@/assets/image/featuresAtavar3.jpg'),
        link: '/holiday/3'
      }
    ]
    return { FeaturesArray }
  },
  components: {
    FeaturesItem,
    defaultTitle
  }
}
</script>

<style lang="less" scoped>
.features {
  padding: 3rem 0 2rem;
  background-color: var(--bgc);
  opacity: 0.9;
  .featuresContainer {
    padding: 3rem 0.9375rem;
    max-width: 1400px;
    margin: 0 auto;
    .title {
      margin-bottom: 1.875rem;
      text-align: center;
    }
  }
}
</style>
