<template>
  <div>
    <button @click="btnClick">{{btnName}}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      default() {
        return "";
      }
    }
  },
  methods: {
    btnClick() {
      this.$emit('submit');
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 90px;
  border-radius: 45px;
  background-color: #ff9db5;
  margin-top: 50px;
}
</style>