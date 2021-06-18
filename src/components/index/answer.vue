<template>
  <BaseLayout>
    <template #title>
      <defaultTitle>粽情粽意</defaultTitle>
    </template>
    <template #content>
      <div class="warp">
        <el-row>
          <el-col
            class="item-warp"
            :md="12"
            :sm="24"
            v-for="item of data"
            :key="item"
          >
            <el-card class="box-card item" shadow="hover">
              <div class="item-body">
                <div class="img-warp">
                  <img :src="item.userPhotos" />
                </div>
                <div class="item-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.answer.slice(0,50) }} {{item.answer.length > 50 ? '...' : ''}}</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 更多按钮 -->
        <el-row>
          <el-col class="question-warp">
            <el-button
              @click="showNotify"
              class="question-buttom"
              type="success"
              round
            >
              我要提问
            </el-button>
          </el-col>
        </el-row>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/common/baseLayout.vue'
import defaultTitle from '@/components/common/defaultTitle.vue'
import { reactive } from '@vue/reactivity'
import { ElNotification } from 'element-plus'
export default {
  name: 'answer',
  components: {
    BaseLayout,
    defaultTitle
  },
  setup() {
    let data = reactive([
      {
        title: '端午节有什么别称？',
        userPhotos: require('@/assets/image/index/user_photos_1.png'),
        answer:
          '端午节的别称主要有龙舟节、重午节、端阳节、端五节、重五节、当五汛、天中节、夏节、五月节、菖蒲节、浴兰节、女儿节、午日节、地腊节、正阳节、龙日节、粽子节等。'
      },
      {
        title: '哪些国家有过端午节的习俗？',
        userPhotos: require('@/assets/image/index/user_photos_2.png'),
        answer:
          '在日本，端午的习惯是在平安时代以后由中国传入日本的。从明治时代开始，各节日都改为公历日。日本的端午节是公历5月5日。端午节的习俗传到日本之后，被吸收改造成为日本的传统文化。'
      },
      {
        title: '端午节有哪些谚语？',
        userPhotos: require('@/assets/image/index/user_photos_3.png'),
        answer:
          '午时水饮一嘴,较好补药吃三年 。喝了雄黄酒，百病远远丢。未吃端午粽，寒衣不可送；吃了端午粽，还要冻三冻。端午节，天气热；五毒醒，不安宁。'
      },
      {
        title: '第一个粽子是用什么包的？',
        userPhotos: require('@/assets/image/index/user_photos_4.png'),
        answer:
          '据记载，早在春秋时期，用菰叶（茭白叶）包黍米成牛角状，称"角黍"；用竹筒装米密封烤熟，称"筒粽"。东汉末年，以草木灰水浸泡黍米，因水中含碱，用菰叶包黍米成四角形，煮熟，成为广东碱水粽。'
      }
    ])
    // 展示消息
    const showNotify = () => {
      ElNotification({
        title: '提问成功',
        message: '耐心等待回答吧！',
        type: 'success'
      })
    }
    return {
      data,
      showNotify
    }
  }
}
</script>

<style lang="less" scoped>
div.warp {
  div.item-warp {
    padding: 1rem;
    .item {

      cursor: pointer;
      .item-body {
        display: flex;
        justify-content: center;
        align-items: center;

        .img-warp {
          padding: 10px;

          img {
            width: 60px;

            border-radius: 5%;
          }
        }
        .item-content {
          padding: 1rem 0 1rem 2rem;

          h3 {
            margin-bottom: 1rem;

            font-size: 1.5rem;
          }
          h3:hover {
            color: var(--activeLink);
          }

          p {
            line-height: 28px;
          }
        }
      }
    }
  }

  .question-warp {
    display: flex;
    justify-content: center;

    .question-buttom {
      margin: 3rem 0 0;
      transition: all 0.2s;

      &:hover {
        background: #fd614a;
        border: 1px solid #fd614a;
      }
    }
  }
}
</style>
