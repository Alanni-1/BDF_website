<template>
  <!-- 关于节日的组件 -->
  <div class="about-feasts">
    <el-row>
      <!-- 主要内容：介绍节日 -->
      <el-col :span="10" :offset="1">
        <div class="about-feasts-introduce">
          <el-link :underline="false" href="/">端午节</el-link>
          <p>
            端午节,感知习近平金句里寄意深远的家 国情怀
            千百年来,端午节与端午文化凝结着中华民族的文
            化血脉和思想精华,端午二字也已成为传承、弘
            扬、激发民族精神和爱国情感的载体,是有着符号 意义的“根”。
          </p>
        </div>
      </el-col>
      <!-- 次要内容：更多节日 -->
      <el-col :span="6">
        <div class="about-feasts-more">
          <el-link :underline="false" href="/more">更多节日</el-link>

          <ul>
            <li><a href="#privacy">隐私政策</a></li>
            <li><a href="#terms">服务条款</a></li>
            <li><a href="contact.html">联系我们</a></li>
            <li><a href="#support">支持</a></li>
          </ul>
        </div>
      </el-col>
      <!-- 待定内容 -->
      <el-col :span="6">
        <h6 class="footer-title-29">联系方式</h6>
        <ul>
          <li class="d-flex align-items-center py-2">
            <i class="fa fa-phone mr-2" aria-hidden="true"></i
            ><a href="tel:+12 23456790">12345678900</a>
          </li>
          <li class="d-flex align-items-center py-2">
            <i class="fa fa-envelope mr-2" aria-hidden="true"></i
            ><a href="mailto:info@example.com">info@example.com</a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'aboutFeasts',
  setup() {
    return {}
  }
}
</script>

<style lang='less'>
.about-feasts {
  background: #1f1f1f;
  padding: 24px;

  // 主要内容
  .about-feasts-introduce {
    // 字体：草书
    font-family: cursive;
    // 标题
    a {
      font-size: 3rem;
      color: #fff;
    }
    // 内容
    p {
      color: #a7a7a7;
      line-height: 1.5rem;
    }
  }

  // 次要内容
  .about-feasts-more {
    color: #fff;

    .title {
      font-size: 2rem;
      color: #fff;
    }
  }
}
</style>