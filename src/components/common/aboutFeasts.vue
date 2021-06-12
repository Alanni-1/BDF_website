<template>
  <!-- 关于节日的组件 -->
  <div class="about-feasts">
    <el-row :gutter="30">
      <!-- 主要内容：介绍节日 -->
      <el-col :md="12" :sm="24" class="about-feasts-introduce">
        <a class="title" href="/">端午节</a>

        <p>
          端午节,感知习近平金句里寄意深远的家 国情怀
          千百年来,端午节与端午文化凝结着中华民族的文
          化血脉和思想精华,端午二字也已成为传承、弘
          扬、激发民族精神和爱国情感的载体,是有着符号 意义的“根”。
        </p>
      </el-col>

      <!-- 次要内容：更多节日 -->
      <el-col :md="6" :sm="12" :xs="12" class="about-feasts-more">
        <a class="title" href="/more">更多节日</a>
        <!-- 节目列表 -->
        <ul class="more-list">
          <li><a href="">七夕</a></li>
          <li><a href="">中秋</a></li>
          <li><a href="">国庆</a></li>
          <li><a href="#support">元旦</a></li>
        </ul>
      </el-col>

      <!-- 待定内容 -->
      <el-col :md="6" :sm="12" :xs="12" class="about-feasts-contact">
        <span class="title">联系方式</span>
        <ul class="contact-list">
          <li>
            <i></i>
            <a href="tel:+12 23456790">12345678900</a>
          </li>
          <li>
            <i></i>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'aboutFeasts',
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.about-feasts {
  padding: 3rem 3rem;

  background-color: var(--bgc);

  color: var(--mainColor);

  // 公共内容: 列表
  .about-feasts-list {
    padding-top: 0.5rem;

    list-style: none;

    li {
      padding: 0.4rem 0;

      a {
        color: var(--mainColor);
      }
    }
  }

  // 公共内容: 标题
  .about-feasts-title {
    display: block;

    font-size: 1.2rem;

    color: var(--mainColor);
  }

  // 主要内容
  .about-feasts-introduce {
    // 字体：草书
    font-family: cursive;

    color: var(--mainColor);
    // 标题
    a.title {
      // 标题公共属性
      .about-feasts-title;

      width: 100%;

      font-size: 2.5rem;
      color: var(--mainColor);
    }
    // 内容
    p {
      padding: 1rem;

      color: var(--navSecondaryColor);

      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0.06rem;
    }
  }

  // 次要内容
  .about-feasts-more {
    & > a.title {
      // 标题公共属性
      .about-feasts-title;

      padding: 1rem 0;
    }

    ul.more-list {
      .about-feasts-list;
    }
  }

  // 联系我们
  .about-feasts-contact {
    span.title {
      // 标题公共属性
      .about-feasts-title;

      padding: 1rem 0;
      padding: 1rem 0;
    }

    ul.contact-list {
      .about-feasts-list;
    }
  }
}
</style>
