<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  #tab-bar {
    background-color: var(--color-background);
    box-shadow: 0 -0.556vw 0.278vw rgba(1, 1, 1, 0.1);
    color: #fff;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>