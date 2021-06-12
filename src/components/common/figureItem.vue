<template>
  <!-- 特性组件Item -->

  <div class="figure-body">
    <div class="figure-images flexCenter">
      <div class="team-img">
        <img
          src="https://pic2.zhimg.com/80/v2-c0984f24d1410726c71576e3c45c7453_720w.jpg?source=1940ef5c"
          alt=""
          class="radius-image"
        />
      </div>
    </div>
    <div class="figure-info">
      <a href="#url" class="team-title">Lyn Victor</a>
      <div class="team-details">
        <div class="socials">
          <a href="#url">
            <i class="iconfont icon-taiyang"></i>
          </a>
          <a href="#url">
            <i class="iconfont icon-taiyang"></i>
          </a>
          <a href="#url">
            <i class="iconfont icon-taiyang"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'figureItem',
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
      }
    }
  }
  .figure-images:hover .team-img {
    transform: rotateY(360deg);
  }
  .figure-info {
    text-align: center;
    a.team-title {
      color: #fff;
      font-size: 26px;
      margin: 1.875rem 0 0.9375rem;
      display: block;
      transition: all 0.2s;
    }
    a:hover {
      color: #000;
    }

    .team-details {
      .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          color: #222;
          font-size: 16px;
          display: block;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          line-height: 36px;
          text-align: center;
          transition: all 0.3s ease 0s;
          background: #fff;
          margin: 0 5px;
          i.iconfont.icon-taiyang {
            font-weight: 700;
          }
        }
        a:hover {
          color: #fff;
          background-color: #000;
        }
      }
    }
  }
}
</style>
