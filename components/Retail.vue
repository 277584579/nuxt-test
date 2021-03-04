<template>
  <div class="Retail">
    <div class="brand">
      <div class="title">3000+零售企业共同的选择</div>
      <div class="desc">
          <div class="list" v-for="(item,index) in list" :key="index">
              <img :src="item.url">
          </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {url: require('@/assets/images/logo/1.png')},
                {url: require('@/assets/images/logo/2.png')},
                {url: require('@/assets/images/logo/3.png')},
                {url: require('@/assets/images/logo/4.png')},
                {url: require('@/assets/images/logo/5.png')},
                {url: require('@/assets/images/logo/6.png')},
                {url: require('@/assets/images/logo/7.png')},
                {url: require('@/assets/images/logo/8.png')},
                {url: require('@/assets/images/logo/9.png')},
                {url: require('@/assets/images/logo/10.png')},
                {url: require('@/assets/images/logo/11.png')},
                {url: require('@/assets/images/logo/12.png')},
                {url: require('@/assets/images/logo/13.png')},
                {url: require('@/assets/images/logo/14.png')},
                {url: require('@/assets/images/logo/15.png')},
                {url: require('@/assets/images/logo/16.png')}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.Retail {
  width: 100%;
  height: 100%;
  @include flex(center, center, column);
  background: url('../assets/images/retail.png') no-repeat;
  background-size: 100% 100%;
  .brand {
    .title {
      font-size: 32px;
      font-weight: 500;
      line-height: 45px;
      padding: 20px 0 20px 0;
      width: 100%;
      text-align: center;
      color: #000000;
    }
    .desc {
      width: 1200px;
      height: 543px;
      margin-top: 21px;
      @include flex(flex-start, flex-start);
      flex-wrap: wrap;
      .list{
          width: 277px;
          height: 113px;
          margin-right: 30px;
          margin-bottom: 30px;
          >img{
              width: 100%;
          }
      }
      .list:nth-child(4n){
          margin-right: 0;
      }
    }
  }
}
</style>