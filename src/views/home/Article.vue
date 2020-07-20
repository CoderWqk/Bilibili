<template>
  <div id="Article" v-if="Object.keys(articleItem).length != 0">
    <Header />
    <div class="article-video">
      <video :src="articleItem.content" controls></video>
    </div>
    <!-- 视频标题 -->
    <p class="title">
      <span>{{articleItem.category.title}}</span>
      {{articleItem.name}}
    </p>
    <!-- 作者信息 -->
    <p class="userinfo">
      <span class="name"><span class="up">UP</span>{{articleItem.userinfo.name}}</span>
      <span>229.8万次观看</span>
      <span>3.4万弹幕</span>
      <span>{{articleItem.date}}</span>
    </p>

    <!-- 点赞 /收藏 /缓存 -->
    <p class="toolbar">
      <span @click="concernClick">
        <svg v-show="!isConcern" t="1595162544423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27522" width="128" height="128"><path d="M640 513.1c10.3-6 18.6-23.2 1.2-31.4-5.9-2.7-12-5.2-18.1-7.6C666.5 435.2 694 378.9 694 316c0-117.2-95.1-212.3-212.3-212.3S269.4 198.8 269.4 316c0 62.9 27.5 119.2 70.9 158.1-128.6 50.5-223.5 167.9-242 309.4-0.2 1.7-0.3 3.4-0.3 5.1 0 26.7 21.6 48.4 48.4 48.4H549c-18.5-34.2-29.1-73.4-29.1-115 0.1-89.2 48.4-167 120.1-208.9z" p-id="27523" fill="#999999"></path><path d="M761.7 523.4c-109.4 0-198.5 89-198.5 198.5 0 109.4 89 198.5 198.5 198.5s198.5-89 198.5-198.5c0-109.4-89-198.5-198.5-198.5z m124.7 188.7l-42.8 43.4c-1.8 1.8-3.1 4.9-2.4 7.3l10.4 62.4c1.8 8.6-1.8 16.5-8.6 21.4-3.7 2.4-7.9 3.7-12.2 3.7-3.1 0-6.7-0.6-9.8-2.4l-53.2-29.3c-1.8-1.2-4.3-1.2-6.1 0l-53.2 29.3c-7.3 3.7-15.3 3.1-22-1.2-7.3-4.9-10.4-12.8-9.2-21.4l10.4-61.7c0.6-3.1 0-5.5-1.8-7.3l-43.4-44c-5.5-6.1-7.3-14.7-4.9-22.6 2.4-7.3 8.6-12.8 16.5-14.1l59.3-9.2c2.4 0 4.3-1.8 5.5-4.3l26.3-56.2c3.7-7.9 11-12.2 18.9-12.2s15.3 4.9 18.9 12.2l26.9 56.2c1.2 2.4 3.1 3.7 5.5 4.3l59.3 9.2c7.3 0.6 14.1 6.1 16.5 14.1 3.1 7.7 0.7 16.3-4.8 22.4z" p-id="27524" fill="#999999"></path></svg>
        <svg v-show="isConcern" t="1595162544423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27522" width="128" height="128"><path d="M640 513.1c10.3-6 18.6-23.2 1.2-31.4-5.9-2.7-12-5.2-18.1-7.6C666.5 435.2 694 378.9 694 316c0-117.2-95.1-212.3-212.3-212.3S269.4 198.8 269.4 316c0 62.9 27.5 119.2 70.9 158.1-128.6 50.5-223.5 167.9-242 309.4-0.2 1.7-0.3 3.4-0.3 5.1 0 26.7 21.6 48.4 48.4 48.4H549c-18.5-34.2-29.1-73.4-29.1-115 0.1-89.2 48.4-167 120.1-208.9z" p-id="27523" fill="#fb7299"></path><path d="M761.7 523.4c-109.4 0-198.5 89-198.5 198.5 0 109.4 89 198.5 198.5 198.5s198.5-89 198.5-198.5c0-109.4-89-198.5-198.5-198.5z m124.7 188.7l-42.8 43.4c-1.8 1.8-3.1 4.9-2.4 7.3l10.4 62.4c1.8 8.6-1.8 16.5-8.6 21.4-3.7 2.4-7.9 3.7-12.2 3.7-3.1 0-6.7-0.6-9.8-2.4l-53.2-29.3c-1.8-1.2-4.3-1.2-6.1 0l-53.2 29.3c-7.3 3.7-15.3 3.1-22-1.2-7.3-4.9-10.4-12.8-9.2-21.4l10.4-61.7c0.6-3.1 0-5.5-1.8-7.3l-43.4-44c-5.5-6.1-7.3-14.7-4.9-22.6 2.4-7.3 8.6-12.8 16.5-14.1l59.3-9.2c2.4 0 4.3-1.8 5.5-4.3l26.3-56.2c3.7-7.9 11-12.2 18.9-12.2s15.3 4.9 18.9 12.2l26.9 56.2c1.2 2.4 3.1 3.7 5.5 4.3l59.3 9.2c7.3 0.6 14.1 6.1 16.5 14.1 3.1 7.7 0.7 16.3-4.8 22.4z" p-id="27524" fill="#fb7299"></path></svg>
        关注
      </span>
      <span @click="collectClick">
        <svg v-show="!isCollect" t="1595159807870" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22784" width="128" height="128"><path d="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z" p-id="22785" fill="#999999"></path></svg>
        <svg v-show="isCollect" t="1595159807870" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22784" width="128" height="128"><path d="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z" p-id="22785" fill="#fb7299"></path></svg>
        收藏
      </span>
      <span>
        <svg t="1595145259101" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21856" width="128" height="128"><path d="M512.853333 972.8a34.474667 34.474667 0 0 1-13.1584-2.6112 34.218667 34.218667 0 0 1-10.496-6.894933l-0.017066-0.017067a14.728533 14.728533 0 0 0-0.529067-0.512l-170.615467-170.615467a34.133333 34.133333 0 1 1 48.264534-48.264533l112.401066 112.401067V520.533333a34.133333 34.133333 0 0 1 68.266667 0v335.735467l112.401067-112.401067a34.133333 34.133333 0 1 1 48.264533 48.264534l-170.615467 170.615466-0.512 0.512-0.017066 0.017067A33.792 33.792 0 0 1 512.853333 972.8zM938.666667 170.666667v85.333333H85.333333v-85.333333c0-56.8832 28.450133-85.333333 85.333334-85.333334h682.666666c56.8832 0 85.333333 28.450133 85.333334 85.333334zM456.533333 139.946667c-7.970133-7.970133-17.92-11.946667-29.866666-11.946667s-22.186667 3.976533-30.72 11.946667c-7.970133 8.533333-11.946667 18.773333-11.946667 30.72s3.976533 21.896533 11.946667 29.866666c8.533333 8.533333 18.773333 12.8 30.72 12.8s21.896533-4.266667 29.866666-12.8c8.533333-7.970133 12.8-17.92 12.8-29.866666s-4.266667-22.186667-12.8-30.72z m-186.88 0c-7.953067 8.533333-11.946667 18.773333-11.946666 30.72s3.976533 21.896533 11.946666 29.866666c8.533333 8.533333 18.773333 12.8 30.72 12.8s21.896533-4.266667 29.866667-12.8c8.533333-7.970133 12.8-17.92 12.8-29.866666s-4.266667-22.186667-12.8-30.72c-7.970133-7.970133-17.92-11.946667-29.866667-11.946667s-22.186667 3.976533-30.72 11.946667z m-69.12 60.586666c8.533333-7.970133 12.8-17.92 12.8-29.866666s-4.266667-22.186667-12.8-30.72c-7.970133-7.970133-17.92-11.946667-29.866666-11.946667s-22.186667 3.976533-30.72 11.946667c-7.970133 8.533333-11.946667 18.773333-11.946667 30.72s3.976533 21.896533 11.946667 29.866666c8.533333 8.533333 18.773333 12.8 30.72 12.8s21.896533-4.266667 29.866666-12.8z" p-id="21857" fill="#999999"></path><path d="M853.333333 870.4h-81.92a17.066667 17.066667 0 1 1 0-34.133333H853.333333c47.223467 0 68.266667-21.0432 68.266667-68.266667V273.066667H102.4v494.933333c0 47.223467 21.0432 68.266667 68.266667 68.266667h86.186666a17.066667 17.066667 0 1 1 0 34.133333H170.666667c-66.030933 0-102.4-36.369067-102.4-102.4V170.666667c0-66.030933 36.369067-102.4 102.4-102.4h682.666666c66.030933 0 102.4 36.369067 102.4 102.4v597.333333c0 66.030933-36.369067 102.4-102.4 102.4zM102.4 238.933333h819.2v-68.266666c0-47.223467-21.0432-68.266667-68.266667-68.266667H170.666667c-47.223467 0-68.266667 21.0432-68.266667 68.266667v68.266666z" p-id="21858" fill="#999999"></path></svg>
        缓存
      </span>
    </p>

    <!-- 相关推荐 / 评论 -->
    <div class="switcher">
      <p class="header">
        <a href="javascript:;">
          <span :class="{active: isCommend}" @click="isCommend = true">相关推荐</span>
        </a>
        <a href="javascript:;">
          <span :class="{active: !isCommend}" @click="isCommend = false">评论 {{commentList.length}}</span>
        </a>
      </p>

      <!-- 相关推荐 -->
      <div class="v-card" v-show="isCommend">
        <video-item v-for="(video, index) in commendList" :key="'v' + index" :detailItem="video"/>
      </div>

      <!-- 评论 -->
      <div class="comment" v-show="!isCommend" v-for="(comment, index) in newCommentList" :key="'c' + index">
        <div class="head" v-if="comment.userinfo" >
          <img :src="comment.userinfo.user_img">
        </div>
        <div class="detail" v-if="comment.userinfo" >
          <p class="name">{{comment.userinfo.name}}</p>
          <p class="date">{{comment.comment_date}}</p>
          <p class="content">{{comment.comment_content}}</p>
          <div class="reply" v-if="comment.child.length != 0">
            <p v-for="(child, index) in comment.child" :key="'child' + index">
              <a href="javascript:;" class="name">{{child.userinfo.name}}:&nbsp;</a>
              <span class="content">{{child.comment_content}}</span>
            </p>
          </div>
        </div>
      </div>





    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import VideoItem from './childComps/VideoItem.vue';
export default {
  data() {
    return {
      articleItem: {},
      commendList: [],
      isCommend: true,
      commentList: [],
      newCommentList: [],
      isCollect: false,
      isConcern: false
    }
  },
  components: {
    Header,
    VideoItem
  },
  methods: {
    async getArticleItem() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      this.articleItem = res[0];
      if(this.articleItem) {
        this.ConcernMsgInit();
      }
    },
    async getCommendList() {
      const res =  await this.$http.get("/commend");
      res.forEach((ele, index) => {
        if(ele.img.indexOf('@480w_270h_1c') != -1) {
          ele.img = ele.img.substring(0, ele.img.indexOf('@480w_270h_1c'));
        }
      });
      this.commendList = res;
    },
    async getCommentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      this.commentList = res;
      this.newCommentList = this.changeCommentData(null);
    },
    changeCommentData(temp) {
      let newCommentList = [];
      for(let i = 0; i < this.commentList.length; i++) {
        if(this.commentList[i].parent_id == temp) {
          newCommentList.push(this.commentList[i]);
          this.commentList[i].child = this.changeCommentData(this.commentList[i].comment_id);
        }
      }
      return newCommentList
    },
    // 监听收藏点击事件
    async collectClick() {
      if(sessionStorage.getItem("token") || sessionStorage.getItem("id")) {
        const res = await this.$http.post("/collection/" + sessionStorage.getItem("id"), {
          article_id: this.$route.params.id
        });
        this.isCollect = res.msg == "收藏成功" ? true : false;
      }else {
        this.$toast.fail("请登录账号后进行收藏");
        this.$router.push('/login');
      }
    },
    // 监听关注点击事件
    async concernClick() {
      if(sessionStorage.getItem("token") || sessionStorage.getItem("id")) {
        const res = await this.$http.post("/sub_scription/" + sessionStorage.getItem("id"), {
          sub_id: this.articleItem.userid
        });
        this.isConcern = res.msg == "关注成功" ? true : false;
      }else {
        this.$toast.fail("请登录账号后进行收藏");
        this.$router.push('/login');
      }
    },
    // 初始化收藏信息
    async collectMsgInit() {
      if(sessionStorage.getItem("token")) {
        const res = await this.$http.get("/collection/" + sessionStorage.getItem("id"), {
          params: {
            article_id: this.$route.params.id
          }
        });
        this.isCollect = res.success ? true : false;
      }
    },
    // 初始化关注信息
    async ConcernMsgInit() {
      if(sessionStorage.getItem("token")) {
        const res = await this.$http.get("/sub_scription/" + sessionStorage.getItem("id"), {
          params: {
            sub_id: this.articleItem.userid
          }
        });
        this.isConcern = res.success ? true : false;
      }
    }
  },
  watch: {
    $route() {
      this.getArticleItem();
      this.getCommendList();
      this.collectMsgInit();
      this.ConcernMsgInit();
    }
  },
  created() {
    this.getArticleItem();
    this.getCommendList();
    this.getCommentData();
    this.collectMsgInit();
  }
}
</script>

<style lang="scss" scoped>
#Article {
  background-color: #fff;
  .article-video {
    width: 100%;
    video {
      width: 100%;
    }
  }
  .title {
    color: #212121;
    font-size: 32px;
    padding: 0 24px;
    margin-top: 16px;
    > span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      border-radius: 40px;
      color: #fb7299;
      background-color: #f4f4f4;
      padding: 0 12px;
    }
  }
  .userinfo {
    margin-top: 16px;
    .name {
      color: #212121;
      .up {
        display: inline-block;
        color: #212121;
        border: 1px solid #212121;
        border-radius: 10px;
        margin-right: 16px;
      }
    }
    span {
      color: #999;
      margin-left: 16px;
    }
  }
  .toolbar {
    display: flex;
    color: #999;
    padding: 22px 24px;
    border-bottom: 1px solid #eee;
    > span {
      display: flex;
      align-items: center;
      margin-right: 24px;
      > svg {
        width: 40px;
        height: 40px;
        margin: 0 12px;
      }
    }
  }
  .switcher {

    > .header {
      display: flex;
      line-height: 80px;
      padding: 0 32px;
      > a {
        display: flex;
        justify-content: center;
        flex: 1;
        align-items: center;
        color: #505050;
        font-size: 28px;
      }
      .active {
        color: #fb7299;
        border-bottom: 4px solid #fb7299;
      }
    }
    > .v-card {
      display: inline-flex;
      flex-wrap: wrap;
    }
    > .comment {
      position: relative;
      padding: 24px;
      border-bottom: 1px solid #eee;
      > .head {
        position: absolute;
        left: 0;
        top: 0;
        width: 60px;
        height: 60px;
        margin-top: 3px;
        padding: 24px;
         img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      > .detail {
        margin-left: 90px;
        > .name {
          color: #757575;
          font-size: 26px;
        }
        > .date {
          color: #999;
          font-size: 24px;
          margin-top: 14px;
        }
        > .content {
          color: #212121;
          font-size: 26px;
          margin-top: 18px;
        }
        > .reply {
          color: #212121;
          background-color: #f4f4f4;
          margin-top: 20px;
          padding: 20px;
          > p {
            > .name {
              color: #61a3e0;
            }
            > .content {
              font-size: 26px;
            }
          }
        }
      }
    }

  }
}
</style>