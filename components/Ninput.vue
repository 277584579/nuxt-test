<template>
    <components class="n-input" :is="componentType" v-bind="field" @input="input" v-on="event"></components>
</template>
<script>
export default {
  props: ['placeholder', 'type', 'value'],
  data() {
    return {
      componentType: 'input',
      field: {},
    }
  },
  methods: {
    input(event) {
      //修改input的值
      this.$emit('input', event.target.value)
    },
  },
  created() {
    const { placeholder, type, value } = this
    this.field = {
      placeholder,
      type,
      value,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style.scss';
.n-input {
    width: 351px;
    height: 40px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 15px;
    padding-left: 10px;
    color: #000000;
}
</style>