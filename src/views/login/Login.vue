<template>
  <div id="Login">
    <top-nav middle="登录Bilibili">
      <span slot="right" @click="$router.push('/register')">切换到注册</span>
    </top-nav>
    <input-text
      label="账号"
      placeholder="你的手机/邮箱"
      rule="^.{6,16}$"
      style="margin-top: 32px; border:1px solid #eaeaea"
      @inputChange="text => userMsg.username = text"
    />
    <input-text
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      type="password"
      style="margin-top: -1px; border:1px solid #eaeaea"
      @inputChange="text => userMsg.password = text"
    />
    <Button btnName="登录" @submit="loginClick"/>
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
    async  loginClick() {
      let rulg = /^.{6,16}$/;
      if(rulg.test(this.userMsg.username) && rulg.test(this.userMsg.password)) {
        const res = await this.$http.post('/login', this.userMsg);
        if(res.code == 200) {
          // 登录成功
          this.$toast.fail(res.msg);
          sessionStorage.setItem("id", res.id);
          sessionStorage.setItem("token", res.token);
          this.$router.push('/profile');
        }else {
          this.$toast.fail(res.msg);
        }
      }else {
        this.$toast.fail("格式不正确，请重新输入");
      }
    }
  }
};
</script>

<style>
</style>