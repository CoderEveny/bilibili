<template>
  <div id="channel">
    <com-nav-bar :titles="['频道', '分区']" @tabClick="channelTabClick"/>

    <!-- 分区 -->
    <channel-partition v-show="index == 1" :partitionIcon="partitionIcon"/>
  </div>
</template>

<script>
  //公共组件相关 
  import ComNavBar from 'components/content/comnavbar/ComNavBar.vue'
  // 子组件相关
  import ChannelPartition from './childComponents/ChannelPartition.vue'

  export default {
    name: 'Channel',
    components: {
      ComNavBar,
      ChannelPartition
    },
    data() {
      return {
        index: 0,
        partitionIcon: [
          {url: require('../../assets/img/partition/动画.svg'), name: '动画'},
          {url: require('../../assets/img/partition/国创.svg'), name: '国创'},
          {url: require('../../assets/img/partition/娱乐.svg'), name: '娱乐'},
          {url: require('../../assets/img/partition/放映厅.svg'), name: '放映厅'},
          {url: require('../../assets/img/partition/时尚.svg'), name: '时尚'},
          {url: require('../../assets/img/partition/游戏.svg'), name: '游戏'},
          {url: require('../../assets/img/partition/生活.svg'), name: '生活'},
          {url: require('../../assets/img/partition/电影.svg'), name: '电影'},
          {url: require('../../assets/img/partition/电视剧.svg'), name: '电视剧'},
          {url: require('../../assets/img/partition/番剧.svg'), name: '番剧'},
          {url: require('../../assets/img/partition/直播.svg'), name: '直播'},
          {url: require('../../assets/img/partition/纪录片.svg'), name: '纪录片'},
          {url: require('../../assets/img/partition/编辑推荐.svg'), name: '编辑推荐'},
          {url: require('../../assets/img/partition/鬼畜.svg'), name: '鬼畜'},
        ]
      }
    },
    methods: {
      channelTabClick(index) {
        this.index = index;
      }
    }
  }
</script>

<style lang="less">

</style>