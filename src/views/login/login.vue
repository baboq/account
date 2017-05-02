<template lang="pug">
.arch-login
  .arch-logo
    img(src="../../../static/images/login.png")
  .arch-login-wapper
    el-form.demo-ruleForm(:model='ruleForm', :rules='rules', ref='ruleForm', label-width='0px')
      el-form-item(prop='account', auto-complete='on')
        el-input(v-model='ruleForm.account', placeholder='账号')
      el-form-item(prop='checkPass', auto-complete='on')
        el-input(type='password', placeholder='密码', v-model='ruleForm.checkPass', @keyup.enter.native="submitForm('ruleForm')")
      .arch-login-btn
        el-button(type='primary', @click="submitForm('ruleForm')") 登录
      p(style='font-size:12px;line-height:30px;color:#999;')
</template>

<script>
  import { doLogin } from '../../api/archapi';
  import { hex_md5 } from '../../../static/js/md5';
  export default {
    data() {
      return {
        logining: false,
        ruleForm: {
          account: 'admin',
          checkPass: '123456'
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        checked: true
      };
    },
    methods: {
      submitForm(formName) {
        var _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = { username: this.ruleForm.account, password: hex_md5(this.ruleForm.checkPass) };
            doLogin(loginParams).then(data => {
              this.logining = false;
              let { code, msg, user, name } = data;
              if (code !== 200) {
                  this.$message({
                    message: msg,
                    type: 'error'
                  });
                } else {
                    sessionStorage.setItem('user', JSON.stringify(user));
                    this.$router.push({ path: '/dashboard' });
                  }
                });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="stylus">
  #vheader, #vsider
    display none

  .arch-login
    position relative
    width 100%
    height 100%
    background #324157
    z-index 10
  .arch-logo
    position absolute
    top 50%
    width 100%
    margin-top -230px
    text-align center
    font-size 30px
    color #fff
  .arch-login-wapper
    position absolute
    left 50%
    top 50%
    width 300px
    height 160px
    margin -150px 0 0 -190px
    padding 40px
    border-radius 5px
    // background #fff
  .arch-login-btn
      text-align  center
  .arch-login-btn button
      width 100%
      height 36px
</style>
