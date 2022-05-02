<template>
  <!-- 版权的组件 -->
  <div class="copyright">
    <el-row type="flex" justify="space-between">
      <el-col class="copyright-info" :md="12" :sm="24">
        <p>
          ©
          2021广东省高校技术高级技工学校-18计算机高技升读-文慧涛123-版权所有
        </p>
      </el-col>
      <el-col class="copyright-contact" :md="6" :sm="24">
        <ul>
          <li>
            <a href="#">
              <i style="color: #333333" class="iconfont icon-github"></i
            ></a>
          </li>
          <li>
            <a href="#">
              <i style="color: #49b7f9" class="iconfont icon-qq"></i
            ></a>
          </li>
          <li>
            <a href="#">
              <i style="color: #63af4b" class="iconfont icon-WeChat"></i
            ></a>
          </li>
          <li>
            <a href="#">
              <i style="color: #d81e06" class="iconfont icon-weibo-copy"></i
            ></a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'copyright',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.copyright {
  padding: 1rem 3rem;

  @media (max-width: 992px) {
    & > div {
      flex-direction: column-reverse;
    }
  }

  div.copyright-info {
    line-height: 2;
    color: #606266;
    p {
      height: 100%;
      display: flex;
      align-items: center;
    }

    @media (max-width: 992px) {
      text-align: center;
    }
  }

  div.copyright-contact {
    ul {
      display: flex;
      justify-content: space-around;

      @media (max-width: 992px) {
        justify-content: center;
      }

      padding: 0.5rem;

      list-style: none;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;

        margin: 0 0.5rem;

        cursor: pointer;

        a {
          text-decoration: none;

          i {
            font-size: 30px;
            color: initial;
          }
        }
      }
    }
  }
}
</style>
