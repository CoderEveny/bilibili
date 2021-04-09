<template>
  <nav-bar id="user-top">
    <template v-slot:right>
      <div class="user-top">
        <img src="~assets/img/user/scan.svg" alt="">
        <img src="~assets/img/user/palette.svg" alt="">
        <img src="~assets/img/user/sun.svg" alt="">
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'UserNavTop',
    components: {
      NavBar
    }
  }
</script>

<style lang="less">
  #user-top {
    height: 6.944vw;
    text-align: right;
    img {
      width: 5.556vw;
      padding: 0.556vw 1.667vw;
    }
  }
</style>