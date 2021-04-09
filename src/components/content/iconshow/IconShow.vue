<template>
  <div id="icon-show">
    <div v-for="(item,index) in icons" :key="index">
      <img :src="item.url" alt="">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconShow',
    props: {
      icons: Array
    },
  }
</script>

<style lang="less">
  #icon-show {
    width: 100%;
    padding: 0.833vw 0;
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    div {
      flex: 0 0 25%;
      margin: 2.778vw 0;
      img {
        width: 7.222vw;
        height: 7.222vw;
      }
      p {
        margin: 0;
        font-size: 1.667vw;
        color: #aaa;
      }
    }
  }
</style>