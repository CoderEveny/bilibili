<template>
  <div id="detail-comment">
    <!-- 评论头 -->
    <p class="comment-top">
      <span>评论</span>
      <span>({{commentLen}})</span>
    </p>
    <!-- 真~评论 -->
    <div id="main-comment">
      <div v-for="(item,index) in commentList" :key="index">
        <!-- 1级评论 -->
        <div class="comment-item">
          <div class="comment-user-info">
            <img :src="item.userinfo.user_img" alt="" v-if="item.userinfo.user_img">
            <img src="~assets/img/common/default_img.jpg" alt="" v-else>
            <div class="comment-user-name">
              <div>
                <h3>{{item.userinfo.name}}</h3>
                <p>{{item.comment_date}}</p>
              </div>
              <span>+关注</span>
            </div>
          </div>
          <div class="comment-content">
            <div>{{item.comment_content}}</div>
            <div class="comment-icon">
              <img src="~assets/img/detail/good.svg" alt="">
              <img src="~assets/img/detail/bad.svg" alt="">
              <img src="~assets/img/detail/post.svg" alt="">
              <img src="~assets/img/detail/reply.svg" alt="" @click="replyChild(item.comment_id, index)">
            </div>
          </div>
        </div>
        <!-- 2级评论 -->
        <div class="child">
          <detail-comment-item :commentListItem="item.child" />
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  import DetailCommentItem from './DetailCommentItem.vue'

  export default {
    name: 'DetailComment',
    components: {
      DetailCommentItem,
    },
    props: {
      userInfo: Object,
      commentList: Array,
      commentLen: Number
    },
    methods: {
      replyChild(id) {
        this.$emit('childClick',id)
      },
    }
  }
</script>

<style lang="less">
  #detail-comment {
    background-color: var(--color-background);
    color: #f4f4f4;
    .comment-top {
      margin: 0;
      padding: 2.222vw 0;
      font-size: 3.889vw;
      span:nth-child(1) {
        padding: 0.833vw 1.389vw;
      }
      span:nth-child(2) {
        color: #aaa;
      }
    }   
    #main-comment {
      >div {
        padding: 0 2.778vw;
        border-bottom: 1px solid #e7e7e7;
      }
      .comment-content {
        div {
          padding-right: 1.389vw;
        }
      }
      .child {
        margin-left: 9.722vw;
        margin-bottom: 2.222vw;
        padding-left: 1.389vw;
      }
      .childInput {
        padding: 0;
        background-color: var(--color-background);
      }
    }
  }
</style>