<template>
  <!-- 导航栏组件 -->
  <div class="navBox" :class="{ navBoxBgc: isShowBgc }">
    <el-row type="flex" justify="space-between">
      <el-col :lg="11" :md="10" :sm="13" :xs="18">
        <!-- 左边布局 -->
        <div class="navLeft">
          <div class="logo"></div>
          <h1 class="text">浓情端午，放粽一下!</h1>
        </div>
      </el-col>
      <el-col :lg="13" :md="14" :sm="11" :xs="4">
        <!-- 右边布局 -->
        <div class="navRight" v-if="!isShowToggle">
          <div class="navItem">
            <a href="#">首页</a>
          </div>
          <div class="navItem">
            <a href="#">关于我们</a>
          </div>
          <div class="navItem">
            <!-- 搜索框 -->
            <div class="searchInput">
              <input type="text" placeholder="请输入你想要输入的内容" />
              <i class="iconfont icon-sousuo"></i>
            </div>
          </div>
          <div class="navItem">
            <i
              class="iconfont"
              :class="isOpenDarkModel ? 'icon-taiyang' : 'icon-yejianmoshi'"
              @click="changeIsOpenDarkModel"
            ></i>
          </div>
        </div>
        <!-- 切换显示按钮 -->
        <div class="navbar-toggler" v-else>
          <div class="navItem">
            <i
              class="iconfont"
              :class="isOpenDarkModel ? 'icon-taiyang' : 'icon-yejianmoshi'"
              @click="changeIsOpenDarkModel"
            ></i>
          </div>
          <div class="navItem">
            <el-button
              @click="toggleList"
              :icon="isShowNavList ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
              size="medium"
            ></el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <transition name="el-zoom-in-top">
      <ul class="navList" v-show="isShowNavList" @click="toggleList">
        <li>首页</li>
        <li>关于我们</li>
        <li>其他节日</li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, ref } from 'vue'
export default {
  name: 'navigationBar',
  setup() {
    // 导航条背景
    let isShowBgc = ref(false),
      isShowToggle = ref(false),
      // 是否展示toggle的list
      isShowNavList = ref(false),
      // 是否开启夜间模式
      isOpenDarkModel = ref(false)

    // 监听滚动
    window.onscroll = () => {
      // 判断滚动
      if (document.documentElement.scrollTop != 0) {
        isShowBgc.value = true
      } else {
        isShowBgc.value = false
      }
    }
    // window尺寸改变
    window.onresize = () => {
      console.log(window.innerWidth)

      if (window.innerWidth <= 900) {
        // 展示切换按钮
        isShowToggle.value = true
      } else {
        // 不展示切换按钮
        isShowToggle.value = false
        // 关闭nav列表
        isShowNavList.value = false
      }
    }
    // onload就判断window尺寸
    if (window.innerWidth <= 900) {
      // 展示切换按钮
      isShowToggle.value = true
    } else {
      // 不展示切换按钮
      isShowToggle.value = false
    }

    // 切换list
    const toggleList = () => {
      isShowNavList.value = !isShowNavList.value
    }
    // 切换夜间/白天模式
    const changeIsOpenDarkModel = () => {
      isOpenDarkModel.value = !isOpenDarkModel.value
      console.log(isOpenDarkModel.value)

      /* 背景色 */
      let bgc = '#fff',
        /* 1级文字颜色 */
        color1 = '#606266',
        /* 2级文字颜色 */
        color2 = '#909399',
        /* 3级文字颜色 */
        color3 = '#C0C4CC'

      // 修改颜色
      if (isOpenDarkModel.value) {
        bgc = '#343a40'
        /* 1级文字颜色 */
        color1 = '#fdfffc'
        /* 2级文字颜色 */
        color2 = '#b7b7b7'
        /* 3级文字颜色 */
        color3 = '#C0C4CC'
      } else {
        bgc = '#fff'
        /* 1级文字颜色 */
        color1 = '#606266'
        /* 2级文字颜色 */
        color2 = '#909399'
        /* 3级文字颜色 */
        color3 = '#C0C4CC'
      }

      //修改CSS中的全局变量
      document.documentElement.style.setProperty('--bgc', bgc)
      document.documentElement.style.setProperty('--color1', color1)
      document.documentElement.style.setProperty('--color2', color2)
      document.documentElement.style.setProperty('--color3', color3)
    }

    return {
      isShowBgc,
      isShowToggle,
      toggleList,
      isShowNavList,
      changeIsOpenDarkModel,
      isOpenDarkModel
    }
  }
}
</script>

<style lang="less" scoped>
.navBoxBgc {
  background-color: var(--bgc);
}
.navBox {
  width: 100%;
  padding: 0 1.25rem;
  transition: all 0.2s;
  position: fixed;
  .navList {
    position: absolute;
    // background-color: #fff;
    bottom: -155px;
    right: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 7px 7px;

    overflow: hidden;
    li {
      background-color: var(--bgc);
      padding: 15px 30px;
      text-align: center;
      font-size: 16px;
      border-bottom: 1px solid #e4e7ed;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 700;
      color: var(--color1);
    }
    li:hover {
      color: var(--activeLink);
    }

  }
  div.navLeft {
    height: 5.25rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div.logo {
      width: 6.25rem;
      height: 100%;
      background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=12793245,230695580&fm=26&gp=0.jpg');
      background-size: cover;
      margin-right: 1.25rem;
    }
    h1 {
      color: var(--color1);
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
        font-size: 1rem;
        color: var(--color1);
        font-weight: 700;
        transition: all 0.2s;
      }
      a:hover {
        color: var(--activeLink);
      }
      i {
        cursor: pointer;

        font-weight: 700;
        color: var(--color1);
      }
      i:hover {
        color: var(--activeLink);
      }

      div.searchInput {
        position: relative;
        input {
          outline: none;
          font-size: 0.9375rem;
          background: transparent;
          padding: 0.4999rem 2.1874rem 0.4999rem 1rem;
          width: 18.75rem;
          border-radius: 1.8749rem;
          border: 2px solid var(--color1);
          color: var(--color1);
        }

        input::-webkit-input-placeholder {
          /* WebKit, Blink, Edge */
          color: var(--color2);
        }
        :-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: var(--color2);
        }
        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: var(--color2);
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: var(--color2);
        }
        input::-ms-input-placeholder {
          /* Microsoft Edge */
          color: var(--color2);
        }
        i {
          position: absolute;
          right: 8%;
          bottom: 50%;
          transform: translateY(50%);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color1);
        }
        i:hover {
          color: var(--activeLink);
        }
      }
    }
  }
  .navbar-toggler {
    height: 5.25rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .navItem {
      padding: 0 0.5rem;
      i {
        font-size: 20px;
        color: var(--color1);
        cursor: pointer;
      }
      i:hover {
        color:var(--activeLink)
      }
    }
  }
}
// 修改elementui样式
.el-button {
  padding: 0.9375rem;
  font-size: 20px;
}
.el-button:focus,
.el-button,
.el-button:hover {
  background-color: #ffd700 !important;
  color: #fff;
  border: none;
}
</style>
