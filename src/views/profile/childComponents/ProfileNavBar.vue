<template>
  <nav-bar class="profile-nav-bar">
    <template v-slot:left>
      <div class="pro-left">
        <img src="~assets/img/profile/logo.png" alt="" @click="toHome">
      </div>
    </template>
    <template v-slot:center>
      <div class="pro-center">
        <div>
          <van-icon name="search" class="ipt-icon"/>
          <p>请输入内容</p>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="pro-right">
        <img :src="profileInfo.user_img" alt="" v-if="profileInfo.user_img" @click="backtoUser">
        <img src="~assets/img/common/default_img.jpg" alt="" v-else>
        <p>下载App</p>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'ProfileNavBar',
    components: {
      NavBar
    },
    props: {
      profileInfo: Object
    },
    methods: {
      backtoUser() {
        this.$router.go(-1)
      },
      toHome() {
        this.$router.replace('/home')
      }
    }
  }
</script>

<style lang="less">
  .profile-nav-bar {
    height: 12.222vw;
    background-color: #fff;
  }
  .pro-left {
    width: 26.111vw;
    img {
      width: 100%
    }
  }
  .pro-center {
    flex: 1;
    color: #000;
    div {
      display: flex;
      align-items: center;
      color: #aaa;
      background-color: #f4f4f4;
      border-radius: 4.444vw;
      margin: 2.778vw 1.667vw 0 0;
      .ipt-icon {
        padding: 0 1.389vw;
        color: #aaa;
      }
      p {
        font-size: 2.222vw;
        margin: 1.389vw 0;
      }
    }
  }
  .pro-right {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.667vw;
      height: 6.667vw;
      border-radius: 50%; 
    }
    p {
      font-size: 3.611vw;
      margin: 0 2.778vw;
      padding: 1.389vw 2.222vw;
      border-radius: 0.833vw;
      background-color: #fb7299;
    }
  }
</style>