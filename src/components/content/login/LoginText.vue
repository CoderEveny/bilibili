<template>
  <div id="login-text">
    <van-field :label="label" 
    :type="type" 
    :placeholder="placeholder" 
    :rule="rule"
    v-model="content"/>
  </div>
</template>

<script>
  export default {
    name: 'LoginText',
    data() {
      return {
        content: ''
      }
    },
    props: {
      label: String,     
      type: String,
      placeholder: String,
      rule: String,
    },
    methods: {
      handleRule() {
        // RegExp方法可以把字符串转换成真正的正则
        const rue = new RegExp(this.rule);
        //rue.test(): 指定正则表达式和指定字符串执行一次匹配，返回true或false
        if(rue.test(this.content)) {
          this.$emit('inputChange', this.content)
        }
      }
    },
    // watch可以对data里面的数据进行监听
    watch: {
      content() {
        this.handleRule()
      }
    }
  }
</script>

<style lang="less">

</style>