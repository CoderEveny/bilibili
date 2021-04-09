<template>
  <div id="home">
    <home-nav-bar :userData="data"></home-nav-bar>
    <!-- 水平滚动导航栏 -->
    <!-- 由于我想要的category跟 接口提供的由很大出入，自己定义和节选算了，只要id对应的数据 -->
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
        <!-- 上拉加载更多 -->
        <van-list v-model="item.loading" :finished="item.finished"
          finished-text="没有更多了" @load="onLoad" :immediate-check="false">
          <!-- 轮播图 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="~assets/img/home/swiper/slice_01.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="~assets/img/home/swiper/slice_02.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="~assets/img/home/swiper/slice_03.jpg" alt=""></van-swipe-item>
          </van-swipe>
          <!-- 视频数据 -->
          <context-list :contentList="item.list" :page="item.page" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  //公共组件相关
  import ContextList from 'components/content/context/ContextList.vue'
  //子组件相关 
  import HomeNavBar from 'views/home/childComponents/HomeNavBar.vue'
  // 网络请求相关
  import {getContent} from 'network/home/home'
  import {getUserData} from 'network/profile/profile.js'

  export default {
    data() {
      return {
        category: [
          {_id: 17, title: "推荐",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 10, title: "热门",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 11, title: "追番",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 12, title: "国创",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 13, title: "音乐",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 14, title: "舞蹈",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 15, title: "游戏",page: 0,pagesize:8, list: [], finished: false, loading:false},
          {_id: 18, title: "鬼畜",page: 0,pagesize:8, list: [], finished: false, loading:false},
        ],
        active: 0,
        data: {},
        reSend: 0
      }
    },
    components: {
      ContextList,
      HomeNavBar
    },
    created() {
      this.getContent();
      this.reSend = 1;
    },
    watch: {
      active() {
        this.getContent()
      },
    },
    activated() {
      /**
       * 由于keep-alive ,刚开始未登录就不会发送网络请求，等登录跳转回来就没有再发送一次网络请求了，
       * 所以要再刷新一次页面或者再发送一次请求，这里设置一个变量reSend，如果这个变量是1，
       * 在actived监听判断了以后再发送一次网络请求
       */
      if(this.reSend === 1 && localStorage.getItem('token')) {
        this.getProfileData()
      }
    },
    methods: {
    /**
     * 这里是发送网络请求的方法
     */
      // 获取视频数据
      async getContent() {
        const item = this.getCategoryItem()
        const res = await getContent(item._id,item.page,item.pagesize);
        item.list.push(...res.data)
        item.loading = false
        if(res.data.length < item.pagesize) {
          // 没有数据了就显示 ‘没有更多了’
          item.finished = true
        }
      },
      // 这里我至今没想到应该怎么拿这张头像图片更合适，本地的话在手机里是不可取的
      // keep-alive在到时候用到返回原页面位置不变有用，事件总线由于开始刚进来是首页，个人页面没被创建那么接收到的数据就是空的
      // 所以再发一遍网络请求
      async getProfileData() {
        const res = await getUserData(localStorage.getItem('id'));
        this.data = res.data[0];
      },
      /**
       * 这里是监听事件的方法
       */
      getCategoryItem() {
        const categoryItem = this.category[this.active];
        return categoryItem
      },
      onLoad() {
        const item = this.getCategoryItem();
        // 数据加载得太快了，看不到效果，延时一下
        setTimeout(() => {
          item.page += 1;
          this.getContent()
        },1000)
      }
    }
  }
</script>

<style lang="less">
  #home {
    background-color: #fff;
    padding-top: 12.778vw;
    .van-tabs__wrap {
      position: sticky;
      top: 12.778vw
    }
    .van-tabs__content {
      height: calc(100vh - 142px);
      position: relative;
      overflow: hidden;
      .van-tab__pane {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
	      overflow-y: scroll;
      }
    }  
  }
  .my-swipe {
    img {
      width: 100%
    }
  }
</style>