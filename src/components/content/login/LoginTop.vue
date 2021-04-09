<template>
  <nav-bar class="login-nav-bar">
    <template v-slot:center>
      <div class="login-center">{{middleTitle}}</div>
    </template>
    <template v-slot:right>
      <div @click="$router.replace(path)" class="login-right">
        {{change}}
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: 'LoginTop',
    components: {
      NavBar,
    },
    props: {
      middleTitle: String,
      change: String,
      path: String
    }
  }
</script>

<style lang="less">
.login-nav-bar {
  background-color: #fff;  
}
.login-center {
  flex: 1;
  color: #000;
  padding: 2.778vw 0 0 16.667vw
}
.login-right {
  font-size: 2.222vw;
  color: #000;
  padding: 3.611vw 2.778vw 0 0 
}
.username {
  margin: 4.167vw 0;
}
</style>