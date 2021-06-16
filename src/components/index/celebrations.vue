<template>
  <!-- 庆祝活动组件 -->
  <div class="clebration">
    <div class="clebrationBox">
      <div class="clebrationContainer">
        <el-row :gutter="20">
          <el-col :md="12">
            <div class="clebrationDetail">
              <h2>端午节</h2>
              <p>
                农历五月初五，俗称“端午节”是中国民间的传统节日。。初五可以称为端五。从史籍上看，“端午”二字最早见于晋人周处《风土记》：“仲夏端午，烹鹜角黍”。端午节是我国汉族人民的传统节日。这一天必不可少的活动逐渐演变为：吃粽子，赛龙舟，挂菖蒲、艾叶，薰苍术、白芷，喝雄黄酒。吃粽子和赛龙舟，是为了纪念屈原，所以解放后曾把端午节定名为“诗人节”，以纪念屈原。至于挂菖蒲、艾叶，薰苍术、白芷，喝雄黄酒，则据说是为了压邪。过端午节，是中国人二千多年来的传统习惯，由于地域广大，民族众多，加上许多故事传说，于是不仅产生了众多相异的节名，各地也有着不尽相同的习俗。端午节从2008年起为国家法定节假日。
              </p>
            </div>
          </el-col>
          <el-col :md="12" class="flexCenter">
            <div class="clebrationImg">
              <el-image
                fit="cover"
                style="height:100%"
                :src="require('@/assets/image/clebrationImg1.jpg')"
              >
              </el-image>
            </div>
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
  padding: 48px 0;
  background-color: var(--bgc);
  .clebrationBox {
    padding: 48px 0;
    .clebrationContainer {
      max-width: 1400px;
      padding: 0 30px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      div.clebrationDetail {
        h2 {
          font-size: 2.8125rem;
          color: var(--mainColor);
          margin-bottom: 16px;
        }

        p {
          text-indent: 2em;
          font-size: 17px;
          color: var(--navSecondaryColor);
          line-height: 28px;
        }
        margin-bottom: 20px;
      }
      .clebrationImg {
        width: 100%;
        height: 80%;
        overflow: hidden;
        cursor: pointer;
        .el-image {
          transition: all 0.4s ease-in-out;
        }
      }
      .clebrationImg:hover .el-image {
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
