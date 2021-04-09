<template>
  <div id="purchase"> 
    <purchase-nav-bar></purchase-nav-bar>
   
  </div>
</template>

<script>
  import PurchaseNavBar from './childComponents/PurchaseNavBar.vue' 

  export default {
    name: 'Purchase',
    components: {
      PurchaseNavBar,
    }
  }
</script>

<style lang="less">
  #purchase {
    height: 100vh;
  }

</style>