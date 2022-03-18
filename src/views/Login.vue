<template>
  <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer" v-loading="loading"
      element-loading-text="Loading..." :element-loading-spinner="svg" element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(0, 0, 0, 0.8)">
      <h3 class="loginTitle">系统登陆</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" aria-autocomplete="false" v-model="loginForm.password" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input style="width:250px;margin-right:5px" type="text" aria-autocomplete="false" v-model="loginForm.code"
          placeholder="点击图片更换验证码">
        </el-input>
        <img :src="captchaUrl" @click="updateCapture">
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      captchaUrl: '/captcha?time=' + new Date(),
      loginForm: {
        username: 'admin',
        password: '123',
        code: '',
      },
      loading: false,
      checked: true,
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    updateCapture () {
      this.captchaUrl = '/captcha?' + new Date();
    },
    submitLogin () {
      this.$refs.loginForm.validate((valid) => {
        //if (valid) {
        if (1) {
          this.loading = true;
          //  this.postRequest('/login', this.loginForm).then(resp => {
          // if (resp) {
          if (1) {
            this.loading = false;
            //存储用户token
            // const tokenStr = resp.obj.tokenHead + resp.obj.token;
            // window.sessionStorage.setItem('tokenStr', tokenStr);
            //跳转首页
            this.$router.replace('/home');
          }
          //})
        } else {
          this.$message.error('请输入所有字段~');
          return false;
        }
      })
    }
  }
}
</script>

<style>
.loginTitle {
  margin: 0px auto 16px auto;
  text-align: center;
}
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginRemember {
  text-align: left;
  margin: 0px 0px 8px 0px;
}
</style>