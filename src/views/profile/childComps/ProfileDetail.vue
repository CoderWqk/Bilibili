<template>
  <div id="ProfileDetail">
    <div class="part1">
      <div class="user-img">
        <img :src="userInfo.user_img" v-if="userInfo.user_img" alt />
        <img src="@/assets/img/avatar.png" v-else alt/>
      </div>
      <div class="user-edit">
        <ul>
          <li>
            <span>0</span>
            <span class="text">粉丝</span>
          </li>
          <li>
            <span>4</span>
            <span class="text">关注</span>
          </li>
          <li>
            <span>4</span>
            <span class="text">获赞</span>
          </li>
        </ul>
        <button class="edit-btn" @click="$router.push('/profileEdit')">编辑资料</button>
      </div>
    </div>

    <div class="part2">
      <p class="username">{{userInfo.name}}</p>
      <p class="content" v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
      <p class="content" v-else>这个人很懒，什么都没有留下</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    async UserInfo() {
      const res = await this.$http.get("/user/" + sessionStorage.getItem("id"));
      this.userInfo = res[0];
    }
  },
  created() {
    this.UserInfo();
  }
};
</script>

<style lang="scss" scoped>
#ProfileDetail {
  background-color: #fff;
  .part1 {
    display: flex;
    justify-content: space-around;
    .user-img {
      margin-top: -24px;
      > img {
        width: 170px;
        height: 170px;
        border-radius: 50%;
      }
    }
    .user-edit {
      display: flex;
      flex-direction: column;
      flex: 0.8;
      margin-top: 8px;
      > ul {
        display: flex;
        > li {
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 10px 0;
        }
        > li > .text {
          color: #a9a7a5;
          font-size: 14px;
        }
      }
      > .edit-btn {
        flex: 1;
        width: 100%;
        height: 60px;
        border: 2px solid #fb7299;
        border-radius: 5px;
        color: #fb7299;
        background-color: #fff;
      }
    }
  }

  .part2 {
    padding: 24px;
    .username {
      color: #212121;
      font-size: 36px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      color: #999;
      margin-top: 16px;
    }
  }
}
</style>
