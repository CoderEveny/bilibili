<template>
  <div id="edit-content" @click="editClick">
    <span>{{title}}</span>
    <span><slot name="info"></slot></span>
  </div>
</template>

<script>

  export default {
    name: 'ProfileEditContent',
    props: {
      title: String
    },
    methods: {
      editClick() {
        this.$emit('editClick')
      }
    }
  }
</script>

<style lang="less">
  #edit-content {
    background-color: #fff;
    color: #999;
    padding: 3.611vw;
    border-bottom: 1px solid #f4f4f4;
    font-size: 3.889vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>