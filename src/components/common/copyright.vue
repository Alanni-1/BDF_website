<template>
  <!-- 版权的组件 -->
  <div class="copyright">
    <el-row type="flex" justify="space-between">
      <el-col class="copyright-info" :md="12" :sm="24">
        <p>© 2021 Happy Events. All rights reserved. Design by W3Layouts</p>
      </el-col>
      <el-col class="copyright-contact" :md="6" :sm="24">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">1</a></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'copyright',
  setup() {
    return {}
  }
}
</script>

<style lang='less' scoped>
.copyright {
  padding: 1rem 3rem;

  color: var(--maanColor);

  @media (max-width: 992px) {
    & > div {
      flex-direction: column-reverse;
    }
  }

  div.copyright-info {
    line-height: 2;

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

        background-color: rgba(253, 97, 74, 0.11);
        border-radius: 50%;

        cursor: pointer;

        a {
          text-decoration: none;
          color: var(--mainColor);
        }
      }
    }
  }
}
</style>