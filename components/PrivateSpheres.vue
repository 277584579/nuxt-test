<template>
  <div class="privateSphere">
    <div class="title">私域营销</div>
    <div class="sphere-area">
      <div class="pr-list">
        <div
          class="pr-list-list"
          v-for="(item, index) in list"
          :key="index"
          @click="select(index)"
        >
          <img :src="item.url" />
          <div :class="item.show ? 'name-active name' : 'name'">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="desc-pr">
        <div class="desc-list" v-for="(item,index) in dataList" :key="index">
          <div class="left">
            <!-- <img src="@/assets/images/syyx/4.png" /> -->
          </div>
          <div class="right" @click="registerClick">
            <div class="top">{{item.titleName}}</div>
            <div class="middle">{{item.desc}}</div>
            <div class="bottom">咨询详细方案</div>
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
      index: 0,
      list: [
        {
          title: '运营人员',
          url: require('@/assets/images/syyx/1.png'),
          show: true,
        },
        {
          title: 'CMO',
          url: require('@/assets/images/syyx/2.png'),
          show: false,
        },
        {
          title: '消费者',
          url: require('@/assets/images/syyx/3.png'),
          show: false,
        },
      ],
      dataList:[],
      dataList1: [
        {
          titleName: '数据分散，没有统一的管理，无法开展以客户为导向的运营',
          desc: '方案：数据整合，将线上、线下全渠道数据归一化处理',
        },
        {
          titleName: '数据混乱，难以洞察用户，浪费私域流量',
          desc: '方案：数据洞察，统计用户特征数据、行为数据，挖掘用户价值和偏好，针对性开展运营策略',
        },
        {
          titleName: '难以判断匿名用户的价值',
          desc: '方案：数据赋能辨别匿名用户价值，实现高效拉新',
        },
        {
          titleName: '每天工作很忙，效率低，毫无头绪，怎样提高投入产出比',
          desc: '方案：自动化营销，根据用户结构和生命周期，设置不同客群的运营策略，实时生成营销报告',
        }
      ],
      dataList2: [
        {
          titleName: '营销效果难以评估、数据资产不清晰、难以决策方向',
          desc: '方案：通过BI看板提升管理决策的效率，定位问题找到更多的增长机会，为决策赋能',
        },
        {
          titleName: '自建数据中台难度大，费用高',
          desc: '方案：营销云平台支持大数据量大并发，年续费服务性价比高，降低企业IT成本',
        }
      ],
      dataList3: [
        {
          titleName: '反复收到不感兴趣的推文，体验感差',
          desc: '方案：根据客户偏好，选择最优渠道、最佳内容触达客户，提升触达率',
        },
        {
          titleName: '反复看到不感兴趣的商品，品牌黏性降低',
          desc: '方案：根据客户个性化需求，选择合适的商品，提高推送转化率',
        }
      ],
    }
  },
  methods: {
    select(i) {
      this.list[this.index].show = false
      this.list[i].show = true
      this.index = i
      this.dataList = this[`dataList${i+1}`]
    },
    registerClick(){
      // this.$refs.register.showAlert()
      this.$emit("indexRegisterClick",{type:1,name:'咨询详细方案'})
    }
  },
  created(){
    this.dataList = this.dataList1
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.privateSphere {
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
  .sphere-area {
    width: 100%;
    height: 617px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px #eff1fb;
    .pr-list {
      @include flex();
      &-list {
        padding: 32px 113px;
        cursor: pointer;
        img {
          display: block;
          width: 72px;
        }
        .name {
          font-size: 18px;
          font-weight: 500;
          color: #b2b2b2;
          line-height: 25px;
          padding-bottom: 5px;
          margin-top: 8px;
          text-align: center;
        }
        .name-active {
          color: #4d6fff;
          border-bottom: 2px solid #4d6fff;
        }
      }
    }
    .desc-pr {
      @include flex(flex-start, flex-start);
      flex-wrap: wrap;
      padding: 0 30px;
      .desc-list {
        @include flex(flex-start, flex-start);
        background: url('../assets/images/syyx/bg.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 30px;
        width: 555px;
        height: 186px;
        border-radius: 2px;
        // border: 1px solid #d8d8d8;
        cursor: pointer;
        padding: 22px 30px;
        .left {
          @include flex();
          padding-right: 9px;
          > img {
            width: 100px;
          }
        }
        .right {
          .top {
            font-size: 16px;
            font-weight: 500;
            color: #333333;
            line-height: 22px;
            height: 44px;
          }
          .middle {
            font-size: 14px;
            color: #656565;
            line-height: 20px;
            height: 54px;
          }
          .bottom {
            font-size: 14px;
            color: #4d6fff;
            line-height: 20px;
          }
        }
      }
      .desc-list:nth-child(2n-1) {
        margin-right: 30px;
      }
    }
  }
}
</style>