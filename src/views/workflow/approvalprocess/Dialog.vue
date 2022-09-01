<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-dialog
      :title="isEdit ? '编辑审批流程' : '审批流程'"
      :visible.sync="dialogFormVisible"
      width="45%"
    >
      <el-form :model="form">
        <el-form-item label="流程类型">
          <el-select v-model="form.region" placeholder="请假流程">
            <el-option label="请假流程" value="shanghai"></el-option>
            <el-option label="换车流程" value="beijing"></el-option>
            <el-option label="出差流程" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item label="流程说明">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item class="flow-box">
          <p>流程审批</p>
          <div class="box" v-for="(item, index) in form.arr" :key="index">
            <span v-show="index == 0">第一级审批</span>
            <span v-show="index == 1">第二级审批</span>
            <span v-show="index == 2">第三级审批</span>
            <span v-show="index == 3">第四级审批</span>
            <span v-show="index == 4">第五级审批</span>
            <el-select v-model="item.value" placeholder="当前部门负责人">
              <el-option
                v-for="child in item.options"
                :key="child.value"
                :label="child.label"
                :value="child.value"
              >
              </el-option>
            </el-select>
          </div>
          <el-button class="addBtn" icon="el-icon-plus" @click="addProcess"
            >添加审批层级</el-button
          >
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="sub-btn" type="primary" @click="addAppro"
          >立即创建</el-button
        >
        <el-button @click="closeDia">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: '1',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        arr: [
          {
            value: '',
            options: [
              {
                value: '选项1',
                label: '黄金糕'
              }
            ]
          },
          {
            value: '',
            options: [
              {
                value: '选项1',
                label: '黄金糕'
              }
            ]
          },
          {
            value: '',
            options: [
              {
                value: '选项1',
                label: '黄金糕'
              }
            ]
          }
        ]
      },
      formLabelWidth: '120px',
      isEdit: false,
      dialogFormVisible: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 编辑回显
    edit(row) {
      this.dialogFormVisible = true
      this.isEdit = true
      this.form.name = row.name
    },
    // 添加审批流程弹出框
    added() {
      this.dialogFormVisible = true
      this.isEdit = false
    },
    // 确定
    addAppro() {
      this.$emit('addAppro')
    },
    // 取消关闭弹框
    closeDia() {
      this.$emit('closeDia')
    },
    // 添加审批层级
    addProcess() {
      console.log(11)
      this.form.arr.push({
        value: '',
        options: [
          {
            value: '',
            label: ''
          }
        ]
      })
    }
  }
}
</script>
<style scoped lang="scss">
.sub-btn {
  background-color: #b886f8;
  color: white;
}
</style>
