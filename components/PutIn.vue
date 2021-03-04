<template>
  <div class="putIn">
    <div class="title">广告投放</div>
    <div class="putIn-content">
      <div class="list">
        <img class="list-img" src="@/assets/images/tf/tf_1.png" />
        <div class="name">数据少，难以洞察用户</div>
        <div class="desc">
          通过企业一方的数据与营销云数据的结合，实现深度消费者洞察，形成完整的人群画像，精准定位目标客户。
        </div>
        <div class="fixed">
            <nuxt-link class="button" to="/codePage">查看详情</nuxt-link>
          <button class="button" @click="registerClick">获取方案</button>
        </div>
      </div>
      <div class="list">
        <img class="list-img" src="@/assets/images/tf/tf_2.png" />
        <div class="name">渠道多，用户数据杂乱</div>
        <div class="desc">
          加密上传电商平台，微信，POS，CRM，线下等多渠道用户数据，清洗完整，统一的数据画像，做到真正了解用户。
        </div>
        <div class="fixed">
          <nuxt-link class="button" to="/codePage">查看详情</nuxt-link>
          <button class="button" @click="registerClick">获取方案</button>
        </div>
      </div>
      <div class="list">
        <img class="list-img" src="@/assets/images/tf/tf_3.png" />
        <div class="name">推广成本高</div>
        <div class="desc">
          企业用户识别功能：帮助企业排除已转化用户，降低广告投放成本，避免过度骚扰。
        </div>
        <div class="fixed">
          <nuxt-link class="button" to="/codePage">查看详情</nuxt-link>
          <button class="button" @click="registerClick">获取方案</button>
        </div>
      </div>
      <div class="list">
        <img class="list-img" src="@/assets/images/tf/tf_4.png" />
        <div class="name">投放效果不好</div>
        <div class="desc">
          企业用户放大功能：帮助企业寻找潜在客户及高度相似人群，将广告推给最可能实现目标转化的人群，提升拉新效率。
        </div>
        <div class="fixed">
          <nuxt-link class="button" to="/codePage">查看详情</nuxt-link>
          <button class="button" @click="registerClick">获取方案</button>
        </div>
      </div>
      <div class="list">
        <img class="list-img" src="@/assets/images/tf/tf_5.png" />
        <div class="name">转化链路不清晰</div>
        <div class="desc">
          营销数据回流功能：基于端对端跟踪，追踪消费者行为路径，分析各环节转化率，找到流失关键点。
        </div>
        <div class="fixed">
          <nuxt-link class="button" to="/codePage">查看详情</nuxt-link>
          <button class="button" @click="registerClick">获取方案</button>
        </div>
      </div>
      <div class="list">
        <img class="list-img" src="@/assets/images/tf/tf_6.png" />
        <div class="name">广告效果复盘难</div>
        <div class="desc">
          复盘广告投放全链路，反馈最真实的广告效果，助力CMO识别优质拉新渠道，优化投放策略。
        </div>
        <div class="fixed">
          <nuxt-link class="button" to="/codePage">查看详情</nuxt-link>
          <button class="button" @click="registerClick">获取方案</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    registerClick() {
      this.$emit('indexRegisterClick', {type:1,name:'获取方案'})
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.putIn {
  width: 1200px;
  height: 100%;
  @include flex(center, center, column);
  .title {
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 45px;
    text-align: center;
    padding: 20px 0 20px 0;
  }
  &-content {
    width: 100%;
    height: 650px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px #eff1fb;
    padding: 30px;
    @include flex(flex-start, flex-start);
    flex-wrap: wrap;
    .list {
      width: 366px;
      height: 280px;
      background: #ffffff;
      border-radius: 8px;
      margin-right: 20px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      background: url('../assets/images/p_1.png') no-repeat;
      background-size: 100% 100%;
      &-img {
        width: 100%;
        display: block;
      }
      .name {
        font-size: 16px;
        font-weight: 600;
        color: #333333;
        line-height: 22px;
        padding: 17px 0 0 24px;
      }
      .desc {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 400;
        color: #656565;
        line-height: 20px;
        padding: 0 24px;
      }
      .fixed {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        display: none;
        > .button {
          width: 50%;
          height: 100%;
          @include flex();
          font-size: 16px;
          line-height: 22px;
        }
        > .button:first-child {
          border-radius: 0px 0px 0px 8px;
          border: 1px solid #4d6fff;
          color: #4d6fff;
        }
        > .button:last-child {
          background: #4d6fff;
          border: 1px solid #4d6fff;
          color: #ffffff;
        }
      }
    }
    .list:nth-child(3n) {
      margin-right: 0;
    }
    .list:hover {
      .fixed {
        @include flex();
      }
    }
  }
}
</style>