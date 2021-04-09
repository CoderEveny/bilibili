<template>
  <div id="login">
    <!-- 登录页面表头 -->
    <login-top middleTitle="登录bilibili" change="切换到注册" path="/register"/>

    <!-- 登录页面内容 -->
    <login-text class="username"
    label="账号" placeholder="请输入账号" rule="^.{6,12}$" 
    @inputChange="res => model.username = res"/>
    <login-text label="密码" type="password" placeholder="请输入密码" 
    rule="^.{6,12}$" @inputChange="res => model.password = res"/>

    <!-- 登录页面按钮 -->
    <login-btn btntext="登录" @registerSubmit="registerSubmit"/>
  </div>
</template>

<script>
  import LoginTop from 'components/content/login/LoginTop.vue'
  import LoginText from 'components/content/login/LoginText.vue'
  import LoginBtn from 'components/content/login/LoginBtn.vue'
  // 网络请求相关
  import {postLogin} from 'network/login/login'

  export default {
    name:'Register',
    data() {
      return {
        model: {
          username: '',
          password: ''
        }
      }
    },
    components: {
      LoginTop,
      LoginText,
      LoginBtn
    },
    methods: {
      // async ：把异步的数据转成同步的数据
      async registerSubmit() {
        if(this.model.username && this.model.password) {
          const res = await postLogin(this.model)
          this.$msg.success(res.data.msg)
          if(res.data.code === 200){
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('token', res.data.token);
            setTimeout(() => {
                this.$router.replace('/home');
            },1000) 
          }    
        } else {
          this.$msg.fail("格式不正确，请重新输入！")
        }
      }
    },
  }
</script>

<style lang="less">
#login {
  font-size: 4.444vw;
}
</style>