<template>
  <nav-bar class="com-nav-bar">
    <template v-slot:center>
      <div class="com-center">
        <span v-for="(item,index) in titles" 
        @click="spanClick(index)" :class="{active: currentIndex === index}">
          <a>{{item}}</a>
        </span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'ComNavBar',
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles:{
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      NavBar
    },
    methods: {
      spanClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style lang="less">
  .com-nav-bar {
    height: 12.222vw;
    background-color: var(--color-background);
    box-shadow: 0 0.833vw 0.278vw rgba(1, 1, 1, 0.1);
  }
  .com-center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      line-height: 11.111vw;
      padding: 0 5.556vw;
    }
  } 
  .active a{
    border-bottom: 0.833vw solid #ffa9c4;
    color: #ffa9c4;
  }
</style>