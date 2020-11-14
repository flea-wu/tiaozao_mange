<template>
    <div class="box">
        <div>
            我是女儿
        </div>
        <div @click="daughterMsg">
            {{ pmsg }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    pmsg: {
      type: String,
      default: '',
    },
  },
  methods: {
    daughterMsg() {
      this.$emit('daughterMsg', '我是女儿组件中的数据');
    },
  },
};
</script>

<style scoped>
    .box {
        border:2px solid #863535
    }
</style>
