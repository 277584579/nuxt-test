<template>
  <div class="nav">
    <div class="nav-left">
      <img class="logo" src="@/assets/images/logo.png" />
      <div class="tab">
        <div v-for="(item, index) in list" :key="index">
          <nuxt-link
            v-if="item.link"
            :to="item.link"
            title=""
            :class="
              activeIndex == index ? 'tab-list-active tab-list' : 'tab-list'
            "
          >
            <div class="name">{{ item.name }}</div>
          </nuxt-link>
          <div
            v-else
            :class="
              activeIndex == index ? 'tab-list-active tab-list' : 'tab-list'
            "
            @click="changeIndex(index)"
          >
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-right">
      <!-- <button class="login">登录</button> -->
      <button class="register" @click="demo">登录</button>
    </div>
    <Register ref="register"></Register>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '453',
      activeIndex: 0,
      hrefUrl: '',
      list: [
        { name: '首页', link: '' },
        { name: '营销推广', link: 'codePage' },
        // { name: '广告投放',link:'' },
        // { name: '营销触达',link:'' },
        // { name: '核心能力',link:'' },
        { name: '客户案例', link: '' },
        { name: '合作客户', link: '' },
      ],
    }
  },
  methods: {
    changeIndex(i) {
      this.activeIndex = i
      this.$emit('changeScollIndex', i)
    },
    changePrIndex(i) {
      this.activeIndex = i
    },
    demo(){
      window.location.href="http://admin.cdp.oneretail.cn/login"
    },
    registerClick(){
      this.$refs.register.showAlert()
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/style.scss';
.nav {
  min-width: 1200px !important;
  width: 100%;
  height: 65px;
  background: #070614;
  //   opacity: 0.82;
  padding: 0 120px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @include flex(space-between);
  &-left {
    @include flex(flex-start);
    .logo {
      width: 145px;
      height: 39px;
    }
    .tab {
      @include flex(flex-start);
      height: 100%;
      transition: all 0.5s;
      margin-left: 48px;
      &-list {
        @include flex(flex-start);
        padding: 0 20px;
        height: 100%;
        cursor: pointer;
        .name {
          font-size: 16px;
          color: #b8b8b8;
        }
      }
      &-list-active {
        .name {
          color: #ffffff;
          font-weight: 500;
        }
      }
    }
  }
  &-right {
    float: right;
    font-size: 20px;
    > button {
      border-radius: 15px;
      width: 88px;
      height: 30px;
      margin-left: 16px;
      padding: 0;
      font-size: 16px;
      color: #ffffff;
    }
    .login {
      border: 1px solid #ffffff;
    }
    .register {
      background: #4d6fff;
    }
  }
}
</style>