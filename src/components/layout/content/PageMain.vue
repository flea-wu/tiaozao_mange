<template>
    <div class="box">
        <div>内容显示区域</div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style scoped>
    .box {
        border: 1px solid rgb(6, 248, 38);
        position: absolute;
        right:0;
        left: 202px;
        top:52px;
        bottom:50px;
        overflow:auto;
    }
</style>
