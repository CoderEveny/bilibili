<template>
  <div id="login-btn" @click="registerClick">
    <div class="login-btn">
      {{btntext}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginBtn',
    props: {
      btntext: String
    },
    methods: {
      registerClick() {
        this.$emit('registerSubmit')
      }
    }
  }
</script>

<style lang="less">
#login-btn {
  padding: 4.167vw 2.778vw;
}
.login-btn {
  height: 12.5vw;
  background-color: #ff9db5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25vw;
  font-size: 4.444vw;
}
</style>