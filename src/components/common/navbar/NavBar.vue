<template>
  <div id="nav-bar">
    <slot name="left" />
    <slot name="center" />
    <slot name="right"/>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style lang="less">
  #nav-bar {
    height: 12.222vw;
    display: flex;
    text-align: center;
    color: #fff;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>