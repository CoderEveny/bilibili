<template>
  <div id="profile-info">
    <div class="profile-info-head">
      <div class="profile-info-left">
        <img :src="profileInfo.user_img" alt="" v-if="profileInfo.user_img">
        <img src="~assets/img/common/default_img.jpg" alt="" v-else>
      </div>
      <div class="profile-info-right">
        <div class="right-top">
          <div>
            <h3>3</h3>
            <p>粉丝</p>
          </div>
          <span>|</span>
          <div>
            <h3>88</h3>
            <p>关注</p>
          </div>
          <span>|</span>
          <div>
            <h3>100</h3>
            <p>获赞</p>
          </div>
        </div>
        <div class="right-bottom" @click="toEdit">
          <span>编辑资料</span>
        </div>
      </div>
    </div>
    <div class="profile-info-detail">
      <div class="profile-name">
        <h2>{{profileInfo.name}}</h2>
        <img src="~assets/img/profile/female.svg" alt="" v-if="profileInfo.gender == 0">
        <img src="~assets/img/profile/male.svg" alt="" v-else>
      </div>
      <p v-if="profileInfo.user_desc">{{profileInfo.user_desc}}</p>
      <p v-else>这个人很神秘，什么都没有写</p>
      <a @click="showUID">{{isClick ? '收起' : '展开'}}</a>
      <div :class="{active: isClick}" class="element">
        <span>UID:370197526</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileInfo',
    data() {
      return {
        isClick: false,
      }
    },
    props: {
      profileInfo: Object,
    },
    methods: {
      showUID() {
        this.isClick = !this.isClick;
      },
      toEdit() {
        this.$router.push('/profileEdit')
      }
    }
  }
</script>

<style lang="less">
  .profile-info-head {
    background-color: #fff;
    display: flex;
  }
  .profile-info-left {
    width: 30%;
    margin-top: -3.889vw;
    margin-left: 4.444vw;
    img {
      width: 22.222vw;
      height:22.222vw;
      border-radius: 50%;
    }
  }
  .profile-info-right {
    width: 60%;
    .right-top {
      display: flex;
      div {
        flex: 1;
        text-align: center;
        h3 {
          font-size: 3.889vw;
          margin: 0;
          padding-top: 1.389vw;
        }
        p{
          margin: 0;
          font-size: 2.222vw;
          color: #aaa;
        }
      }
      span {
        padding-top: 2.778vw;
        color: #aaa;
      }   
    }
    .right-bottom {
      border: 0.556vw solid #ffa9c4;
      border-radius: 1.389vw;
      text-align: center;
      width: 85%;
      margin: 1.667vw 0 0 4.444vw;
      span {
        font-size: 3.333vw;
        line-height: 5.556vw;
        color: #ffa9c4;
      }
    }
  }
  .profile-info-detail {
    background-color: #fff;
    .profile-name {
      display: flex;
      h2 {
        margin: 0;
        padding: 1.389vw 0 1.389vw 4.444vw;
        font-size: 5vw;
        font-weight: 400;
        color: #000;
      }
      img {
        padding-top: 1.667vw;
        width: 5vw;
        height: 5vw;
      }
    }
    p {
      margin: 0;
      color: #aaa;
      display: inline-block;
      padding-left: 4.444vw;
      padding-bottom: 2.778vw;
      font-size: 3.333vw; 
    }
    a {
      font-size: 3.333vw;
      color: #00a1d6;
      float: right;
      padding-right: 2.778vw;
    }
    .element {
      display: none;
      font-size: 3.333vw;
      color: #aaa;
      padding-bottom: 1.667vw;
      span {
        background-color: #f4f4f4;
        margin-left: 4.444vw;
        border-radius: 1.389vw;
        line-height: 5vw;
      }
    }
    .active {
      display: block;
    }
  }
</style>