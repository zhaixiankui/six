<template>
  <div>
    <!-- 审批详情弹出框 -->
    <el-dialog
      title="审批详情"
      :visible.sync="dialogFormVisible"
      :before-close="close"
    >
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="申请人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="审批类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请假申请">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="1">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="所属部门" prop="region">
          <el-select v-model="ruleForm.region" placeholder="人事部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审批状态" prop="region">
          <el-select v-model="ruleForm.region" placeholder="已审批">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前审批人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class="form-right">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >撤回</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: '',
  components: {},
  data() {
    return {
      // 弹框状态
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {}
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    // 打开弹框
    edit(row) {
      this.dialogFormVisible = true
      this.ruleForm = row
    },
    // 撤回
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消
    resetForm(formName) {
      this.dialogFormVisible = false
      this.$refs[formName].resetFields()
      this.$emit('close')
    },
    // 关闭弹框
    close() {
      this.resetForm('ruleForm')
    }
  }
}
</script>
<style scoped lang="scss">
.demo-ruleForm {
  overflow: hidden;
  .form-right {
    float: right;
    .el-button:nth-child(1) {
      background-color: #c2c2fb;
      color: #fff;
    }
  }
}
</style>
