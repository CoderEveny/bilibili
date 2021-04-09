<template>
  <nav-bar id="user-nav-bar">
    <template v-slot:left>
      <div class="user-left">
        <img :src="userData.user_img" alt="">
      </div>
    </template>
    <template v-slot:center>
      <div class="user-center">
        <p>{{userData.name}}</p>
        <div class="vip"><span>正式会员</span></div>
        <div class="coin">
          <span>B币: 0.0</span>
          <span>硬币: 198</span>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="user-right" @click="toProfile">
        <span>个人空间</span>
        <van-icon name="arrow" class="to-Profile"/>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'UserNavBar',
    components: {
      NavBar
    },
    props: {
      userData: Object
    },
    methods: {
      toProfile() {
        this.$router.push('/profile')
      }
    }
  }
</script>

<style lang="less">
  #user-nav-bar {
    color: #f4f4f4;
    height: 23.611vw;
    display: flex;
    align-items: center;
  }
  .user-left {
    width: 22.222vw;
    padding-left: 2.778vw;
    img {
      width: 16.667vw;
      height: 16.667vw;
      border-radius: 50%;
    }
  }
  .user-center {
    flex: 1;
    .vip {
      margin: 1.111vw 0;
      font-size: 1.389vw;
      color: #ffa9c4;
      span {
        padding: 0.556vw;
        border: 0.278vw solid #ffa9c4;
        border-radius: 0.833vw;
      }
    }
    p {
      margin: 0;
    }
    .coin span {
      font-size: 2.222vw;
      padding-right: 2.222vw;
      color: #aaa;
    }
  }
  .user-right {
    color: #aaa;
    span {
      font-size: 10px;
    }
    .to-Profile {
      font-size: 3.056vw;
      padding: 0 1.389vw;
    }
  }
</style>