<template>
  <div id="dynamic">
    <com-nav-bar :titles="['视频', '综合']"></com-nav-bar>
  </div>
</template>

<script>
  import ComNavBar from 'components/content/comnavbar/ComNavBar.vue'

  export default {
    name: 'Dynamic',
    components: {
      ComNavBar
    }
  }
</script>

<style>

</style>