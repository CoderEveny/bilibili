<template>
  <div id="comment-item">
    <div class="comment-item" v-for="(item,index) in commentListItem" :key="index">
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
        <div v-if="!temp">{{item.comment_content}}</div>
        <div v-else> 
          回复 <span>@{{item.parent_user_info.name}} </span>
          : {{item.comment_content}}</div>
        <div class="comment-icon">
          <img src="~assets/img/detail/good.svg" alt="">
          <img src="~assets/img/detail/bad.svg" alt="">
          <img src="~assets/img/detail/post.svg" alt="">
          <img src="~assets/img/detail/reply.svg" alt="" @click="itemReplyClick(item.comment_id)">
        </div>
      </div>
      <detail-comment-item :commentListItem="item.child" :temp="true" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailCommentItem',
    props: {
      commentListItem: Array,
      temp: Boolean,
    },
    data() {
      return {
        childShow: false
      }
    },
    methods: {
      itemReplyClick(id) {
        this.$bus.$emit('itemReplyClick', id)
      },
    }
  }
</script>

<style lang="less">
  #comment-item {
    background-color: #333;
    border-radius: 1.667vw;
  }
  .comment-item {
    flex-direction: column;
    padding-top: 1.389vw;
    justify-content: center;
    .comment-user-info {
      display: flex;
      padding-right: 2.778vw;
      img {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
      }
      .comment-user-name {
        display: flex;
        flex: 1;
        justify-content: space-between;
        div {
          h3 {
          padding-left: 2.778vw;
          font-size: 3.611vw;
          margin: 0;
          }
          p {
            margin: 0;
            font-size: 3.333vw;
            padding: 0.833vw 2.778vw;
          }
        }
        span {
          color: #fb7299;
          font-size: 3.333vw;
        }
      }
    }
    .comment-content {
      width: 83.333vw;
      padding: 1.389vw 0;
      font-size: 3.889vw;
      color: #aaa;
      position: relative;
      div {
        padding-left: 12.778vw;
        span {
          color: #00a1d6;
        }
      }
      .comment-icon {
        img {
          width: 4.167vw;
          padding: 2.222vw 2.222vw 0 0;
        }
      }
    } 
  }
</style>