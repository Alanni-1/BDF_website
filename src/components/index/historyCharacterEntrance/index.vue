<template>
  <!-- 人物组件 -->
  <div class="figure">
    <h1>
      {{ TyperObj.output }}
      <span class="easy-typed-cursor">|</span>
    </h1>

    <div class="figureContainer">
      <el-row :gutter="20">
        <el-col :md="6" :sm="12" :xs="12" v-for="item of data" :key="item">
          <figureItem
            :portrait="item.portrait"
            :name="item.name"
            :link="item.link"
            :tags="item.tags"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import figureItem from './figureItem.vue'
// 导入打字机特效
import EasyTyper from 'easy-typer-js'
import { reactive } from 'vue'
export default {
  name: 'historyCharacterEntrance',
  setup() {
    let TyperObj = reactive({
      output: '',
      isEnd: false,
      speed: 200,
      singleBack: false,
      sleep: 1000,
      type: 'rollback',
      backSpeed: 100,
      sentencePause: false
    })
    new EasyTyper(
      TyperObj,
      [],
      (instance: any) => {
        // 回调函数 如果这里使用了递归调用会一直循环打印，需要在外部触发停止
        // 此回调用于获取新的数据然后重新输出
        instance.input = [
          '来时三月春犹在',
          '到日端阳节又临',
          '珍重主人意勤腆',
          '满槃角黍细包金'
        ]
        instance.play()
      },
      function() {}
    )

    const data = [
      {
        portrait: require('@/assets/image/index/people_0.jpg'),
        name: '屈原',
        tags: ['诗人', '政治家'],
        link: '/people/0'
      },
      {
        portrait: require('@/assets/image/index/people_1.jpg'),
        name: '伍子胥',
        tags: ['大夫', '军事家'],
        link: '/people/1'
      },
      {
        portrait: require('@/assets/image/index/people_2.jpg'),
        name: '曹娥',
        tags: ['孝女'],
        link: '/people/2'
      },
      {
        portrait: require('@/assets/image/index/people_3.png'),
        name: '秋瑾',
        tags: ['女权运动家', '民主革命家'],
        link: '/people/3'
      }
    ]

    return { TyperObj, data }
  },
  components: {
    figureItem
  }
}
</script>

<style lang="less" scoped>
.figure {
  padding: 3rem 0;

  background-image: linear-gradient(120deg, var(--activeLink) 0%, #b5f184 80%);
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    font-size: 2.8125rem;
    height: 3.75rem;
    letter-spacing: 0.5rem;
  }
  .figureContainer {
    padding: 3rem 0.9375rem 0;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
