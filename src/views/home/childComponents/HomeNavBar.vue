<template>
  <nav-bar class="home-nav-bar">
    <template v-slot:left>
      <div class="home-left">
        <img :src="userData.user_img" alt="" v-if="userData.user_img" @click="toUser">
        <img src="~assets/img/common/default_img.jpg" alt="" v-else @click="toLogin">
      </div>
    </template>
    <template v-slot:center>
      <div class="home-center">
        <div>
          <van-icon name="search" class="ipt-icon"/>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="home-right">
        <img src="~assets/img/home/navbar/message.svg" alt="">
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'homenavbar',
    components: {
      NavBar,
    },
    props: {
      userData: Object
    },
    data() {
      return {
        head_img: localStorage.getItem('head_img')
      }
    },
    methods: {
      toLogin() {
        this.$router.replace('/login')
      },
      toUser() {
        this.$router.replace('/user')
      }
    }
  }
</script>

<style lang="less">
  .home-nav-bar {
    height: 12.222vw;
    background-color: var(--color-background);
    position: fixed;
  }
  .home-left{
    width: 19.444vw;
    img {
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
      padding-top: 0.833vw;
    }
  }
  .home-center {
    flex: 1;
    div {
      display: flex;
      align-items: center;
      color: #aaa;
      background-color: #333;
      border-radius: 4.444vw;
      margin: 2.5vw 1.667vw 0 0;
      padding-top: 1.111vw;
      .ipt-icon {
        padding-left: 1.389vw;
        padding-bottom: 1.389vw;
        color: #aaa;
      }
    }
  }
  .home-right {
    width: 16.667vw;
    img {
      width: 5.556vw;
      padding-top: 3.333vw;
      padding-left: 1.389vw;
    }
  }

</style>