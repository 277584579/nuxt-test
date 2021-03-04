<template>
  <div>
    <div class="introduce">
      <div class="title">
        <div
          @click="changeIntroduce(index)"
          :class="item.active ? 'divActive' : ''"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="child">{{ item.name }}</div>
        </div>
      </div>
      <div class="content-content" v-if="currentIndex == 0">
        <div class="img-content img-content1">
          <img src="@/assets/images/1.gif" />
        </div>
        <div>
          <div class="title-content">
            <div class="title">数据赋能</div>
            <div class="title-child"><i class="tips"></i>数据清洗整合</div>
            <div class="title-child"><i class="tips"></i>企业用户识别</div>
            <div class="title-child"><i class="tips"></i>企业用户放大</div>
          </div>
          <img class="sign-tip" src="@/assets/images/code/c_1.png" />
        </div>
      </div>
      <div class="content-content" v-else-if="currentIndex == 1">
        <div class="title-content">
          <div class="title">人群画像</div>
          <div class="title-child"><i class="tips"></i>一方客群标签</div>
          <div class="title-child"><i class="tips"></i>伯俊客群标签</div>
        </div>
        <div class="img-content">
          <img src="@/assets/images/2.gif" />
          <div class="name-img">营销云数据池</div>
        </div>
      </div>
      <div class="content-content" v-if="currentIndex == 2">
        <div class="img-content img-content1">
          <img src="@/assets/images/code/c_2.png" />
        </div>
        <div>
          <div class="title-content">
            <div class="title">公域导流</div>
            <div class="title-child"><i class="tips"></i>内容创意分析</div>
            <div class="title-child"><i class="tips"></i>渠道质量分析</div>
            <div class="title-child"><i class="tips"></i>投放决策建议</div>
          </div>
        </div>
      </div>
      <div class="content-content" v-else-if="currentIndex == 3">
        <div class="title-content">
          <div class="title">私域营销</div>
          <div class="title-child"><i class="tips"></i>用户关系加深</div>
          <div class="title-child"><i class="tips"></i>沉睡流失召回</div>
          <div class="title-child"><i class="tips"></i>活跃用户复购</div>
        </div>
        <div class="img-content">
          <img src="@/assets/images/code/c_3.png" />
        </div>
      </div>
      <div class="content-content" v-if="currentIndex == 4">
        <div class="img-content img-content1">
          <img src="@/assets/images/5.gif" />
        </div>
        <div>
          <div class="title-content">
            <div class="title">消费者资产洞察</div>
            <div class="title-child"><i class="tips"></i>生命周期分析</div>
            <div class="title-child"><i class="tips"></i>RFM模型分析</div>
            <div class="title-child"><i class="tips"></i>客户旅程分析</div>
            <div class="title-child"><i class="tips"></i>营销触达分析</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      list: [
        { name: '数据赋能', active: true },
        { name: '人群画像', active: false },
        { name: '公域导流', active: false },
        { name: '私域营销', active: false },
        { name: '消费者资产洞察', active: false },
      ],
    }
  },
  methods: {
    changeIntroduce(i) {
      this.list.map((o) => {
        o.active = false
      })
      this.list[i].active = true
      this.currentIndex = i
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.introduce {
  width: 1200px;
  height: 650px;
  background-color: #fbfbfb;
  .title {
    @include flex(center, center, row);
    > div {
      width: 25%;
      height: 50px;
      @include flex(center, center);
      font-size: 18px;
      color: #656565;
      line-height: 25px;
      cursor: pointer;
      .child {
        @include flex(center, center);
        width: 165px;
        height: 100%;
      }
    }
    .divActive {
      font-weight: 500;
      color: #4d6fff;
      .child {
        border-bottom: 2px solid #4d6fff;
      }
    }
  }
  .content-content {
    height: 100%;
    @include flex();
    .title-content {
      // height: 650px;
      @include flex(flex-start, center, column);
      display: inline-flex;
      .title {
        font-size: 26px;
        font-weight: 500;
        color: #4d6fff;
        line-height: 37px;
        margin-bottom: 5px;
      }
      .title-child {
        @include flex(center, center);
        font-size: 16px;
        color: #656565;
        .tips {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background-color: #4d6fff;
          margin-right: 9px;
        }
      }
    }
      .sign-tip{
        width: 286px;
        margin-top: 140px;
        display: block;
      }
    .img-content {
      width: 500px;
      margin-left: 100px;
      > img {
        width: 100%;
        display: block;
      }
      .name-img {
        @include flex();
        font-size: 18px;
        font-weight: 500;
        color: #656565;
        padding: 12px;
      }
    }
    .img-content1{
      margin-left: 0;
      margin-right: 100px;
    }
  }
}
</style>