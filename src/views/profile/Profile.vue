<template>
  <div id="profile">
    <!-- nav-bar -->
    <profile-nav-bar :profileInfo="data"/>
    <!-- 中间的背景 -->
    <img src="~/assets/img/profile/bannerTop_new.png" alt="" class="banner-img">
    <!-- 个人信息 -->
    <profile-info :profileInfo="data"/>
   <!-- 详细内容 -->
   <profile-content />
  </div>
</template>

<script>
  //子组件相关 
  import ProfileNavBar from './childComponents/ProfileNavBar.vue'
  import ProfileInfo from './childComponents/ProfileInfo.vue'
  import ProfileContent from './childComponents/ProfileContent.vue'
  // 网络请求相关
  import {getUserData} from 'network/profile/profile.js'

  export default {
    name: 'Profile',
    components: {
      ProfileNavBar,
      ProfileInfo,
      ProfileContent
    },
    data() {
      return {
        data: {}
      }
    },
    created() {
      this.getProfileData()
    },
    methods: {
      async getProfileData() {
        const res = await getUserData(localStorage.getItem('id'));
        this.data = res.data[0];
      }
    },
  }
</script>

<style lang="less">
  .banner-img {
    width: 100%;
    height: 27.778vw;
  }
</style>