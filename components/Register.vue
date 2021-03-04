<template>
  <div class="register" v-if="type > 0">
    <div class="alert" v-if="type == 1">
      <div class="esc" @click="esc">
        <img src="@/assets/images/zc/z_3.png" />
      </div>
      <div class="top">
        <img src="@/assets/images/zc/z_1.png" />
        <div>与顾问一对一了解方案</div>
      </div>
      <div class="middle">
        <!-- <input type="text" v-model="form.userName" placeholder="请输入姓名" />
        <input type="text" v-model="form.phone" placeholder="请输入手机号" /> -->

          <input
            :class="value1 ? 'input-error' : ''"
            placeholder="请输入姓名"
            @change="changeInput('userName')"
            v-model="form.userName"
          />
          <input
            :class="value2 ? 'input-error' : ''"
            placeholder="请输入手机号"
            @change="changeInput('phone')"
            v-model="form.phone"
          />
        <button @click="consult1()">立即咨询</button>
      </div>
      <div class="bottom">
        <div>400-620-9800</div>
        <div>我们随时为您提供服务</div>
      </div>
    </div>
    <div class="alert alert-success" v-if="type == 2">
      <div class="esc" @click="esc">
        <img src="@/assets/images/zc/z_3.png" />
      </div>
      <div class="top">
        <img src="@/assets/images/zc/z_4.png" />
      </div>
      <div class="title">信息提交成功！</div>
      <div class="tel">
        如果需要立即咨询/体验，请拨打
        <div>400-620-9800</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0,
      value1: false,
      value2: false,
      form:{
        userName:'',
        phone:'',
        source:''
      }
    }
  },
  methods: {
    changeInput(name) {
      if (name == 'userName') {
        if (!this.form.userName) {
          this.value1 = true
        } else {
          this.value1 = false
        }
      } else if (name == 'phone') {
        if (!(/^1[3456789]\d{9}$/.test(this.form.phone))) {
          this.value2 = true
        } else {
          this.value2 = false
        }       
      }
    },
    advisory() {
      this.$api
        .post(`/retailcloud-official/p/c/clue/advisory`, this.form)
        .then((res) => {
          console.log(res)
          this.type = 2
          setTimeout(() => {
            this.type = 0
          }, 1500)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    showAlert(name) {
      this.form.source = name
      this.type = 1
    },
    esc() {
      this.type = 0
    },
    consult(data) {
      if(data && data.phone) this.form = data
      this.advisory()
    },
    consult1(){
      if (!this.form.userName) {
        this.value1 = true
      }
      if (!this.form.phone) {
        this.value2 = true
      }
      if(this.value2 || this.value1) return
      this.advisory()
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.register {
  position: fixed;
  width: 100%;
  height: 100vh;
  @include flex();
  z-index: 99;
  left: 0;
  top: 0;
  background: rgba($color: #000000, $alpha: 0.83);
  .alert {
    position: relative;
    width: 792px;
    height: 544px;
    background: #fafafa;
    border-radius: 8px;
    background: url('../assets/images/zc/z_2.png') no-repeat;
    background-size: 100% 100%;
    .esc {
      position: absolute;
      right: 0;
      top: 0;
      padding: 23px 31px 0 0;
      cursor: pointer;
      > img {
        width: 16px;
      }
    }
    .top {
      @include flex();
      padding: 48px 0 27px 0;
      > img {
        width: 80px;
        margin-right: 10px;
      }
      > div {
        font-size: 24px;
        font-weight: 500;
        color: #000000;
        line-height: 33px;
      }
    }
    .middle {
      @include flex(center, center, column);
      margin-top: 24px;
      > input {
        width: 450px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #b2b2b2;
        padding: 0 20px;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 27px;
      }
      > button {
        width: 450px;
        height: 40px;
        background: linear-gradient(360deg, #4d6fff 0%, #6f8bff 100%);
        border-radius: 8px;
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
      }
    }
    .bottom {
      @include flex(center, flex-end);
      margin-top: 28px;
      > div:nth-child(1) {
        font-size: 30px;
        font-weight: bold;
        color: #000000;
        line-height: 36px;
      }
      > div:nth-child(2) {
        font-size: 18px;
        color: #000000;
        line-height: 25px;
        margin-left: 12px;
      }
    }
  }
  .alert-success {
    .top {
      padding-top: 59px;
      @include flex();
      > img {
        width: 186px;
      }
    }
    .title {
      font-size: 24px;
      font-weight: 500;
      color: #000000;
      line-height: 33px;
      padding: 16px 0;
      @include flex();
    }
    .tel {
      @include flex();
      font-size: 12px;
      color: #b2b2b2;
      line-height: 17px;
      > div {
        color: #191f25;
      }
    }
  }
}
</style>