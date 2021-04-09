<template>
  <nav-bar class="shop-nav-bar">
    <template v-slot:center>
      <div class="shop-center">会员购</div>
    </template>
    <template v-slot:right>
      <div class="shop-right">
        <img src="~assets/img/purchase/star.svg" alt="">
        <img src="~assets/img/purchase/cart.svg" alt="">
        <img src="~assets/img/purchase/user.svg" alt="">
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'PurchaseNavBar',
    components: {
      NavBar
    }
  }
</script>

<style lang="less">
  .shop-nav-bar {
    height: 12.222vw;
    background-color: var(--color-background);
  }
  .shop-right {
    flex: 1;
    padding-left: 8.333vw;
    img {
      width: 5.556vw;
      height: 5.556vw;
      padding: 3.056vw 0 0 4.167vw;
    }
  }
  .shop-center {  
    width: 50%;
    font-size: 4.444vw;
    padding-top: 3.056vw;
    margin-left: 8.333vw;
    text-align: right;
  }
</style>