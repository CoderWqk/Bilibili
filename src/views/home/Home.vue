<template>
  <div id="Home">
    <Header />
    <van-tabs v-model="activeTab" swipeable sticky animated>
      <van-tab v-for="(category, index) in categoryList" :title="category.title" :key="index">
        <van-list
          v-model="category.loading"
          :immediate-check="false"
          :finished="category.finished"
          finished-text="我也是有底线的"
          @load="onLoad(category)">
          <div class="v-card">
            <video-item v-for="(categoryItem, categoryIndex) in category.list" :key="categoryIndex" :detailItem="categoryItem"/>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import VideoItem from './childComps/VideoItem.vue';
export default {
  data() {
    return {
      categoryList: [],
      activeTab: 0
    }
  },
  components: {
    Header,
    VideoItem
  },
  methods: {
    async getCategoryList() {
      const res = await this.$http.get('/category');
      this.changeCategoryList(res);
    },
    changeCategoryList(data) {
      const newCategoryList = data.map((item, index)=> {
        item.list = [];
        item.loading = false;
        item.finished = false;
        item.page = 0;
        item.pageSize = 10;
        return item;
      })
      this.categoryList = newCategoryList;
      this.getArticleList();
    },
    async getArticleList() {
      const categoryItem = this.getCategoryItem();
      const res = await this.$http.get('/detail/' + categoryItem._id,{
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pageSize
        }
      });
      // 处理图片链接, 将没用的后缀删除
      res.forEach((ele, index) => {
        if(ele.img.indexOf('@480w_270h_1c') != -1) {
          ele.img = ele.img.substring(0, ele.img.indexOf('@480w_270h_1c'));
        }
      });
      categoryItem.list.push(...res);
      categoryItem.loading = false;
      // 判断数据是否已全部加载完
      if(res.length < 10) {
        categoryItem.finished = true;
      }
    },
    getCategoryItem() {
      let categoryItem = this.categoryList[this.activeTab];
      return categoryItem;
    },
    onLoad(data) {
      const categoryItem = this.getCategoryItem();
      setTimeout(() => {
        categoryItem.page += 1;
        this.getArticleList();
      }, 1000);
    }
  },
  watch: {
    activeTab() {
      this.getArticleList();
    }
  },
  mounted() {
    this.getCategoryList();
  }
}
</script>

<style lang="scss" scoped>
#Home {
  .v-card {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>