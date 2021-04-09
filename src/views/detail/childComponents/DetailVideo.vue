<template>
  <div id="detail-video" v-if="data != {}">
    <!-- 作者信息 -->
    <div class="auth">
      <div class="auth-img">
        <img :src="data.userinfo.user_img" alt="" v-if="data.userinfo.user_img">
        <img src="~assets/img/common/head_img_sub.jpg" alt="" v-else>
      </div>
      <div class="auth-info">
        <h3>{{data.userinfo.name}}</h3>
        <p>300万粉丝</p>
      </div>
      <div class="pick" @click="pickClick">
        <span>{{pick ? '已关注': '+关注'}}</span>
      </div>
    </div>
    <!-- 视频信息 -->
    <div class="video-title">
      <div class="video-name">
        <span>{{data.category.title}}</span>
        <span>{{data.name}}</span>
      </div>
      <van-icon name="arrow-down" class="normal" v-if="isClick" @click="showMore"/>
      <van-icon name="arrow-left" class="normal" v-else @click="showMore"/>
    </div>
    <!--视频播放量等  -->
    <div class="video-msg">
      <div class="icon-play2">3.6万</div>
      <div class="icon-file-text">159</div>
      <div>{{data.date}}</div>
    </div>
    <!-- 隐藏内容 -->
    <div class="video-detail" :class="{active:isClick}">
        天草是最棒哒！最佳拍档加油啊！这里是测试呀！
    </div>
    <!-- 一键三连 -->
    <div class="video-icon">
      <div class="item-icon">
        <p class="icon-star-full" :class="{starOn:star}"  @click="collectionClick"><span>收藏</span></p>
        <p class="icon-box-add"><span>缓存</span></p>
        <p class="icon-redo2"><span>分享</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  

  export default {
    name: 'DetailVideo',
    data() {
      return {
        isClick: false,
      }
    },
    props: {
      data: Object,
      star: Boolean,
      pick: Boolean
    },
    methods: {
      showMore() {
        this.isClick = !this.isClick
      },
      collectionClick() {
        this.$emit('starClick')
      },
      pickClick() {
        this.$emit('pickClick')
      }
    }
  }
</script>

<style lang="less"> 
  #detail-video {
    background-color: var(--color-background);
    padding: 2.222vw 0;
    color: #aaa;
  }
  // 作者信息
  .auth {
    display: flex;
    padding-bottom: 1.389vw;
    .auth-img {
      width: 15%;
      padding-left: 1.389vw;
      img {
        width: 11.111vw;
        height: 11.111vw;
        border-radius: 50%;
      }
    }
    .auth-info {
      flex: 1;
      padding-top: 1.389vw;
      h3 {
        margin: 0;
        font-size: 3.611vw;
        color: #fb7299
      }
      p {
        margin: 0;
        font-size: 2.222vw;
      }
    }
    .pick {
      width: 20%;
      color: #fff;
      padding-top: 1.389vw;
      span {
        padding: 1.389vw 2.222vw;
        font-size: 3.611vw;
        background-color: #fb7299;
        border-radius: 0.833vw;
      }
    }  
  }
  // 视频信息
  .video-title {
    color: #f4f4f4f4;
    font-size: 3.889vw;
    display: flex;
    justify-content: space-between;
    padding-left: 1.667vw;
    .video-name {
      width: 90%;
      span:nth-child(1) {
        padding:0 1.111vw;
        color:#fb7299;
        background-color: #f4f4f4;
        border-radius: 0.833vw;
        font-size: 3.333vw;
      }
      span:nth-child(2) {
        padding: 0 1.667vw;
      }
    }
    .normal {
      padding-right: 1.667vw;
      padding-top: 0.556vw;
    }
  }
  // 视频播放量
  .video-msg {
    display: flex;
    padding-top: 1.389vw;
    div {                          
      padding: 1.389vw 2.222vw;
      font-size: 0.278vw;
    }             
  }
  // 隐藏内容                
  .video-detail {
    display: none;
    font-size: 3.333vw;
    padding: 0.556vw 2.222vw;
  }
  .active {
    display: block;
  }
  .video-icon {
    .item-icon {
      display: flex;
      p {
        margin: 0;
        padding: 0.833vw 2.222vw;
        color: #A9A9A9;
        span {
          font-size: 3.333vw;
          padding: 0 0.833vw;
          color: #999
        }
      }
      .starOn {
        color: #fb7299;
        span {
          color: #fb7299
        }
      }
    }
  }
</style>