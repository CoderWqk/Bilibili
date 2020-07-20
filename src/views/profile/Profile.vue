<template>
  <div id="Profile">
      <Header />
      <div class="banner">
        <img src="@/assets/img/bannerTop.png" alt="">
      </div>

      <profile-detail></profile-detail>


  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ProfileDetail from './childComps/ProfileDetail.vue';
export default {
  components: {
    Header,
    ProfileDetail
  }
}
</script>

<style lang="scss" scoped>
#Profile {
  .banner {
    width: 100%;
    height: 180px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
}
</style>