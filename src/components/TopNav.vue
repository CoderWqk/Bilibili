<template>
  <div id="TopNav">
    <div class="left"></div>
    <div class="title">{{middle}}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: [ 'middle' ]
};
</script>

<style lang="scss" scoped>
#TopNav {
  display: flex;
  width: 100%;
  height: 88px;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
   div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .title {
    font-size: 32px;
  }
  .right{
    font-size: 12px;
  }
}
</style>