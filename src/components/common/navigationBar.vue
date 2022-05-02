<template>
  <!-- 导航栏组件 -->
  <div class="navBox" :class="{ navBoxBgc: isShowBgc }">
    <el-row type="flex" justify="space-between">
      <el-col :lg="11" :md="10" :sm="13" :xs="18">
        <!-- 左边布局 -->
        <div class="navLeft" @click="$router.push(`/index`)">
          <div class="logo">
            <el-image :src="require('@/assets/image/端午logo.png')" fil="cover">
            </el-image>
          </div>
          <h1 class="text">浓情端午，放粽一夏!</h1>
        </div>
      </el-col>
      <el-col :lg="13" :md="14" :sm="11" :xs="4">
        <!-- 右边布局 -->
        <div class="navRight" v-if="!isShowToggle">
          <div class="navItem">
            <router-link to="/index">首页</router-link>
          </div>
          <div class="navItem">
            <router-link to="/custom">端午习俗</router-link>
          </div>
          <div class="navItem">
            <!-- 搜索框 -->
            <div class="searchInput">
              <input
                type="text"
                v-model="searchValue"
                placeholder="请输入你想要输入的内容"
              />
              <i class="iconfont icon-sousuo" @click="goToSearch"></i>
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
        <li>端午的由来</li>
        <li>粽要新闻</li>
        <li>有关人物</li>
        <li>粽情粽意</li>
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
      isOpenDarkModel = ref(false),
      /* 背景色 */
      bgc = '#fff',
      /* 1级文字颜色 */
      mainColor = '#606266',
      /* 2级文字颜色 */
      navSecondaryColor = '#707070',
      /* 导航栏专属1级字体 */
      navTextColor = '#606266',
      /*  导航栏专属2级字体*/
      navSecondaryTextColor = '#909399',
      /* 导航栏专属背景 */
      navBgc = '#fff',
      // 搜索框的值
      searchValue = ref('')

    // 监听滚动
    window.onscroll = () => {
      // 判断滚动
      if (document.documentElement.scrollTop != 0) {
        // 开启背景
        isShowBgc.value = true
        // 判断是否开启夜间模式
        if (isOpenDarkModel.value) {
          navTextColor = '#fdfffc'
          navSecondaryTextColor = '#fdfffc'
        } else {
          navTextColor = '#606266'
          navSecondaryTextColor = '#606266'
        }
      } else {
        isShowBgc.value = false
        // 顶部文字固定白色
        navTextColor = '#fdfffc'
        // 顶部二级文字颜色
        navSecondaryTextColor = '#fdfffc'
      }

      // 修改全局变量
      document.documentElement.style.setProperty('--navTextColor', navTextColor)
      document.documentElement.style.setProperty(
        '--navSecondaryTextColor',
        navSecondaryTextColor
      )
    }
    // window尺寸改变
    window.onresize = () => {

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

    // 搜索input
    const goToSearch = () => {
      if (searchValue.value.trim().length !== 0) {
        window.open(`https://www.baidu.com/s?word=${searchValue.value}`)
      }      
    }

    // 切换list
    const toggleList = () => {
      isShowNavList.value = !isShowNavList.value
    }
    // 切换夜间/白天模式
    const changeIsOpenDarkModel = () => {
      isOpenDarkModel.value = !isOpenDarkModel.value

      // 修改颜色
      if (isOpenDarkModel.value) {
        bgc = '#343a40'
        /* 1级文字颜色 */
        mainColor = '#fdfffc'
        /* 2级文字颜色 */
        navSecondaryColor = '#b7b7b7'

        /* 导航栏专属1级字体 */
        navTextColor = '#fdfffc'
        /*  导航栏专属2级字体*/
        navSecondaryTextColor = '#b7b7b7'
        /* 导航栏专属背景 */
        navBgc = '#343a40'
      } else {
        bgc = '#fff'
        /* 1级文字颜色 */
        mainColor = '#606266'
        /* 2级文字颜色 */
        navSecondaryColor = '#909399'

        navTextColor = '#606266'
        /*  导航栏专属2级字体*/
        navSecondaryTextColor = '#909399'
        /* 导航栏专属背景 */
        navBgc = '#fff'
      }

      //修改CSS中的全局变量
      document.documentElement.style.setProperty('--bgc', bgc)
      document.documentElement.style.setProperty('--mainColor', mainColor)
      document.documentElement.style.setProperty(
        '--navSecondaryColor',
        navSecondaryColor
      )

      document.documentElement.style.setProperty('--navBgc', navBgc)
      if (isShowBgc.value) {
        document.documentElement.style.setProperty(
          '--navTextColor',
          navTextColor
        )
        document.documentElement.style.setProperty(
          '--navSecondaryTextColor',
          navSecondaryTextColor
        )
      }
    }

    return {
      isShowBgc,
      isShowToggle,
      toggleList,
      isShowNavList,
      changeIsOpenDarkModel,
      isOpenDarkModel,
      goToSearch,
      searchValue
    }
  }
}
</script>

<style lang="less" scoped>
.navBoxBgc {
  background-color: var(--navBgc);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.navBox {
  width: 100%;
  padding: 0 1.25rem;
  transition: all 0.2s, background-color 0.4s ease;
  position: fixed;
  z-index: 999;
  .navList {
    position: absolute;
    // background-color: #fff;
    bottom: -259px;
    right: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 7px 7px;

    overflow: hidden;
    li {
      background-color: var(--navBgc);
      padding: 15px 30px;
      text-align: center;
      font-size: 16px;
      border-bottom: 1px solid #e4e7ed;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 700;
      color: var(--mainColor);
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
    color: var(--navTextColor);
    cursor: pointer;

    div.logo {
      width: 6rem;
      height: 100%;
      padding: 0.5rem 1rem;
    }
    h1 {
      -webkit-user-select: none;

      -moz-user-select: none;

      -ms-user-select: none;

      user-select: none;
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
        color: var(--navTextColor);
        font-weight: 700;
        transition: all 0.2s;
      }
      a:hover {
        color: var(--activeLink);
      }
      i {
        cursor: pointer;

        font-weight: 700;
        color: var(--navTextColor);
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
          border: 2px solid var(--navTextColor);
          color: var(--navTextColor);
        }

        input::-webkit-input-placeholder {
          /* WebKit, Blink, Edge */
          color: var(--navSecondaryTextColor);
        }
        :-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: var(--navSecondaryTextColor);
        }
        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: var(--navSecondaryTextColor);
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: var(--navSecondaryTextColor);
        }
        input::-ms-input-placeholder {
          /* Microsoft Edge */
          color: var(--navSecondaryTextColor);
        }
        i {
          position: absolute;
          right: 8%;
          bottom: 50%;
          transform: translateY(50%);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--navTextColor);
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
        color: var(--navTextColor);
        cursor: pointer;
      }
      i:hover {
        color: var(--activeLink);
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
  background-color: var(--activeLink) !important;
  color: #fff;
  border: none;
}
</style>
