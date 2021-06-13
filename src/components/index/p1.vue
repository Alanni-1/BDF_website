<template>
  <BaseLayout>
    <template #title>O u r N e w s & E v e n t s</template>
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
                  <img class="author-img" src="~@/assets/image/5d.jpg" />

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

export default {
  name: 'p1',
  components: {
    BaseLayout
  },
  setup() {
    const lists = [
      {
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        tags: ['Parties'],
        title: 'Sunt in culpa qui officia dese runt mollit anim',
        author: {
          name: 'Isabella ava',
          time: 'Jan 28 2021'
        }
      },
      {
        img: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        tags: ['Celebrations'],
        title: 'Eaque ipsa quae ab illo remos dez inve ntore',
        author: {
          name: 'Charlotte mia',
          time: 'Jan 13, 2021'
        }
      },
      {
        img: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        tags: ['New Year'],
        title: 'Quasi archi tecto bea dicta sunt expl icab',
        author: {
          name: 'Charlotte mia',
          time: 'Jan 06 2021'
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