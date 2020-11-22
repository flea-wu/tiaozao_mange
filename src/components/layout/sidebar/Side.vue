<template>
    <div>
        <div class="box">
            左侧导航
        </div>
    </div>
</template>

<script>

export default {
  name: 'Side',
  components: {

  },
  computed: {

  },
};
</script>

<style scoped>
    .box {
        border: 1px solid rgba(248, 6, 6, 0.53);
        width: 200px;
        height: 100%;
        position:absolute;
        top:52px;
        left:0;
        bottom:50px;
        overflow: scroll;
    }
</style>
