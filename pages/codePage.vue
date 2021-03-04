<template>
  <div>
    <Navbar1 ref="navbar"></Navbar1>
    <div class="codePage">
      <div class="page1">
        <div class="page1-left">
          <div class="name">通过操作营销云DEMO，您可以体验到：</div>
          <div class="sign">
            <i></i>数据报表：营销的可视化呈现，消费者资产的洞察报告
          </div>
          <div class="sign">
            <i></i>业务应用：集收银、店务、会员、营销于一体的零售终端解决方案
          </div>
          <button class="enter" @click="enter">进入后台</button>
        </div>
        <img class="computer" src="@/assets/images/codePage/0-1.png" />
      </div>
      <div class="page2">
        <div class="title">用户深度洞察</div>
        <img class="watch" src="@/assets/images/codePage/1.png" />
      </div>
      <div class="page2 page3">
        <div class="title">广告精准推送</div>
        <img class="watch" src="@/assets/images/codePage/2.png" />
      </div>
      <div class="page2 page4">
        <div class="title">推广归因复盘</div>
        <img class="watch" src="@/assets/images/codePage/3.png" />
      </div>
      <div class="page5">
        <img src="@/assets/images/codePage/4.png" />
      </div>
      <Relation @indexRegisterClick="registerClick"  title="营销推广页底部联系我们"></Relation>
      <Footer></Footer>
      <Register ref="register"></Register>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods:{
   enter(){
       window.location.href="http://admin.cdp.oneretail.cn/login"
   },
    registerClick(data){
      if (data.type == 1) this.$refs.register.showAlert(data.name)
      else this.$refs.register.consult(data.data)
    }
  },
  mounted() {
    this.$refs.navbar.changePrIndex(1)
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.codePage {
  padding-top: 50px;
  .page1 {
    height: 850px;
    background: url('../assets/images/codePage/0.png') no-repeat;
    background-size: 100% 100%;
    @include flex(flex-start, flex-start);
    &-left {
      padding-top: 293px;
      margin-left: 120px;
      .name {
        padding-bottom: 6px;
        font-size: 30px;
        font-weight: 500;
        color: #31303c;
        line-height: 42px;
      }
      .sign {
        font-size: 18px;
        font-weight: 400;
        color: #5f6060;
        line-height: 32px;
        @include flex(flex-start);
        > i {
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background-color: #4d6fff;
          margin-right: 5px;
        }
      }
      .enter {
        width: 274px;
        height: 61px;
        background: #4d6fff;
        border-radius: 31px;
        margin-top: 40px;
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        line-height: 28px;
      }
    }
    .computer {
      width: 634px;
      margin-top: 64px;
    }
  }
  .page2 {
    height: 782px;
    @include flex(flex-start, center, column);
    .title {
      font-size: 36px;
      font-weight: 500;
      color: #000000;
      line-height: 50px;
      margin: 70px 0 30px 0;
    }
    .watch {
      width: 1200px;
    }
  }
  .page3 {
    height: 900px;
    background: url('../assets/images/codePage/2-1.png') no-repeat;
    background-size: 100% 100%;
  }
  .page4 {
    height: 916px;
  }
  .page5 {
    height: 608px;
    @include flex();
    background: url('../assets/images/codePage/4-1.png') no-repeat;
    background-size: 100% 100%;
    > img {
      width: 1200px;
    }
  }
}
</style>