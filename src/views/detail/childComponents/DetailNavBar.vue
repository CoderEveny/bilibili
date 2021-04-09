<template>
  <nav-bar id="detail-nav-bar">
    <template v-slot:left>
      <div>
        <van-icon name="arrow-left" class="backHome" @click="backClick"/>
      </div>
    </template>
    <template v-slot:right>
      <div>
        <img src="~assets/img/detail/shrink.svg" alt="">
        <img src="~assets/img/detail/tv.svg" alt="">
        <img src="~assets/img/detail/more.svg" alt="">
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less">
  #detail-nav-bar {
    background: linear-gradient(#000,#3B3B3B);
    height: 11.667vw;
    opacity: 0.9;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .backHome {
      font-size: 5.556vw;
      color: #aaa;
      padding-left: 1.389vw;
    }
    img {
      width: 5.556vw;
      padding: 0 1.389vw;
    }
  }
</style>