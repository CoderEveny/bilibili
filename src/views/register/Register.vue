<template>
  <div id="register">
    <!-- 注册页面表头 -->
    <login-top middleTitle="注册bilibili" change="切换到登录" path="/login"/>

    <!-- 注册页面内容 -->
    <login-text class="name" 
    label="姓名" placeholder="请输入姓名" rule="^.{3,12}$" 
    @inputChange="res => model.name = res"/>
    <login-text label="账号" placeholder="请输入账号" rule="^.{6,12}$" 
    @inputChange="res => model.username = res"/>
    <login-text label="密码" type="password" placeholder="请输入密码" 
    rule="^.{6,12}$" @inputChange="res => model.password = res"/>

    <!-- 注册页面按钮 -->
    <login-btn btntext="注册" @registerSubmit="registerSubmit"/>
  </div>
</template>

<script>
  import LoginTop from 'components/content/login/LoginTop.vue'
  import LoginText from 'components/content/login/LoginText.vue'
  import LoginBtn from 'components/content/login/LoginBtn.vue'
  // 网络请求相关
  import {postRegister} from 'network/register/register'

  export default {
    name:'Register',
    data() {
      return {
        model: {
          name: '',
          username: '',
          password: ''
        },
      }
    },
    components: {
      LoginTop,
      LoginText,
      LoginBtn
    },
    methods: {
      // async ：把异步的数据转成同步的数据
      /**
       * 一个小知识：
       *  注册和登录比较频繁请求服务器的，后端会用token而不用session
       */
      async registerSubmit() {
        const rulg = new RegExp('^.{3,12}$');
        const rue = new RegExp('^.{6,12}$');
        if(rulg.test(this.model.name) && rue.test(this.model.username) && rue.test(this.model.password)) {
          const res = await postRegister(this.model);
          this.$msg.success(res.data.msg);
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('token', res.data.objtoken);
          // 注册成功的状态码是 200
          if(res.data.code == 200) {
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
#register {
  font-size: 4.444vw;
}
.name {
  margin: 4.167vw 0;
}
.register-right {
  font-size: 2.222vw

}
</style>