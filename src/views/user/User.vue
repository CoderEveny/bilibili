<template>
  <div id="user">
    <user-nav-top />
    <user-nav-bar :userData="userData" />
    <user-content />
    <!-- 大会员区域 -->
    <div class="vip">
      <div class="vip-wrapper">
        <div>
          <h3>开通大会员</h3>
          <p>番剧抢先看，1080+高清体验</p>
        </div>
        <van-icon name="arrow" class="vip-arrow"/>
      </div>
    </div>
    <div class="business">
      <div class="business-wrapper">
        <!-- 业务区 -->
        <icon-show :icons="businessIcon"/>
        <h2>创作中心</h2>
        <icon-show :icons="createIcon"/>
        <h2>推荐服务</h2>
        <icon-show :icons="commendIcon"/>
        <h2>更多服务</h2>
        <user-more-service :moreService="moreService"/>
      </div>
    </div>
  </div>
</template>

<script>
  // 公共组件相关
  import IconShow from 'components/content/iconshow/IconShow.vue'
  //子组件相关 
  import UserNavTop from './childComponents/UserNavTop.vue'
  import UserNavBar from './childComponents/UserNavBar.vue'
  import UserContent from './childComponents/UserContent.vue'
  import UserMoreService from './childComponents/UserMoreService.vue'
  // 网络请求相关
  import {getUserData} from 'network/profile/profile.js'

  export default {
    name: 'User',
    components: {
      IconShow,
      UserNavTop,
      UserNavBar,
      UserContent,
      UserMoreService
    },
    data() {
      return {
        userData: {},
        /**
         * 在平常的页面中，img:src是可以引用的，但是当把它放在data中，因为放在模版里是会被 webpack 打包出来 ，
         * 所以在 js 里写图片路径其实只是一个字符串，webpack 并不会处理。此时就需要使用 require 调用路径，
         * 就能解决问题,但是必须是绝对路径
         */
        businessIcon: [
          {url: require('../../assets/img/business/cache.svg'), name: '离线缓存'},
          {url: require('../../assets/img/business/record.svg'), name: '历史记录'},
          {url: require('../../assets/img/business/collect.svg'), name: '我的收藏'},
          {url: require('../../assets/img/business/wait.svg'), name: '稍后再看'}
        ],
        createIcon: [
          {url: require('../../assets/img/business/create.svg'), name: '创作中心'},
          {url: require('../../assets/img/business/create_center.svg'), name: '创作学院'},
          {url: require('../../assets/img/business/clock.svg'), name: '打卡挑战'},
          {url: require('../../assets/img/business/prize.svg'), name: '有奖活动'}
        ],
        commendIcon: [
          {url: require('../../assets/img/business/book.svg'), name: '我的课程'},
          {url: require('../../assets/img/business/free.svg'), name: '免流量服务'},
          {url: require('../../assets/img/business/dress.svg'), name: '个性装扮'},
          {url: require('../../assets/img/business/hongbao.svg'), name: '邀好友赚红包'},
          {url: require('../../assets/img/business/wallet.svg'), name: '我的钱包'},
          {url: require('../../assets/img/business/Purchases.svg'), name: '会员购中心'},
          {url: require('../../assets/img/business/live.svg'), name: '直播中心'},
          {url: require('../../assets/img/business/battery.svg'), name: '充能奖励'},
        ],
        moreService: [
          {url: require('../../assets/img/business/service.svg'), name: '联系客服'},          
          {url: require('../../assets/img/business/blackboard.svg'), name: '课堂模式'},          
          {url: require('../../assets/img/business/umbrella.svg'), name: '青少年模式'},          
          {url: require('../../assets/img/business/setting.svg'), name: '设置'},          
        ]
      }
    },
    created() {
      this.getUserData()
    },
    methods: {
      async getUserData() {
        const res = await getUserData(localStorage.getItem('id'));
        this.userData = res.data[0];
        // 将头像信息存到localstorage
        localStorage.setItem('head_img',this.userData.user_img)
      }
    }
  }
</script>

<style lang="less">
  #user {
    background-color: var(--color-background);
  }
  h2 {
    margin: 1.389vw 0;
    font-size: 3.611vw;
    color: #fff;
    padding: 0 1.389vw;
  }
  .vip {    
    color: #ffa9c4;
    .vip-wrapper {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      margin: 0 2.778vw;
      background-color: #403738;
      border-top-left-radius: 2.222vw;
      border-top-right-radius: 2.222vw;
      border: 1px solid #ffa9c4;
      border-bottom: none;
      h3 {
        margin: 1.944vw 0 0 2.778vw;
        font-size: 3.611vw;
      }
      p {
        margin: 0 0 0.833vw 2.778vw;
        font-size: 2.222vw;
        padding-bottom: 1.389vw;
      }
    }
    .vip-arrow {
      padding-top: 4.444vw;
      padding-right: 1.389vw;
    }
  }
  .business {
    height: calc(100vh - 265px);
    position: relative;
    overflow: hidden;
    .business-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow-x: hidden;
	    overflow-y: scroll;
    }
  }
</style>