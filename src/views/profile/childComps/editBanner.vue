<template>
  <div id="editBanner" @click="editClick">
    <span>{{title}}</span>
    <span><slot name="userMsg"></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ""
      }
    }
  },
  methods: {
    editClick() {
      this.$emit("bannerClick");
    }
  }
}
</script>

<style lang="scss" scoped>
#editBanner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  span {
    color: #505050;
    font-size: 30px;
    a {
      color: #999;
    }
    img {
      width: 92px;
      height: 92px;
      border-radius: 50%;
    }
  }
}
</style>