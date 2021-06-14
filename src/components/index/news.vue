<template>
  <BaseLayout>
    <template #title>
      <defaultTitle>粽要新闻</defaultTitle>
    </template>
    <template #content>
      <div class="warp">
        <el-row :gutter="30">
          <el-col :md="8" :sm="12" :xs="24" v-for="item of lists" :key="item">
            <el-card class="item" :body-style="{ padding: '0' }" shadow="hover">
              <div class="item-img">
                <img :src="item.img" />
              </div>
              <div class="item-body">
                <el-tag class="item-tag" v-for="tag of item.tags" :key="tag">{{
                  tag
                }}</el-tag>
                <p>{{ item.title }}</p>

                <div class="item-author">
                  <img class="author-img" :src="item.author.avatar" />

                  <div class="author-info">
                    <h3 class="name">{{ item.author.name }}</h3>
                    <span class="time">{{ item.author.time }}</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/common/baseLayout'
import defaultTitle from '@/components/common/defaultTitle.vue'

export default {
  name: 'p1',
  components: {
    BaseLayout,
    defaultTitle
  },
  setup() {
    const lists = [
      {
        img: require('@/assets/image/news1.jpg'),
        tags: ['美食', '面条'],
        title: '不止有粽子 端午还有这些必上美食 ',
        author: {
          name: '新华社快报',
          time: '2021年6月10日',
          avatar: require('@/assets/image/newsAvatar1.jpg')
        }
      },
      {
        img: require('@/assets/image/news2.jpg'),
        tags: ['习俗', '节日', '端午节'],
        title: '民俗迎端午：柳江区进德镇泗浪村红花屯',
        author: {
          name: '百度新闻',
          time: '2021年6月13日',
          avatar: require('@/assets/image/newsAvatar2.jpg')
        }
      },
      {
        img: require('@/assets/image/news3.jpg'),
        tags: ['统计', '人们'],
        title: '端午假期全国共接待国内游客4880.9万人次',
        author: {
          name: '中国日报',
          time: '2021年6月14日',
          avatar: require('@/assets/image/newsAvatar3.jpg')
        }
      }
    ]

    return {
      lists
    }
  }
}
</script>

<style lang="less" scoped>
div.warp {
  padding: 0 2rem;
  .item {
    margin-bottom: 2rem;
    cursor: pointer;
    border-radius: 15px;

    .item-img {
      display: block;
      width: 100%;
      height: 20rem;

      overflow: hidden;

      &:hover img {
        transform: scale(1.2);
      }
      img {
        object-fit: cover;
        transition: all 0.4s ease-in-out;
      }
    }

    .item-body {
      padding: 1rem;

      p {
        margin: 1rem 0;

        font-size: 1.2rem;
      }

      span.item-tag {
        margin-right: 0.5rem;
      }

      .item-author {
        display: grid;
        grid-template-columns: 1fr 2fr;

        padding: 0.5rem 0.5rem;

        .author-img {
          width: 4.5rem;
          height: 4.5rem;

          border-radius: 50%;

          object-fit: cover;
        }

        .author-info {
          padding: 0.5rem 0;
          h3.name {
            margin-bottom: 0.5rem;
          }

          span.time {
            color: var(--navSecondaryColor);
          }
        }
      }
    }
  }
}
</style>
