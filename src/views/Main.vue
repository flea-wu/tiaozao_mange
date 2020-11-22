<template>
    <div class="box">
        <Header></Header>
        <Side></Side>
        <PageMain></PageMain>
        <Footer></Footer>
    </div>
</template>

<script>
// import Footer from '@/components/layout/Footer.vue';
import Header from '@/components/layout/header/Header.vue';
import Side from '@/components/layout/sidebar/Side.vue';
import PageMain from '@/components/layout/content/PageMain.vue';

export default {
  components: {
    Header, Side, PageMain,
  },
};
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
    }
</style>
