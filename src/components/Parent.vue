<template>
    <div class="box">
        <div class="pbox">父母</div>
        <Child :pmsg="pmsg" @showMsg="showMsg"></Child>
        <h3 v-if="msg">{{ msg }}</h3>
        <Son :fp="pmsg" @childEvent="childEvent"></Son>
        <div v-if="user">
            <div>
                姓名：{{user.name}}
            </div>
            <div>
                年龄：{{user.age}}
            </div>
        </div>
    </div>
</template>

<script>
import Child from '@/components/Child.vue';
import Son from '@/components/Son.vue';

export default {
  components: { Child, Son },
  data() {
    return {
      msg: '',
      pmsg: '我是父组件中的数据',
      user: '',
    };
  },
  methods: {
    showMsg(val) {
      console.log('val', val);
      this.msg = val;
    },
    childEvent(val) {
      this.user = val;
    },
  },
};
</script>

<style scoped>
    .pbox {
        background-color: aquamarine;
        height: 200px;
    }
    .box {
        border:2px solid #3d8635
    }

</style>
