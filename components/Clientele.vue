<template>
  <div class="clientele">
    <div class="brand">
      <div class="title">客户案例</div>
      <div class="desc">
        <div class="left">
          <div class="name">{{data.name}}</div>
          <div class="pain">{{data.desc}}</div>
          <div class="solve">{{data.solve}}</div>
          <div class="brand-list">
            <div class="child-list">
              <img src="@/assets/images/cg/cg_1.png" />
              <div class="bottom-sign" v-if="currentIndex==0"></div>
            </div>
            <div class="child-list">
              <img src="@/assets/images/cg/cg_3.png" />
              <div class="bottom-sign" v-if="currentIndex==1"></div>
            </div>
            <div class="child-list">
              <img src="@/assets/images/cg/cg_4.png" />
              <div class="bottom-sign" v-if="currentIndex==2"></div>
            </div>
            <div class="child-list">
              <img src="@/assets/images/cg/cg_5.png" />
              <div class="bottom-sign" v-if="currentIndex==3"></div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="sign-top">行业方案</div>
          <div :class="index==currentIndex ? 'sign-list sign-list-active':'sign-list'" v-for="(item,index) in nameList" :key="index" @click="changeBrand(index)">{{item}}</div>
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
      nameList:['日化','鞋服','计生','餐饮'],
      list: [
        {
          name: '滴露',
          desc: '品牌痛点：广告试错成本高，复盘难度大，无法证明消费者是因为投放产生的购买行为。',
          solve:
            '解决方案：帮助品牌清洗用户数据形成ONE ID，扩充核心消费者数据形成高度相似的目标用户，建立端对端的数据跟踪以及流量防作弊机制实现真实的转化追因分析，帮助CMO进行高效、准确的营销决策，最终降低20%的推广成本。',
        },
        {
          name: '滔博运动',
          desc: '品牌痛点：拥有大量的粉丝和会员，由于线上流量渠道成本上升，急需新增“存量运营”的营销方向。',
          solve:
            '解决方案：整合分散在京东、天猫、唯品会、APP、微信的各端数据，开展以统一客户管理为导向的运营，帮助品牌成功转变营销方向。',
        },
        {
          name: '杜蕾斯',
          desc: '品牌痛点：缺乏人、货、场结合的洞察分析。',
          solve:
            '解决方案：构建完整的洞察体系,基于用户基础画像和行为偏好分析用户特征和喜好，基于商品结构和价格分析商品销售权重，基于行业/竞品分析规划不同平台商品品类和价格带，提高人、货、场匹配度。',
        },
        {
          name: 'POPEYES',
          desc: '品牌痛点：没有门店客群画像，选址布局不合理，线下门店流量少，怎么引流进店消费。',
          solve:
            '解决方案：基于LBS定向技术找到周边潜在人群，帮助门店匹配用户分布数，提升用户纳新范围，实现门店资源合理配置，基于商圈的热力分析以及潜在客群偏好特征，帮助门店精准拉新，提高线下到店率',
        },
      ],
      data: {},
    }
  },
  methods: {
    changeBrand(i) {
      this.data = this.list[i]
      this.currentIndex = i
    },
  },
  created() {
    this.data = this.list[this.currentIndex]
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.clientele {
  background: url('../assets/images/success.png') no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  @include flex(center, center, column);
  .brand {
    .title {
      font-size: 32px;
      font-weight: 500;
      color: #f5f7fe;
      line-height: 45px;
      padding: 20px 0 20px 0;
      width: 100%;
      text-align: center;
    }
    .desc {
      width: 1200px;
      height: 614px;
      background: linear-gradient(
        180deg,
        rgba(71, 123, 214, 0.87) 0%,
        rgba(32, 56, 96, 0.6) 100%
      );
      @include flex(space-between, center);
      .left {
        width: 988px;
        height: 100%;
        padding-left: 90px;
        padding-top: 138px;
        padding-right: 34px;
        .name {
          font-size: 28px;
          font-weight: 500;
          color: #ffffff;
          line-height: 40px;
        }
        .pain {
          margin-top: 42px;
          font-size: 18px;
          font-weight: 400;
          color: #ffffff;
          line-height: 25px;
        }
        .solve {
          font-size: 18px;
          font-weight: 400;
          color: #ffffff;
          line-height: 27px;
          margin-top: 24px;
          height: 80px;
        }
        .brand-list {
          margin-top: 66px;
          @include flex(flex-start, center);
          .child-list {
            position: relative;
            @include flex(center, center,column);
            margin-right: 90px;
            height: 120px;
            .bottom-sign{
              width: 100%;    
              height: 4px;
              background: #FFFFFF;
              border-radius: 2px;
              position: absolute;
              bottom: 0;
              left: 0;
            }
            img{
              display: block;
              width: 100%;
            }
          }
          .child-list:nth-child(1){
            img{
              width: 73px;
              height: 78px;
            }
          }
          .child-list:nth-child(2){
            img{
              width: 160px;
              height: 50px;
            }
          }
          .child-list:nth-child(3){
            img{
              width: 120px;
              height: 53px;
            }
          }
          .child-list:nth-child(4){
            img{
            width: 95px;
            height: 105px;
            margin-right: 0;
            }
          }
        }
      }
      .right {
        width: 212px;
        height: 100%;
        @include flex(flex-start, center, column);
        .sign-top {
          height: 172px;
          @include flex();
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          line-height: 28px;
        }
        .sign-list {
          cursor: pointer;
          width: 100%;
          height: 97px;
          @include flex();
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 25px;
        }
        .sign-list-active {
          background-color: rgba(225, 225, 225, 0.14);
        }
      }
    }
  }
}
</style>