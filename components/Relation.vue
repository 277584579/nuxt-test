<template>
  <div>
    <div class="page2 page6">
      <div class="title">联系我们</div>
      <div class="line">
        <div class="line-left">
          <div class="message">
            <div>
              <img src="@/assets/images/codePage/l_1.png" />
              联系电话：400-620-9800
            </div>
            <div>
              <img src="@/assets/images/codePage/l_2.png" />
              工作时间：9:00-22:00
            </div>
          </div>
        </div>
        <div class="form">
          <div class="bg"></div>
          <input
            :class="value1 ? 'input-error' : ''"
            placeholder="姓名"
            @change="changeInput('userName')"
            v-model="data.userName"
          />
          <input
            :class="value2 ? 'input-error' : ''"
            placeholder="手机号"
            @change="changeInput('phone')"
            v-model="data.phone"
          />
          <button @click="consult">预约时间</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      value1: false,
      value2: false,
      data: {
        userName: '',
        phone: '',
        source: '底部预约时间',
      },
    }
  },
  methods: {
    changeInput(name) {
      if (name == 'userName') {
        if (!this.data.userName) {
          this.value1 = true
        } else {
          this.value1 = false
        }
      } else if (name == 'phone') {
        if (!(/^1[3456789]\d{9}$/.test(this.data.phone))) {
          this.value2 = true
        } else {
          this.value2 = false
        }       
      }
    },
    consult() {
      if (!this.data.userName) {
        this.value1 = true
      }
      if (!this.data.phone) {
        this.value2 = true
      }
      if(this.value2 || this.value1) return
      this.data.source = this.title
      this.$emit('indexRegisterClick', { type: 2, data: this.data })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
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
.page6 {
  height: 412px;
  background: url('../assets/images/codePage/5.png') no-repeat;
  background-size: 100% 100%;
  .line {
    height: 190px;
    width: 1200px;
    @include flex();
    &-left {
      height: 143px;
      border-right: 1px solid #979797;
      padding-right: 133px;
      @include flex();
      .message {
        div {
          @include flex(flex-start);
          margin-top: 12px;
          font-size: 18px;
          color: #000000;
          line-height: 25px;
          img {
            width: 16px;
            margin-right: 7px;
          }
        }
      }
    }
    .form {
      width: 390px;
      height: 190px;
      position: relative;
      margin-left: 218px;
      @include flex(center, center, column);
      .bg {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.28;
        background: linear-gradient(360deg, #bdbdc3 0%, #212330 100%);
        border: 1px solid #979797;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      > input {
        width: 351px;
        height: 40px;
        background: #ffffff;
        border-radius: 8px;
        margin-bottom: 15px;
        padding-left: 10px;
        color: #000000;
      }
      > button {
        width: 351px;
        height: 40px;
        background: linear-gradient(360deg, #4d6fff 0%, #6f8bff 100%);
        border-radius: 8px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }
    }
  }
}
</style>