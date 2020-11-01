<template>
    <div>
        <div>孩子</div>
        <div>
            {{ pmsg }}
        </div>
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
};
</script>

<style scoped>

</style>
