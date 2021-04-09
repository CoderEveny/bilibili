<template>
  <div id="pro-content">
    <div>
      <span>动态</span>
      <span>视频</span>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileContent'
  }
</script>

<style lang="less">
  #pro-content {
    display: flex;
    align-items: center;
    background-color: white;
    height: 11.111vw;
    padding: 0 2.778vw;
    border-top: 0.278vw solid #ddd;
    font-size: 3.611vw;
    span{
        margin: 0 1.944vw;
        color: #777;
    }
  }
</style>