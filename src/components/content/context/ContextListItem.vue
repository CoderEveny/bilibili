<template>
  <div id="list-item" @click="toDetail">
    <div class="list-item">
      <!-- 由于 up主接口后面的page全是黑人抬棺，图片是失效的，所以把 page也传过来 ContextListItem 判断一下 -->
      <!-- 但是当 page = 1 之前加载过的第一、二张图片也会重新渲染成黑人抬棺，唯一的解决办法还是 up主甘快把黑人抬棺改成有效的连接！-->
      <img :src="listItem.img" alt="" v-if="index <= 1 && page == 0">
      <img src="~assets/img/common/cover.jpg" alt="" v-else>
      <div class="shadow">
        <div class="video icon-play2">3.6万</div>
        <div class="comment icon-file-text">159</div>
      </div>
      <!-- 发现接口的弹幕量的值是null，自己写死好了 -->
      <!-- <span class="comment">{{listItem.commentlen}}</span> -->
    </div>
    <p v-if="index <= 1 && page == 0">{{listItem.name}}</p>
    <p v-else>意大利钢琴师演奏Something just like this</p>
  </div>
</template>

<script>
  export default {
    name: 'ContextListItem',
    props: {
      listItem: {
        type: Object,
        default() {
          return {}
        },
      },
      index: Number,
      page: Number
    },
    methods: {
     toDetail() {
         this.$router.push('/detail/' + this.listItem.id)
     }
    }
  }
</script>

<style lang="less">
  #list-item {
    width: 45%;
    margin: 2.778vw 0;
    p {
      margin: 0;
      font-size: 3.333vw;
    }
  }
  .list-item {
    position: relative;
    color: #f4f4f4;
    font-size: 2.222vw;
    img {
      width: 100%;
    }
    .shadow {
      position: absolute;
      bottom: 0.556vw;
      
      // linear-gradient()图像渐变属性
      width: 100%;
      display: flex;
      background: linear-gradient(0deg,rgba(0,0,0,0.85),transparent);
      div {
        flex: 1;
        padding: 1.111vw 1.389vw
      }
    }
  }
</style>