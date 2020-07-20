<template>
  <div id="Register">
    <top-nav middle="注册Bilibili">
      <span slot="right" @click="$router.push('/login')">切换到登录</span>
    </top-nav>
    <input-text
      label="姓名"
      placeholder="请输入姓名"
      type="text"
      rule="^.{6,16}$"
      style="margin: 12px 0; border:1px solid #eaeaea"
      @inputChange="text => userMsg.name = text"
    />
    <input-text
      label="账号"
      placeholder="请输入账号"
      type="text"
      rule="^.{6,16}$"
      style="border:1px solid #eaeaea"
      @inputChange="text => userMsg.username = text"
    />
    <input-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      style="margin-top: -1px; border:1px solid #eaeaea"
      @inputChange="text => userMsg.password = text"
    />
    <Button btnName="注册" @submit="registerSubmit" />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";
export default {
  data() {
    return {
      userMsg: {
        name: "",
        username: "",
        password: ""
      }
    };
  },
  components: {
    TopNav,
    InputText,
    Button
  },
  methods: {
    async  registerSubmit() {
      let rulg = /^.{6,16}$/;
      if (rulg.test(this.userMsg.name) && rulg.test(this.userMsg.username) && rulg.test(this.userMsg.password)) {
        const res = await this.$http.post('/register', this.userMsg);
        if(res.code == 200) {
          // 注册成功
          this.$toast.fail(res.msg);
          this.$router.push('/login');
        }else if(res.code == 302) {
          // 注册失败，账号已经存在
          this.$toast.fail(res.msg);
        }
      }else {
        this.$toast.fail("格式不正确，请输入6-16位信息");
      }
    }
  }
};
</script>

<style>
</style>
