<template>
  <div id="detail-list">
    <context-list-item v-for="(item,index) in contentList" :listItem="item" 
    :key="index" :index="index" :page="page" />
  </div>
</template>

<script>
  import ContextListItem from './ContextListItem.vue'

  export default {
    name: 'ContextList',
    components: {
      ContextListItem
    },
    props: {
      contentList: {
        type: Array,
        default() {
          return []
        }
      },
      page: Number
    },
  }
</script>

<style lang="less">
  #detail-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>