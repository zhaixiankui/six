<template>
  <div>
    <div class="top">
      <p>
        <span>审批类型</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </p>
      <p>
        <span>申请人</span>
        <el-input v-model="searchVal" placeholder="请输入账号"></el-input>
      </p>
      <p>
        <span>审批状态</span>
        <el-input v-model="searchStatus" placeholder="请输入状态"></el-input>
      </p>
    </div>

    <div class="btn-box">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
      <el-button type="info" @click="add">新增申请</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="250"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      stripe
    >
      <el-table-column label="id" type="index"> </el-table-column>
      <el-table-column prop="name" label="申请人"> </el-table-column>
      <el-table-column prop="name" label="审批类型"> </el-table-column>
      <el-table-column prop="date" label="申请时间"> </el-table-column>
      <el-table-column prop="name" label="当前审批人"> </el-table-column>
      <el-table-column prop="name" label="审批状态"> </el-table-column>
      <el-table-column prop="name" label="所属部门"> </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="edit-btn"
            icon="el-icon-chat-dot-round"
            @click="htin(scope.row)"
            >详情</el-button
          >
          <el-button
            size="mini"
            class="del-btn"
            icon="el-icon-refresh-right"
            @click="recall"
            >撤回</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
    <!-- 审批详情弹出框 -->
    <Dialog v-if="addDialog" ref="addDial" @close="close"></Dialog>
    <!-- 新增申请弹出框 -->
    <Dialogs v-if="dialogFormVisible" ref="dialog" @close="close"></Dialogs>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
import Dialogs from './Dialogs.vue'
export default {
  components: {
    Dialog,
    Dialogs
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      value: '',
      searchVal: '',
      searchStatus: '',
      // 表格数据
      tableData: [
        {
          date: '2022年5月20日 14:09:23',
          name: '王小虎'
        },
        {
          date: '2022年5月20日 14:09:23',
          name: '王小虎'
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {},
      formLabelWidth: '130px',
      // 选择日期
      value1: '',
      // 选择时间
      value2: '',
      // 新增申请弹框状态
      addDialog: false,
      addForm: {
        name: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    htin(row) {
      this.addDialog = true
      this.$nextTick(() => {
        this.$refs.addDial.edit(row)
      })
    },
    add() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.dialog.edit()
      })
    },
    // 新增申请
    // 撤回
    recall() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 关闭弹框
    close() {
      this.dialogFormVisible = false
      this.addDialog = false
    }
  }
}
</script>
<style scoped lang="scss">
.appStep {
  width: 100%;
  display: flex;
}
.el-dialog {
  .el-input {
    width: 50%;
  }
}
.el-steps {
  margin-left: 20%;
}
.top {
  width: 100%;
  display: flex;
  p {
    display: flex;
    align-items: center;
    text-align: center;
    span {
      display: inline-block;
      width: 120px;
    }
  }
}
.btn-box {
  margin: 20px;
}
.page-box {
  width: 100%;
  .el-pagination {
    float: right;
  }
}
.el-table {
  margin: 20px 0;
}
.addBtn,
.sub-btn {
  background-color: #b886f8;
  color: white;
}
.edit-btn {
  background-color: #f4c438;
  color: white;
}
.del-btn {
  background-color: #f26161;
  color: white;
}
.sub-btn {
  background-color: #b886f8;
  color: white;
}
</style>
