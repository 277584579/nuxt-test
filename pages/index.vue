<template>
  <div class="container">
    <Navbar ref="navbar" @changeScollIndex="selectIndex"></Navbar>
    <full-page :options="options" ref="page">
      <!--      第一屏-->
      <div class="section">
        <div class="box box1">
          <video
            data-keepplaying
            id="startvideo"
            class="video"
            :src="videoUrl"
            muted
            autoplay
            loop="loop"
          >
            your browser does not support the video tag
          </video>
          <div class="content content1">
            <div class="name">营销云</div>
            <div class="desc">
              帮助不同体量的零售企业，通过数字化技术实现商业的可持续增长
            </div>
            <button class="experience" @click="demo">体验demo</button>
          </div>
          <div class="nextPage" @click="next">
            <img src="@/assets/images/next.png" />
          </div>
        </div>
      </div>
      <!--      第二屏-->
      <div class="section">
        <div class="box box1">
          <div class="content">
            <PutIn @indexRegisterClick="registerClick"></PutIn>
          </div>
          <div class="nextPage" @click="next">
            <img src="@/assets/images/next.png" />
          </div>
        </div>
      </div>
      <!--  第三屏-->
      <div class="section">
        <div class="box box1">
          <div class="content">
            <PrivateSpheres
              @indexRegisterClick="registerClick"
            ></PrivateSpheres>
          </div>
          <div class="nextPage" @click="next">
            <img src="@/assets/images/next.png" />
          </div>
        </div>
      </div>
      <!--  第四屏-->
      <div class="section">
        <div class="box box1">
          <div class="content">
            <IntroduceTitle></IntroduceTitle>
          </div>
          <div class="nextPage" @click="next">
            <img src="@/assets/images/next.png" />
          </div>
        </div>
      </div>
      <!--  第五屏-->
      <div class="section">
        <div class="box box1">
          <div class="content">
            <Clientele></Clientele>
          </div>
          <div class="nextPage" @click="next">
            <img src="@/assets/images/next.png" />
          </div>
        </div>
      </div>
      <!--  第六屏-->
      <div class="section">
        <div class="box box1">
          <div class="content">
            <Retail></Retail>
          </div>
        </div>

        <div class="box">
          <Relation @indexRegisterClick="registerClick" title="首页底部联系我们"></Relation>
          <Footer></Footer>
        </div>
      </div>
    </full-page>
    <div class="immobilization">
      <!-- <img src="@/assets/images/f_1.png" @click="demo"> -->
      <img src="@/assets/images/f_2.png" @click="registerClick({type:1,name:'浮窗联系我们'})" />
    </div>
    <Register ref="register"></Register>
  </div>
</template>

<script>
import http from '@/utils/http'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      videoUrl: `${http.imgUrl}/marketing-cloud-front-end/skypegmwcn/earth.mp4?v=6`,
      currentIndex: 0,
      indexes: { index: 0 },

      options: {
        licenseKey: '80A1A6EA-AEE347C5-806E25B8-B32BA7E2',
        afterLoad: (anchorLink, index) => {
          //进入当前板块的函数        anchorLink为锚链接   index为索引值 从1开始,
          this.currentIndex = index.index
        },
        scrollOverflow: true,
        autoScrolling: true,
        navigation: true, //是否显示导航，默认为false
        navigationPosition: 'right', //导航小圆点的位置
        scrollBar: false,
        keyboardScrolling: true, //是否可以使用键盘方向键导航，默认为true
        continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
        menu: '#menu',
        // navigation: true,
        anchors: ['index', 'scene', 'code', 'case', 'strength', 'retail'],
        sectionsColor: ['#F5F7FE', '#F5F7FE', '#F5F7FE', '#F5F7FE', '#F5F7FE'],
      },
    }
  },
  watch: {
    currentIndex(v) {
      switch (v) {
        // case 0:
        //   this.$refs.navbar.changePrIndex(0)
        //   break
        // case 1:
        //   this.$refs.navbar.changePrIndex(0)
        //   break
        // case 2:
        //   this.$refs.navbar.changePrIndex(0)
        //   break
        // case 3:
        //   this.$refs.navbar.changePrIndex(0)
        //   break
        case 4:
          this.$refs.navbar.changePrIndex(2)
          break
        case 5:
          this.$refs.navbar.changePrIndex(3)
          break
        default:
          this.$refs.navbar.changePrIndex(0)
          break
      }
    },
  },
  methods: {
    next() {
      // vue调用fullpapge的方法
      this.$refs.page.api.moveSectionDown()
    },
    selectIndex(i) {
      const hrefUrl = window.location.href.split('/#')[0]
      switch (i) {
        case 0:
          window.location.href = `${hrefUrl}#${this.options.anchors[i]}`
          break
        case 2:
          window.location.href = `${hrefUrl}#${this.options.anchors[i + 2]}`
          break
        case 3:
          window.location.href = `${hrefUrl}#${this.options.anchors[i + 2]}`
          break
        default:
          break
      }
      // const hrefUrl = window.location.href.split('/#')[0]
      // window.location.href = `${hrefUrl}#${this.options.anchors[i]}`
    },
    demo() {
      window.location.href = 'http://admin.cdp.oneretail.cn/login'
    },
    registerClick(data) {
      if (data.type == 1) this.$refs.register.showAlert(data.name)
      else this.$refs.register.consult(data.data)
    },
  },
  mounted() {
    this.$refs.navbar.changePrIndex(0)
    setTimeout(()=>{
      var video=document.getElementById("startvideo"); 
      video.play(); 
    },500)
  },
}
</script> 

<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
  .section {
    .box {
      position: relative;
      .video {
        object-position: center;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
      .content {
        position: absolute;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        min-width: 1200px;
        height: 100%;
        padding-top: 50px;
        @include flex(center, center, column);
        .name {
          font-size: 50px;
          font-weight: 800;
          color: #f19d37;
          line-height: 70px;
        }
        .desc {
          margin-top: 32px;
          font-size: 20px;
          font-weight: 500;
          color: #d9d9d9;
          line-height: 25px;
        }
        .experience {
          width: 274px;
          height: 61px;
          border-radius: 31px;
          border: 1px solid #ffffff;
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
          margin-top: 50px;
        }
        &-content {
          @include flex(center, center);
        }
      }
      .nextPage {
        position: absolute;
        bottom: 36px;
        cursor: pointer;
        left: calc(50% - 18px);
        width: 36px;
        height: 36px;
        z-index: 100;
        @include flex();
        img {
          width: 33px;
          animation: animationImg 1s linear infinite;
        }
      }
    }
  }
  @keyframes animationImg {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .box1 {
    width: 100%;
    height: 100vh;
  }
  .box3 {
    padding: 100px;
  }
  .section {
    min-width: 1200px;
  }
  .immobilization {
    position: fixed;
    right: 25px;
    // top: 291px;
    top: 350px;
    cursor: pointer;
    @include flex(center, center, column);
    img {
      display: block;
      width: 50px;
    }
  }
}
</style>
