<template>
  <div>
    <!-- eslint-disable vue/no-mutating-props -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="40%">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            v-model="ruleForm.userName"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label="新密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>

        <el-form-item label="再次输入" prop="code">
          <el-input
            v-model="ruleForm.code"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="subBtn" @click="submitForm('ruleForm')"
            >确认</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['dialogFormVisible'],
  components: {},
  data() {
    // 用户名校验
    var checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm.userName !== '') {
          this.$refs.ruleForm.validateField('checkPass')
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
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    // 再次输入密码校验
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.code) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        userName: '',
        password: '',
        code: ''
      },
      rules: {
        userName: [{ validator: checkUserName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        code: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 确认提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('submit')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.$emit('submit')
    },
    // 取消弹出框
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
<style scoped lang="scss">
.subBtn {
  background-color: #d3bef6;
  color: white;
}
</style>
