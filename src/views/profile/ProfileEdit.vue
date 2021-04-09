<template>
  <div id="edit" v-if="info">
    <div class="edit-top">
      <van-icon name="arrow-left" class="back-profile" @click="backClick"/>
      <p>账号资料</p>
    </div>

    <div class="uploadfile">
      <van-uploader class="uploadimg" :after-read="afterRead" preview-size="100vw"/>
      <profile-edit-content title="头像" class="content-first">
        <template v-slot:info>
          <img :src="info.user_img" alt="" v-if="info.user_img">
          <img src="~assets/img/common/default_img.jpg" alt="" v-else>
        </template>
      </profile-edit-content>
    </div>

    <profile-edit-content title="昵称" @editClick="nameShow = true">
      <template v-slot:info>
        <a>{{info.name}}</a>
      </template>
    </profile-edit-content>
    <van-dialog v-model="nameShow" title="修改昵称" show-cancel-button 
    @confirm="nameClick" @cancel="content = ''">
      <van-field v-model="content" autofocus/>
    </van-dialog>

    <profile-edit-content title="账号">
      <template v-slot:info>
        <a>{{info.username}}</a>
      </template>
    </profile-edit-content>

    <profile-edit-content title="性别" @editClick="genderShow = true">
       <template v-slot:info>
        <a>{{info.gender == 0 ? '女' : '男'}}</a>
      </template>
    </profile-edit-content>
    <van-action-sheet v-model="genderShow" :actions="actions" 
    @select="onSelect" cancel-text="取消"/>

    <profile-edit-content title="个性签名" @editClick="descShow = true"></profile-edit-content>
    <van-dialog v-model="descShow" title="修改个性签名" show-cancel-button 
    @confirm="descClick" @cancel="content = ''">
      <van-field v-model="content" autofocus/>
    </van-dialog>

    <div class="edit-bottom" @click="exit">
      <p>退出登录</p>
    </div>
  </div>
</template>

<script>
  //子组件相关 
  import ProfileEditContent from './childComponents/ProfileEditContent.vue'
   // 网络请求相关
  import {getUserData,upLoadFile,userUpdate} from 'network/profile/profile.js'

  export default {
    name: 'ProfileEdit',
    components: {
      ProfileEditContent
    },
    data() {
      return {
        info: {},
        nameShow: false,
        descShow: false,
        genderShow: false,
        content: '',
        actions: [
          {name: '女',value: 0},
          {name: '男',value: 1}
        ]
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      /**
       * 监听事件点击的方法
       */
      backClick() { // 返回上一页面
        this.$router.go(-1)
      },
      exit() {  //退出登录
        localStorage.clear();
        location.reload(); //刷新页面，刷新了以后,由于响应拦截，会跳转回登录页面
      },
      // 监听用户点击弹出框的确认:@confirm,取消：@cancel
      nameClick() {
        const rulg = new RegExp('^.{3,12}$');
        if(this.content != '') {
          if(rulg.test(this.content)) {
            this.info.name = this.content;
            this.userUpdate();
            this.content = ''
          } else {
            this.$msg.fail("昵称长度在3~12位之间")
          }
        } else {
          this.$msg.fail("昵称不能为空")
        }
      },
      descClick() {
        this.info.user_desc = this.content;
        this.userUpdate();
        this.content = ''
      },
      // 监听选择
      onSelect(data) {
        this.info.gender = data.value;
        this.userUpdate();
        this.$msg.success("修改成功");
        this.genderShow = false;
      },
      /**
       * 请求数据的方法 
       */ 
      async getInfo() {
        const res = await getUserData(localStorage.getItem('id'));
        this.info = res.data[0];
      },
      async afterRead(file) { // 图片文件上传定义的方法
        // fromdata:juqery用来上传文件的格式吧，后端可以接收到这个fromdata
        const fromdata = new FormData();
        // 引号里的 file 是后端规定的, 后面的第一个file就是参数的file
        fromdata.append('file',file.file);
        const res = await upLoadFile(fromdata);
        this.info.user_img = res.data.url;
        this.userUpdate();
      },
      /**
       * 同时更新后端数据
       */
      async userUpdate() {
        await userUpdate(this.info);
      }
    }
  }
</script>

<style lang="less">
  #edit {
    a {
      color: #00a1d6
    }
  }
  .edit-top {
    height: 12.222vw;
    display: flex;
    background-color: #fff;
    color: #999;
    align-items: center;
    .back-profile {
      padding: 2.778vw 3.333vw;
      font-size: 5.556vw;
    }
    p {
      margin: 0;
      font-size: 3.889vw;
    }
  }
  .uploadfile {
    position: relative;
    overflow: hidden;
    .uploadimg {
      position: absolute;
      opacity: 0;
    }
    .content-first {
      margin-top: 2.778vw;
      img {
        width: 12.778vw;
        height: 12.778vw;
        border-radius: 50%;
      }
    }
  }
  .edit-bottom {
    background-color: #fff;
    height: 12.222vw;
    text-align: center;
    color: #999;
    margin-top: 4.444vw;
    font-size: 3.889vw;
    p {
      margin: 0;
      padding-top: 3.611vw;
    }
  }
</style>