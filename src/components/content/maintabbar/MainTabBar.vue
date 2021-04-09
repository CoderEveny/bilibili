<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item>
          <img src="~assets/img/tabbar/home.svg" alt="">
          <div>首页</div>
        </template>
        <template v-slot:item-active>
          <img src="~assets/img/tabbar/home-active.svg" alt="">
          <div style="color:#ffa9c4">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/channel">
        <template v-slot:item>
          <img src="~assets/img/tabbar/channel.svg" alt="">
          <div>频道</div>
        </template>
        <template v-slot:item-active>
          <img src="~assets/img/tabbar/channel-active.svg" alt="">
          <div style="color:#ffa9c4">频道</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/dynamic">
        <template v-slot:item>
          <img src="~assets/img/tabbar/dynamic.svg" alt="">
          <div>动态</div>
        </template>
        <template v-slot:item-active>
          <img src="~assets/img/tabbar/dynamic-active.svg" alt="">
          <div style="color:#ffa9c4">动态</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/purchase">
        <template v-slot:item>
          <img src="~assets/img/tabbar/shop.svg" alt="">
          <div>会员购</div>
        </template>
        <template v-slot:item-active>
          <img src="~assets/img/tabbar/shop-active.svg" alt="">
          <div style="color:#ffa9c4">会员购</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="user">
        <template v-slot:item>
          <img src="~assets/img/tabbar/user.svg" alt="">
          <div>我的</div>
        </template>
        <template v-slot:item-active>
          <img src="~assets/img/tabbar/user-active.svg" alt="">
          <div style="color:#ffa9c4">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue' 
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>