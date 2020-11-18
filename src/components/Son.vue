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
      // 可以使用无参数：http://localhost:8081/son1/123 非xxx=123；id 必须要和路由配置里面的 :id 设置
      this.$router.push({ name: 'son1', params: { id: 123 } }); // name 和 params
      // this.$router.push({ path: '/son1', query: { id: 123 } }); // path 和 query
    },
  },
};
</script>

<style scoped>
    .box {
        border:2px solid #863535
    }
</style>
