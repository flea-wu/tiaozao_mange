<template>
    <div>
        <div class="pbox">父母</div>
        <Child></Child>
    </div>
</template>

<script>
import Child from '@/components/Child.vue';

export default {
  components: { Child },
};
</script>

<style scoped>
    .pbox {
        background-color: aquamarine;
        height: 200px;
    }

</style>
