<template>
  <div id="user-content">
    <div class="user-content-info">
      <div>
        <h3>11</h3>
        <p>动态</p>
      </div>
      <span>|</span>
      <div>
        <h3>88</h3>
        <p>关注</p>
      </div>
      <span>|</span>
      <div>
        <h3>3</h3>
        <p>粉丝</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserContent'
  }
</script>

<style lang="less">
  #user-content {
    color: #aaa;
  }
  .user-content-info {
    display: flex;
    div {
      flex: 1;
      text-align: center;
      margin-bottom: 2.222vw;
      h3 {
        font-size: 3.889vw;
        margin: 0;
        padding-top: 1.389vw;
        color: #f4f4f4;
      }
      p{
        margin: 0;
        font-size: 2.222vw;
      }
    }
    span {
      padding-top: 2.778vw;
      color: #aaa;
    }   
    }
</style>