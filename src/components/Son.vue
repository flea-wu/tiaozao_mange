<template>
    <div>
        <div class="box">我是儿子
            <div @click="childEvent"> {{ fp }}</div>
            {{brothermsg}}
        </div>
        <router-link to="/parent">parent</router-link>
        <el-button @click="toSon1">去兄弟son1</el-button>
    </div>
</template>

<script>
import bus from '@/bus/bus';

export default {
  name: '',
  props: {
    fp: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      brothermsg: '',
    };
  },
  mounted() {
    bus.$on('sendBrotherMsg', (data) => {
      console.log('$on', data);
      this.brothermsg = data;
    });
  },
  methods: {
    childEvent() {
      console.log('触发了 childEvent');
      this.$emit('childEvent', { name: '张三', age: 19 });
    },
    toSon1() {
      this.$router.push({ path: '/son1' });
    },
  },
};
</script>

<style scoped>
    .box {
        border:2px solid #863535
    }
</style>
