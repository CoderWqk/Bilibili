<template>
  <div>
    <van-field 
      v-model="text" 
      :label="label" 
      :placeholder="placeholder"
      :type="type"
      :rule="rule"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  props: {
    label: {
      type: String,
      default() {
        ""
      }
    },
    placeholder: {
      type: String,
      default() {
        ""
      }
    },
    type: {
      type: String,
      default() {
        ""
      }
    },
    rule: {
      type: String,
      default() {
        ""
      }
    }
  },
  methods: {
    handleRule() {
      const rue = new RegExp(this.rule);
      if(rue.test(this.text)) {
        this.$emit('inputChange', this.text);
      }
    }
  },
  watch: {
    text() {
      this.handleRule();
    }
  }
};
</script>

<style>
</style>