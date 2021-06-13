<template>
  <!-- 特性组件Item -->

  <div class="feature-body">
    <div class="feature-images flexCenter">
      <i class="iconfont icon-Shapecopy"></i>
    </div>
    <div class="feature-info">
      <a href="#">
        <h3 class="feature-titel flexCenter">
          {{ featuresObj.title }}
        </h3>
      </a>
      <p class="feature-text">
        {{ featuresObj.text }}
      </p>
      <a href="#" class="feature-moreText flexCenter">了解详情</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'featuresItem',
  props: {
    title: String,
    text: String
  },
  setup(props: any) {
    let featuresObj = {
      title: props.title,
      text: props.text,

    }
    return {featuresObj}
  }
}
</script>

<style lang="less" scoped>
div.feature-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 256px;
  div.feature-images {
    i.iconfont.icon-Shapecopy {
      font-size: 4.375rem;
      color: #fd614a;
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
        color: #fd614a;
      }
    }

    p.feature-text {
      color: var(--navSecondaryColor);
      margin: 15px;
      line-height: 28px;
      text-align: center;
      font-size: 17px;
    }

    a.feature-moreText {
      color: #fd614a;
      font-weight: 700;
      margin: 24px;
      font-size: 15px;
      transition: all 0.2s;
    }
    a:hover {
      color: var(--mainColor);
    }
  }
}
</style>
