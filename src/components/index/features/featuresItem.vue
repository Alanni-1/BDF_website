<template>
  <!-- 特性组件Item -->

  <div class="feature-body">
    <div
      @click="$router.push(featuresObj.link)"
      class="feature-images flexCenter"
    >
      <el-image :src="featuresObj.img" fit="cover"></el-image>
    </div>
    <div class="feature-info">
      <a href="#">
        <h3
          @click="$router.push(featuresObj.link)"
          class="feature-titel flexCenter"
        >
          {{ featuresObj.title }}
        </h3>
      </a>
      <p class="feature-text">
        {{ featuresObj.text }}
      </p>
      <!-- <a href="#" class="feature-moreText flexCenter">了解详情</a> -->
      <div class="flexCenter">
        <el-button
          @click="$router.push(featuresObj.link)"
          class="feature-moreText"
          plain
          type="success"
        >
          了解详情
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'featuresItem',
  props: {
    title: String,
    text: String,
    img: null,
    link: String
  },
  setup(props: any) {
    let featuresObj = {
      title: props.title,
      text: props.text,
      img: props.img,
      link: props.link
    }
    // console.log(featuresObj.link)

    return { featuresObj }
  }
}
</script>

<style lang="less" scoped>
div.feature-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.875rem 0;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  div.feature-images {
    width: 8.125rem;
    height: 8.125rem;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.6s;
    border: 5px solid #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15), 0 0 6px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    .el-image {
      width: 100%;
      height: 100%;
    }
    &:hover {
      transform: rotate(360deg) scale(1.2);
      // border: 5px solid #ffd700;
    }
  }

  div.feature-info {
    margin-top: 24px;
    a {
      h3.feature-titel {
        color: var(--mainColor);
        font-size: 26px;
        transition: all 0.2s;
      }
      h3:hover {
        color: var(--activeLink);
      }
    }

    p.feature-text {
      color: var(--navSecondaryColor);
      margin: 15px;
      height: 5rem;
      line-height: 28px;
      text-align: center;
      font-size: 17px;
    }
    // a.feature-moreText {
    //   color: var(--activeLink);
    //   font-weight: 700;
    //   margin: 24px;
    //   font-size: 15px;
    //   transition: all 0.2s;
    // }
    // a:hover {
    //   color: var(--mainColor);
    // }
  }
}
</style>
