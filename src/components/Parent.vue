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
        <Daughter :pmsg="pmsg" @daughterMsg="daughterMsg"></Daughter>
        <div> {{ daughterMsgVal }}</div>
    </div>
</template>

<script>
import Child from '@/components/Child.vue';
import Son from '@/components/Son.vue';
import Daughter from '@/components/Daughter.vue';

export default {
  components: { Child, Son, Daughter },
  data() {
    return {
      msg: '',
      pmsg: '我是父组件中的数据',
      user: '',
      daughterMsgVal: '',
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
    daughterMsg(val) {
      this.daughterMsgVal = val;
    },
  },
};
</script>

<style scoped>
    .pbox {
        background-color: aquamarine;
        height: 100px;
    }
    .box {
        border:2px solid #3d8635
    }

</style>
