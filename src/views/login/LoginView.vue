<template>
  <div class="login-box">
    <div class="login-item">
      <!-- 登录标题 -->
      <p>OA系统登录</p>
      <!-- 登录表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <!-- 用户名 -->
        <el-form-item prop="account">
          <el-input
            class="login-input"
            v-model.trim="ruleForm.account"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
            autocomplete="off"
            prop="account"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            class="login-input"
            v-model.trim="ruleForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            autocomplete="off"
            prop="password"
          ></el-input>
        </el-form-item>
        <!-- 验证码  -->
        <el-form-item prop="code" class="code-item">
          <el-input
            class="login-input code"
            v-model.trim="ruleForm.code"
            placeholder="验证码"
            autocomplete="off"
            prop="code"
          ></el-input>
          <p class="codeImg" @click="getPic">验证码图片</p>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="login-btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 忘记密码 -->
      <p class="password" @click="showPwdDialog">忘记密码?</p>
      <!-- 登录底部 -->
      <p class="footer-p">
        @2022第六组版权所有京ICP证070791号京公网安备11010502025545号
      </p>
    </div>

    <PasswordDialog
      :dialogFormVisible="dialogFormVisible"
      @submit="submit"
    ></PasswordDialog>
  </div>
</template>

<script>
import PasswordDialog from './PasswordDialog.vue'
import { setToken } from '../../untils/auth'
export default {
  components: { PasswordDialog },
  data() {
    // 用户名校验
    var checkAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm.account !== '') {
          let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
          if (!reg.test(this.ruleForm.account)) {
            callback(new Error('用户名以字母开头5-16字节,允许字母数字下划线)'))
          }
        }
        callback()
      }
    }
    // 密码校验
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.password !== '') {
          let regPass = /^[a-zA-Z]\w{5,17}$/
          if (!regPass.test(this.ruleForm.password)) {
            callback(
              new Error('密码以字母开头,长度6~18位只能包含字母、数字和下划线')
            )
          }
        }
        callback()
      }
    }

    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      }
      callback()
    }
    return {
      // 登录表单数据
      ruleForm: {
        account: '', //用户名
        password: '', //密码
        code: '' //验证码
      },
      // 登录校验
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        code: [{ validator: validateCode, trigger: 'blur' }],
        account: [{ validator: checkAccount, trigger: 'blur' }]
      },
      // 忘记密码
      dialogFormVisible: false
    }
  },
  created() {
    // this.getPic()
  },
  mounted() {},
  methods: {
    // 点击登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.get('/effect/user/login').then((res) => {
            console.log(res)
            if (res.data.code == 200) {
              setToken(res.data.login.token)
              this.$message({
                message: res.data.login.msg,
                type: 'success'
              })
              this.$router.push('/home')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submit() {
      this.dialogFormVisible = false
    },
    // 显示忘记密码弹框
    showPwdDialog() {
      this.dialogFormVisible = !this.dialogFormVisible
    },
    // 点击验证码获取图片
    getPic() {}
  }
}
</script>

<style scoped lang="scss">
// 登录背景图片
.login-box {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url('/public/login.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // 登录模块
  .login-item {
    position: relative;
    width: 450px;
    height: 400px;
    margin: 150px auto;
    background-color: #fff;
    text-align: center;
    padding: 10px 60px;
    border-radius: 30px;
    // 尾部内容
    .footer-p {
      display: inline-block;
      width: 450px;
      margin-left: -60px;
      padding-top: 25%;
      color: #aaa;
      font-size: 13px;
    }
    // 记住密码
    .password {
      position: absolute;
      right: 62px;
      top: 169px;
      font-size: 12px;
      color: #f3c437;
    }
    // 标题
    p {
      font-size: 25px;
      margin: 20px 0;
    }
    // 登录input
    .login-input {
      border-radius: 20px !important;
    }
    // 登录按钮
    .login-btn {
      width: 85%;
      height: 45px;
      background-color: #d3bef6;
      color: #fff;
      border-radius: 12px;
      font-size: 18px;
      margin: 20px 0;
    }
    // 验证码
    .code {
      width: 200px;
      text-align: left;
      float: left;
    }
    // 验证码图片
    .codeImg {
      width: 105px;
      height: 40px;
      border-radius: 17px;
      float: right;
      font-size: 14px;
      color: #ccc;
      margin: 0;
      border: 1px solid #dcdfe6;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
