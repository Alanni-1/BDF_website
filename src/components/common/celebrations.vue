<template>
  <!-- 庆祝活动组件 -->
  <div class="clebration">
    <div class="clebrationBox">
      <div class="clebrationContainer">
        <el-row :gutter="20">
          <el-col :md="12">
            <div class="clebrationDetail">
              <h2>AmazingCelebrations</h2>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Non quae, fugiat consequatur
                voluptatem nihil ad. Lorem ipsum dolor sit amet
              </p>
            </div>
          </el-col>
          <el-col :md="12">
            <el-row :gutter="10">
              <el-col :sm="12">
                <div class="clebrationImg">
                  <img
                    src="https://w.wallhaven.cc/full/l3/wallhaven-l3zmwy.jpg"
                    alt=""
                  />
                </div>
              </el-col>
              <el-col :sm="12">
                <div class="clebrationImg">
                  <img
                    src="https://w.wallhaven.cc/full/l3/wallhaven-l3zmwy.jpg"
                    alt=""
                  />
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'celebrations',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
div.clebration {
   border-top: 1px solid #e6e6e6;
  padding: 48px 0;
  background-color: var(--bgc);
  .clebrationBox {
    padding: 48px 0;
    .clebrationContainer {
      max-width: 1200px;
      padding: 0 30px;
      margin: 0 auto;
      div.clebrationDetail {
        h2 {
          font-size: 2.8125rem;
          color: var(--mainColor);
          margin-bottom: 16px;
        }

        p {
          font-size: 17px;
          color: var(--navSecondaryColor);
          line-height: 28px;
        }
        margin-bottom: 20px;
      }
      .clebrationImg {
        width: 100%;
        height: 185px;
        margin-bottom: 16px;
        overflow: hidden;
        cursor: pointer;
        img {
          transition: all .4s ease-in-out;
        }
      }
      .clebrationImg:hover img {
      transform: scale(1.2);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .clebrationContainer {
    max-width: 720px !important;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  .clebrationContainer {
    max-width: 540px !important;
  }
}
@media screen and (min-width: 992px) and(max-width:1023px) {
  .clebrationContainer {
    max-width: 1000px !important;
  }
}
@media screen and (min-width: 1024px) {
  .clebrationContainer {
    max-width: 1200px !important;
  }
}
</style>
