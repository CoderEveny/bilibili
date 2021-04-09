<template>
  <div id="user-more-service">
    <div class="more-service" v-for="(item,index) in moreService" :key="index">
      <div>
        <img :src="item.url" alt="">
        <p>{{item.name}}</p>
      </div>
      <van-icon name="arrow" class="service-arrow"/>
    </div>   
  </div>
</template>

<script>
  export default {
    name: 'UserMoreService',
    props: {
      moreService: Array
    }
  }
</script>

<style lang="less">
  .more-service {
    color: #aaa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      img {
        width: 7.222vw;
        height: 7.222vw;
        padding: 2.778vw 2.778vw 2.778vw 4.444vw;
      }
      p {
        margin: 0;
        padding-top: 3.889vw;
        font-size: 3.611vw;
      }
    }
    .service-arrow {
      padding-right: 2.778vw;
    }
  }
</style>