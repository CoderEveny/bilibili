<template>
  <div id="ChannelPartition">
    <icon-show :icons="partitionIcon"/>
  </div>
</template>

<script>
  import IconShow from 'components/content/iconshow/IconShow.vue'

  export default {
    name: 'ChannelPartition',
    components: {
      IconShow
    },
    props: {
      partitionIcon: Array
    }
  }
</script>

<style lang="less">
  #ChannelPartition {
    height: 100vh;
    background-color: #333;
  }
</style>