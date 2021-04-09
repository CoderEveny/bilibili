<template>
  <div id="detail" v-if="data">
    <!-- 导航区 -->
    <detail-nav-bar />
    <!-- 视频区 -->
    <div class="video">
      <video src="~assets/video/something.mp4" controls :poster="data.img" v-if="data.id < 100"></video>
      <video src="~assets/video/something.mp4" controls poster="~assets/img/common/cover.jpg" v-else></video>
    </div>
    <!-- 切换栏 -->
    <com-nav-bar :titles="['简介', '评论 ' + commentLen]" @tabClick="tabClick" class="tab-control"/>
    <div class="detail-content" :class="index === 0 ? 'setHeight_0' : 'setHeight_1' ">
      <div class="detail-content-item">
        <div v-show="index === 0" ref="brief">
          <!-- up主信息区 -->
          <detail-video :data="data" @starClick="starClick" @pickClick="pickClick"
          :star="isstar" :pick="ispick"/>
          <!-- 推荐区 -->
          <context-list class="commend" :contentList="commend" :page="1" />
        </div>
        <div v-show="index === 1" ref="comment">
          <!-- 评论区-->
          <detail-comment :userInfo="userInfo"  
          :commentList="commentList" :commentLen="commentLen" 
          @childClick="postChild" />
          <!-- 发表框 -->
          <detail-comment-head :userInfo="userInfo" ref="commentHead"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //公共组件相关
  import ContextList from 'components/content/context/ContextList.vue'
  import ComNavBar from 'components/content/comnavbar/ComNavBar.vue' 
  //子组件相关 
  import DetailNavBar from './childComponents/DetailNavBar.vue'
  import DetailVideo from './childComponents/DetailVideo.vue'
  import DetailComment from './childComponents/DetailComment.vue'
  import DetailCommentHead from './childComponents/DetailCommentHead.vue'
  // 网络请求相关
  import {getArticle,getCommend,
        getComment,postComment,
        collection,collectionInit,
        subScript,subScriptInit} from 'network/detail/detail' 
  import {getUserData} from 'network/profile/profile' 

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailVideo,
      DetailComment,
      DetailCommentHead,

      ContextList,
      ComNavBar
    },
    data() {
      return {
        data: null,
        commend: null,
        userInfo: null,
        commentList: null,
        commentLen: 0, 
        model: {
          comment_content: '',
          comment_date: '',
          parent_id: null,
          article_id: null
        },
        index: 0,
        isstar: false,
        ispick: false
      }
    },
    created() {
      this.getArticle();
      this.getCommend();
      this.getComment();
      if(localStorage.getItem('token')) {
        this.getUserData()
      };
      this.CommentAccept();
      this.collectionInit(); 
    },
    watch: {
      // 对路由变化做出响应
      $route() {
        // 方法1：刷新页面
        // location.reload()
        // 方法2：重新请求数据
        this.getArticle()
        this.getCommend()
        this.collectionInit()
        this.subScriptInit()
        this.getComment()
      },
    },
    methods: {
      /**
       * 网络请求相关
       */
      // 获得文章内容
      async getArticle() {
        const res = await getArticle(this.$route.params.id)
        this.data = res.data[0];
        if(this.data) {
          this.subScriptInit() 
        } 
      },
      // 获得推荐视频
      async getCommend() {
        const res = await getCommend()
        this.commend = res.data;
      },
      // 获得用户信息
      async getUserData() {
        const res = await getUserData(localStorage.getItem('id'))
        this.userInfo = res.data[0]
      },
      // 获得评论信息
      async getComment() {
        const res = await getComment(this.$route.params.id);
        this.commentLen = res.data.length;
        this.commentList = this.changeComment(res.data);
      },
      // 上传评论信息
      async postComment() {
        await postComment(this.userInfo.id, this.model)
        this.$msg.success('发表成功')
      },
      // 是否已收藏
      async collectionInit() {
        if(localStorage.getItem('token')) {
          const res = await collectionInit(localStorage.getItem('id'),this.$route.params.id)
          this.isstar = res.data.success
        }
      },
      async subScriptInit() {
        if(localStorage.getItem('token')) {
          const res = await subScriptInit(this.data.userinfo.id,this.$route.params.id)
          this.ispick = res.data.success
        }
      },
      // 点击收藏发送消息
      async starClick() {
         if(localStorage.getItem('token')) {
          const res = await collection(localStorage.getItem('id'),this.$route.params.id)
          if(res.data.msg == "收藏成功") {
            this.isstar = true
            this.$msg.success(res.data.msg) 
          } else {
            this.isstar = false
            this.$msg.success(res.data.msg)
          }
        }
      },
      // 点击关注发送消息
      async pickClick() {
         if(localStorage.getItem('token')) {
          const res = await subScript(this.data.userinfo.id,this.$route.params.id)
          if(res.data.msg == "关注成功") {
            this.ispick = true
            this.$msg.success(res.data.msg) 
          } else {
            this.ispick = false
            this.$msg.success(res.data.msg)
          }
        }
      },
      // 改造comment数据结构列表
      changeComment(data) {
        function change(temp) {
          let arr = [];
          for(var i = 0; i< data.length; i++) {
            if(data[i].parent_id == temp) {
              arr.push(data[i]);
              data[i].child = change(data[i].comment_id)
            }
          }
          return arr
        }
        return change(null)
      },
      // 接收父组件传来的数据
      // padStart()方法,padEnd()方法: 一共2个参数：第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
      // ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
      postSuccess(content) {
        const date = new Date()
        let month = date.getMonth() + 1 + ''
        let day = date.getDate() + ''
        month.padStart(2, '0')
        day.padStart(2, '0')
        let str = month + '-' + day;
        this.model.comment_content = content;
        this.model.comment_date = str;
        this.model.article_id = this.$route.params.id;
        this.postComment()
        this.getComment()
      },
      postChild(id) {
        this.model.parent_id = id,
        this.$refs.commentHead.focusInput()
      },
      // 接收从CommentInput里传来的数据
      CommentAccept() {
        this.$bus.$on('commentPost', content => {
          this.postSuccess(content)
        });
         this.$bus.$on('itemReplyClick',id => {
          this.model.parent_id = id,
          this.$refs.commentHead.focusInput()
        })  
      },
      tabClick(index) {
        this.index = index
      },
    }
  }
</script>

<style lang="less"> 
  .video {
    width:100%;
    video {
      width: 100%;
      margin-bottom: -1.111vw;
    }
  }
  .tab-control {
    font-size: 3.611vw;
  }
  .setHeight_0 {
    height: calc(100vh - 301px);
  }
  .setHeight_1 {
    height: calc(100vh - 348px);
  }
  .detail-content {
    position: relative;
    overflow: hidden;
    background-color: var(--color-background);
    .detail-content-item {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      overflow-x: hidden;
	    overflow-y: scroll;
      .commend {
        background-color: var(--color-background);
        color: #f4f4f4
      }
    }   
  }
</style>