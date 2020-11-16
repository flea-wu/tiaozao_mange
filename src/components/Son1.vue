<template>
    <div class="box">
        <div>
            我是son1
        </div>
        <div @click="sendSon1Msg">
            {{ son1 }}
        </div>
        {{ fpmsg }}
    </div>
</template>

<script>
export default {
  name: 'Son1',
  props: {
    son1: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      fpmsg: '',
    };
  },
  methods: {
    sendSon1Msg() {
      console.log('触发了，sendSon1Msg 事件');
      this.$emit('sendSon1Msg', this.son1);
    },
  },
  mounted() {
    this.fpmsg = this.$parent.$data.pmsg;
  },
};
</script>

<style scoped>
    .box {
        border: 1px solid #fa9703;
    }
</style>
