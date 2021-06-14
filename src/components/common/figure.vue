<template>
  <!-- 人物组件 -->
  <div class="figure">
    <h1>
      {{ TyperObj.output }}
      <span class="easy-typed-cursor">|</span>
    </h1>

    <div class="figureContainer">
      <el-row :gutter="20">
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
        </el-col>
        <el-col :md="6" :sm="12" :xs="12">
          <figureItem />
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
  name: 'figure',
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
    const type = new EasyTyper(
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
    return { TyperObj }
  },
  components: {
    figureItem
  }
}
</script>

<style lang="less" scoped>
.figure {
  padding: 3rem 0;
  background: linear-gradient(75deg, #fd614a 10%, #fd844a);
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    font-size: 2.8125rem;
    height: 3.75rem;
    letter-spacing: .5rem;
    
  }
  .figureContainer {
    padding: 3rem 0.9375rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

</style>
