<template>
    <div>
        <div class="box">我是儿子
            <div @click="childEvent"> {{ fp }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  props: {
    fp: {
      type: String,
      default: '',
    },
  },
  methods: {
    childEvent() {
      console.log('触发了 childEvent');
      this.$emit('childEvent', { name: '张三', age: 19 });
    },
  },
};
</script>

<style scoped>
    .box {
        border:2px solid #863535
    }
</style>
