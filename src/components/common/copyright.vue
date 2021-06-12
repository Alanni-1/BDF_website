<template>
  <!-- 版权的组件 -->
  <div class="copyright">
    <el-row type="flex" justify="space-between">
      <el-col class="copyright-info" :md="12">
        <p>© 2021 Happy Events. All rights reserved. Design by W3Layouts</p>
      </el-col>
      <el-col class="copyright-contact" :md="4">
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

<style lang='less'>
.copyright {
  padding: 1rem 3rem;

  color: var(--color1);

  div.copyright-info {
    line-height: 2;
  }

  div.copyright-contact {
    ul {
      display: flex;
      justify-content: space-around;

      list-style: none;

      li {
        width: 30px;
        height: 30px;

        background-color: rgba(253, 97, 74, 0.11);
        border-radius: 50%;

        text-align: center;
        line-height: 2;

        cursor: pointer;

        a {
          text-decoration: none;
          color: var(--color1);
        }
      }
    }
  }
}
</style>