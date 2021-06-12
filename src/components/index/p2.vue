<template>
  <BaseLayout>
    <template #title>We Provide Best Services</template>
    <template #content>
      <div class="warp">
        <el-row>
          <el-col
            class="item-warp"
            :md="12"
            :sm="24"
            v-for="item of [1, 2, 3, 4]"
            :key="item"
          >
            <el-card class="box-card item">
              <div class="item-body">
                <div class="img-warp">
                  <img src="~@/assets/image/s3.png" />
                </div>
                <div class="item-content">
                  <h3>AWESOME DESIGN</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas magna at porttitor vehicula nullam augue
                    ipsum dolor.
                  </p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col span="24">
            <el-button class="learn-more" type="primary" round>
              LEARN MORE SERVICES
            </el-button>
          </el-col>
        </el-row>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/common/baseLayout'

export default {
  name: 'p2',
  components: {
    BaseLayout
  }
}
</script>

<style lang="less" scoped>
div.warp {
  div.item-warp {
    padding: 1rem;

    .item {
      .item-body {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .img-warp {
          width: 4rem;
        }
        .item-content {
          padding: 1rem 0 1rem 2rem;

          h3 {
            margin-bottom: 0.5rem;
            font-size: 2rem;
          }
        }
      }
    }
  }

  .learn-more {
    margin: 3rem 0;

    background: #fd614a;
    border: none;

    &:hover {
      background-color: #ffd700;
      color: #000000;
    }
  }
}
</style>