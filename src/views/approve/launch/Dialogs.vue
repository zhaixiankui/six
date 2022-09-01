<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 新增申请弹出框 -->
    <el-dialog title="新增申请" :visible.sync="addDialog">
      <el-form
        ref="form"
        :model="addForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动区域">
          <el-select v-model="addForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="addForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col :span="1">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="addForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>

        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-form-item class="form-right">
          <el-button type="primary" @click="onSubmit">撤回</el-button>
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      addDialog: false,
      addForm: {
        name: ''
      }
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    // 确认撤回
    onSubmit() {},
    // 打开弹框
    edit() {
      this.addDialog = true
    },
    // 关闭弹框
    close() {
      this.addDialog = false
      this.$emit('close')
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
