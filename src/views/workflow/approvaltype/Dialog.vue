<template>
  <div>
    <el-dialog
      :title="isEdit ? '编辑流程类型' : '添加流程类型'"
      :visible.sync="dialogFormVisible"
      width="40%"
    >
      <el-form :model="form">
        <el-form-item label="类型名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型模板" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请假模板">
            <el-option label="用车模板" value="shanghai"></el-option>
            <el-option label="借款模板" value="beijing"></el-option>
            <el-option label="出差模板" value="beijing"></el-option>
            <el-option label="报销模板" value="beijing"></el-option>
            <el-option label="转正模板" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDia">取 消</el-button>
        <el-button type="primary" @click="addApprove" class="sub-btn"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // props: ['dialogFormVisible', 'row', 'isEdit'],
  components: {},
  data() {
    return {
      // 表单数据
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      isEdit: false, //新增还是编辑弹框状态
      dialogFormVisible: false //弹框状态
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 取消关闭弹框
    closeDia() {
      this.$emit('closeDia')
    },
    // 确定打开弹框
    addApprove() {
      this.$emit('addApprove')
    },
    // 点击新增类型弹出框
    added() {
      this.isEdit = false
      this.dialogFormVisible = true
    },

    // 编辑回显
    edit(row) {
      this.isEdit = true
      this.dialogFormVisible = true
      this.form = row
    }
  }
}
</script>
<style scoped lang="scss"></style>
