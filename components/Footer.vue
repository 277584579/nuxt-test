<template>
  <div class="footer">
      <div class="footer-content">
          <!-- <div class="title">
              <div class="title-list"><img src="@/assets/images/footer/1.png"><div>一对一指导服务</div></div>
              <div class="title-list"><img src="@/assets/images/footer/2.png"><div>7*24小时售后</div></div>
              <div class="title-list"><img src="@/assets/images/footer/3.png"><div>3日内无理由退款</div></div>
              <div class="title-list"><img src="@/assets/images/footer/4.png"><div>免费备案</div></div>
          </div> -->
          <!-- <div class="scheme">
              <div class="scheme-list">
                  <div class="scheme-list-list">
                      <div class="name">ERP产品</div>
                      <div class="name-list">产品一</div>
                      <div class="name-list">产品二</div>
                      <div class="name-list">产品三</div>
                      <div class="name-list">产品四</div>
                  </div>
              </div>
              <div class="scheme-list">
                  <div class="scheme-list-list">
                      <div class="name">解决方案</div>
                      <div class="name-list">零售</div>
                      <div class="name-list">珠宝</div>
                      <div class="name-list">餐饮</div>
                      <div class="name-list">小程序开发</div>
                  </div>
              </div>
              <div class="scheme-list">
                  <div class="scheme-list-list">
                      <div class="name">关于我们</div>
                      <div class="name-list">公司介绍</div>
                      <div class="name-list">帮助中心</div>
                      <div class="name-list">客户案例</div>
                      <div class="name-list">合作伙伴</div>
                  </div>
              </div>
              <div class="scheme-list">
                  <div class="scheme-list-list">
                      <div class="name">联系我们</div>
                      <div class="name-list">地址：上海市，闵行区黎安路999号5F</div>
                      <div class="name-list">电话：400-620-9800</div>
                      <div class="name-list">邮箱：Marketing@burgeon.cn</div>
                  </div>
              </div>
          </div> -->
          <div class="bottom"><a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备14038201号-3</a>&#x3000;  Copyright 2021 Burgeon Co LTD . All Rights Reserved</div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.footer {
  width: 100%;
//   height: 431px;
  background: #212330;
  @include flex();
  &-content{
      height: 100%;
      width: 1200px;
      .title{
        @include flex();
        border-bottom: 1px solid #424662;
        height: 88px;
        &-list{
            @include flex(flex-start, center);
            height: 100%;
            width: 20%;
            >img{
                width: 40px;
            }
            >div{
                font-size: 16px;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 22px;
                margin-left: 16px;            
            }
        }
      }
      .scheme{
          @include flex();
          padding: 30px 0 24px 0;
          &-list{
              width: 25%;
              &-list{
                  @include flex(flex-start,flex-start,column);
                  .name{
                    font-size: 16px;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 22px;                     
                  }
                  .name-list{
                    font-size: 12px;
                    color: #FFFFFF;
                    line-height: 17px;
                    margin-top: 16px;                   
                  }
              }
          }
      }
      .bottom{
          height: 93px;
          border-top: 1px solid #424662;
          @include flex();
          font-size: 12px;
          color: #FFFFFF;
          line-height: 17px;
          >a{
              font-size: 12px;
              color: #FFFFFF;
              cursor: pointer;
          }
      }
  }
}
</style>