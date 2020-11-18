<template>
    <div class="box">
        <div>
            我是son1
        </div>
        <div @click="sendSon1Msg">
            {{ son1 }}
        </div>
        {{ fpmsg }}
        <button @click="sendBrother">sendBrother</button>
        <el-button @click="toSon">去兄弟son</el-button>
        <h3>{{paramsdata}}</h3>
    </div>
</template>

<script>
import bus from '@/bus/bus';

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
      // 获取动态路由的参数
      paramsdata: this.$route.params.id,
    };
  },
  methods: {
    sendSon1Msg() {
      console.log('触发了，sendSon1Msg 事件');
      // 向父组件传递信息
      this.$emit('sendSon1Msg', this.son1);
    },
    sendBrother() {
      console.log('触发了，sendBrotherMsg 事件');
      // 向兄弟组件传递值
      bus.$emit('sendBrotherMsg', this.fpmsg);
    },
    toSon() {
      // 编程式路由
      this.$router.push({ path: '/son' });
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
