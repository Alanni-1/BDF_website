<template>
  <!-- 导航栏组件 -->
  <div class="navBox" :style="{ backgroundColor: boxColor }">
    <el-row type="flex" justify="space-between">
      <el-col :lg="11" :md="11" :sm="12" :xs="12">
        <!-- 左边布局 -->
        <div class="navLeft">
          <div class="logo"></div>
          <h1 class="text">浓情端午，放粽一下!</h1>
        </div>
      </el-col>
      <el-col :lg="13" :md="13" :sm="12" :xs="12">
        <!-- 右边布局 -->
        <div class="navRight">
          <div class="navItem">
            <a href="#">首页</a>
          </div>
          <div class="navItem">
            <a href="#">关于我们</a>
          </div>
          <div class="navItem">
            <!-- 搜索框 -->
            <div class="searchInput">
              <input type="text" placeholder="请输入内容" />
              <i class="el-icon-search"></i>
            </div>
          </div>
          <div class="navItem">
            <i class="el-icon-orange"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, ref } from 'vue'
export default {
  name: 'navigationBar',
  setup() {
    // 导航条背景
    let boxColor = ref('')

    // 监听滚动
    window.onscroll = () => {
      console.log(document.documentElement.scrollTop)

      // 判断滚动
      if (document.documentElement.scrollTop != 0) {
        boxColor.value = '#DDF3E6'
      } else {
        boxColor.value = ''
      }
    }

    return { boxColor }
  }
}
</script>

<style lang="less" scoped>
.navBox {
  // background-color: pink;
  width: 100%;
  padding: 0 1.25rem;
  transition: all 0.2s;
  position: fixed;
  div.navLeft {
    height: 5.25rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div.logo {
      width: 6.25rem;
      height: 100%;
      background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
      background-size: cover;
      margin-right: 1.25rem;
    }
    div.text {
    }
  }
  div.navRight {
    height: 5.25rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div.navItem {
      padding: 0 0.5rem;
      a {
        padding: 0.375rem;
        font-size: 0.9375rem;
        color: #666;
        font-weight: 700;
      }
      i {
        cursor: pointer;
      }
      div.searchInput {
        position: relative;
        input {
          outline: none;
          font-size: 15px;
          background: transparent;
          padding: 0.4999rem 2.1874rem 0.4999rem 0.6251rem;
          width: 18.75rem;
          border-radius: 1.8749rem;
          border: 2px solid rgb(255 255 255 / 66%);
        }
        i {
          position: absolute;
          right: 8%;
          bottom: 50%;
          transform: translateY(50%);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
