<template>
  <div class="hot-activity-warp">
    <div class="hot-activity">
      <div class="info-warp">
        <h1 class="title">Celebrate With Us!</h1>
        <p class="content">
          Sed ut perspiciatis unde omnis iste natus error sit olupt atem
          accusantium dolo remque lauda ntium, totam rem aperiam.
        </p>
        <el-button class="learn-more" type="primary" round> 更多 </el-button>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotActivity'
}
</script>

<style lang="less" scoped>
.hot-activity-warp {
  @height: 30rem;

  position: relative;

  width: 100%;
  height: @height;

  z-index: 1;

  background: url('~@/assets/image/banner1.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;

  &::before {
    content: '';

    position: absolute;

    width: 100%;
    height: @height;
    z-index: -1;

    background: rgba(0, 0, 0, 0.4);
  }

  .hot-activity {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    padding: 3rem;

    text-align: center;

    .info-warp {
      padding: 0 3rem;

      margin: 0 10rem;
      @media (max-width: 992px) {
        margin: 0;
      }

      color: #fff;

      h1.title {
        margin: 1rem;

        font-size: 3rem;
      }

      p {
        margin: 1rem;

        font-size: 20px;
      }

      .learn-more {
        margin: 3rem 0;

        background: #fd614a;
        border: none;

        &:hover {
          background-color: var(--activeLink);
          color: #000000;
        }
      }
    }
  }
}
</style>