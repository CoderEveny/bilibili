<template>
  <div id="app">
    <keep-alive exclude="Detail,Profile,ProfileEdit">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-show="$route.meta.showTabBar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'

  export default {
    name: 'app',
    components: {
      MainTabBar
    },
  }
</script>

<style lang="less">
  @import url('assets/style/base.css');
</style>