<template>
  <div id="detail-comment-head">
    <!-- 发表框 -->
    <div class="mine-info">
      <div>
        <img :src="userInfo.user_img" alt="" v-if="userInfo" @click="toUser">
        <img src="~assets/img/common/default_img.jpg" alt="" v-else @click="toLogin">
      </div>
      <input v-model="commentContent" type="text" 
      placeholder="说点什么吧" ref="commentInput"/>
      <button @click="commentPublish">发表</button>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'CommentInput',
    data() {
      return {
        commentContent: '',
      }
    },
    props: {
      userInfo: Object
    },
    methods: {
      focusInput() {
        this.$refs.commentInput.focus()
      },
      toLogin() {
        this.$router.push('/login')
      },
      toUser() {
        this.$router.push("/user")
      },
      commentPublish() {
        if(!this.userInfo && !localStorage.getItem('token')) {
          this.$msg.fail('请先登录')
        } else {
          this.$bus.$emit('commentPost', this.commentContent)
          this.commentContent = ''
        }   
      },
    }
  }
</script>

<style lang="less">
  #detail-comment-head {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: var(--color-background);
    box-shadow: 0 -0.556vw 0.278vw rgb(48, 46, 46);
  }
  .mine-info {
      display: flex;
      align-items: center;
      div {
        width: 10%;
        padding: 1.389vw 2.778vw 0 2.778vw;
        img {
          width: 10vw;
          height: 10vw;
          border-radius: 50%;
        }
      }
      input {
        color: #000;
        padding-left: 2.222vw;
        width: 60%;
        height: 7.222vw;
        border-radius: 5.833vw;
        font-size: 3.333vw; 
      }
      input::placeholder {
        font-size: 2.778vw;
        padding-left: 1.389vw;
      }
      button {
        color: #000;
        outline: none;
        margin-left: 2.778vw;
        padding: 0.833vw 1.389vw;
        border: 0;
        font-size: 3.333vw;
        border-radius: 10px;
      }
    }
</style>