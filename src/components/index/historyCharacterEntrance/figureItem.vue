<template>
  <!-- 特性组件Item -->

  <div class="figure-body">
    <div class="figure-images flexCenter">
      <div class="team-img">
        <img :src="portrait" alt="" class="radius-image"/>
      </div>
    </div>
    <div class="figure-info">
      <router-link :to="link" class="team-title">{{ name }}</router-link>
      <div class="team-details">
        <div class="socials">
          <el-tag type="success" class="tags" v-for="item of tags" :key="item">
            {{ item }}
          </el-tag>
        </div>
        <el-button type="success" plain round>了解详情</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'figureItem',
  props: {
    portrait: String,
    name: String,
    link: String,
    tags: Array
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.figure-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .figure-images.flexCenter {
    .team-img {
      height: 14.25rem;
      width: 14.25rem;
      border-radius: 50%;
      overflow: hidden;
      border: 7px solid #fff;
      cursor: pointer;
      transition: all 0.5s;

      img.radius-image {
        object-fit: cover;
      }
    }
  }
  .figure-images:hover .team-img {
    transform: rotateY(360deg);
  }
  .figure-info {
    text-align: center;
    .team-title {
      color: #fff;
      font-size: 26px;
      margin: 1.875rem 0 0.9375rem;
      display: block;
      transition: all 0.2s;
    }
    .team-title:hover {
      color: var(--activeLink);
    }

    .team-details {
      .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.25rem;

        .tags {
          margin: 0 0.3125rem;
          cursor: pointer;
        }
      }
      a:hover {
        color: #fff;
        background-color: #000;
      }
    }
  }
}
</style>
