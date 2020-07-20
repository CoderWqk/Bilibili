<template>
  <div id="ProfileEdit">
    <Header></Header>
    <div class="wrap">
      <div class="upload">
        <van-uploader class="uploadImg" preview-size="375px" :after-read="afterRead" />
        <edit-banner title="头像" class="uploadfile">
          <img slot="userMsg" :src="userMsgList.user_img" alt="" v-if="userMsgList.user_img">
          <img slot="userMsg" src="@/assets/img/avatar.png" alt="" v-else>
        </edit-banner>
      </div>
      <edit-banner title="昵称" @bannerClick="nameShow = true">
        <a href="javascript:;" slot="userMsg">{{userMsgList.name}}</a>
      </edit-banner>
      <edit-banner title="账号">
        <a href="javascript:;" slot="userMsg">{{userMsgList.username}}</a>
      </edit-banner>
      <edit-banner title="性别" @bannerClick="genderShow = true">
        <a href="javascript:;" slot="userMsg">{{userMsgList.gender == 1 ? "男" : "女"}}</a>
      </edit-banner>
      <edit-banner title="个性签名" @bannerClick="signShow = true">
        <a href="javascript:;" slot="userMsg">{{userMsgList.user_desc}}</a>
      </edit-banner>

      <div class="signOut" @click="signOut">退出登录</div>
      <div class="goBack" @click="goBack">返回空间</div>


      <van-dialog
        v-model="nameShow"
        title="昵称"
        show-cancel-button
        @confirm="changeName"
        @close="text = ''">
        <van-field v-model="text" placeholder="请输入您想更改的昵称" autofocus />
      </van-dialog>

      <van-dialog
        v-model="signShow"
        title="个性签名"
        show-cancel-button
        @confirm="changeSign"
        @close="text = ''">
        <van-field v-model="text" placeholder="请输入您想更改的个性签名" type="textarea" autofocus />
      </van-dialog>

      <van-action-sheet 
        cancel-text="取消"
        v-model="genderShow" 
        :actions="actions" 
        @select="onSelect">
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import editBanner from './childComps/editBanner.vue';
export default {
  data() {
    return {
      userMsgList: {},
      nameShow: false,
      signShow: false,
      genderShow: false,
      title: "",
      text: "",
      actions: [
        { name: '男', value: 1 }, 
        { name: '女', value: 0 } 
      ],
    }
  },
  components: {
    Header,
    editBanner
  },
  methods: {
    async userMsg() {
      const res = await this.$http.get('/user/' + sessionStorage.getItem("id"))
      this.userMsgList = res[0];
    },
    async afterRead(file) {
      const formData = new FormData();
      formData.append('file', file.file);
      const res = await this.$http.post('/upload', formData);
      this.userMsgList.user_img = res.url
      this.updateUserMsg();
    },
    async updateUserMsg() {
      const res = await this.$http.post('/update/' + sessionStorage.getItem("id"), this.userMsgList)
      this.text = "";
      if(res.success) {
        this.$toast.fail("修改成功");
      }else {
        this.$toast.fail("修改失败");
      }
    },
    changeName() {
      this.userMsgList.name = this.text;
      this.updateUserMsg();
    },
    changeSign() {
      this.userMsgList.user_desc = this.text;
      this.updateUserMsg();
    },
    changeGender() {
      this.userMsgList.gender = this.text;
      this.updateUserMsg();
    },
    onSelect(data) {
      this.userMsgList.gender = data.value;
      this.updateUserMsg();
      this.genderShow = false;
    },
    signOut() {
      sessionStorage.clear();
      this.$router.push('/login');
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.userMsg();
  }
}
</script>

<style lang="scss" scoped>
#ProfileEdit {
  .wrap {
    margin-top: 24px;
    .upload {
      position: relative;
      overflow: hidden;
      .uploadImg {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
    }
    .signOut {
      margin-top: 40px;
    }
    .signOut, .goBack {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      color: #505050;
      font-size: 28px;
      padding: 10px;
      background-color: #fff;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>