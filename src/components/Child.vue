<template>
    <div class="box">
        <div>孩子</div>
        <div>
            {{ pmsg }}
        </div>
        <button @click="passMsg">走你</button>
    </div>
</template>

<script>
export default {
  props: {
    // 构造器方式，申明从父亲组件那里接收的属性
    pmsg: {
      default: '',
      type: String,
    },
  },
  methods: {
    passMsg() {
      // 子组件向父组件触发一个事件
      console.log('passMsg 事件触发');
      this.$emit('showMsg', 'i am from Child');
    },
  },
  mounted() {
    console.log(this.$parent);
    console.log(this.$children);
  },
};
</script>

<style scoped>
    .box {
        border:2px solid #1d00ff
    }

</style>
