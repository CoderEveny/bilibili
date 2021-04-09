<template>
  <div id="tab-bar-item" @click="itemClick">
    <slot name="item" v-if="isActive"></slot>
    <slot name="item-active" v-else></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String
    },
    computed: {
      /**
       * 拿传递的props和当前活跃路由对象的link比较，存在就返回true，否则返回false
       * 等于-1时，就是true；否则是false
       */
      isActive() {
        return this.$route.path.indexOf(this.path) == -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err)
      }
    }
  }
</script>

<style lang="less">
  #tab-bar-item {
    flex: 1;
    text-align: center;
    height: 13.889vw;
    font-size: 3.333vw;
  }
  #tab-bar-item img {
    width: 6.389vw;
    height: 6.389vw;
    padding: 1.111vw 0 0.556vw 0
  }
</style>