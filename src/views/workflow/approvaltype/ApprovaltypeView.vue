<template>
  <div>
    <!-- 添加按钮 -->
    <div class="top">
      <el-button class="addBtn" icon="el-icon-plus" @click="addApp"
        >添加类型</el-button
      >
    </div>

    <!-- 审批流程表 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column label="id" type="index"> </el-table-column>
      <el-table-column prop="name" label="类型名称"> </el-table-column>
      <el-table-column prop="name" label="最后修改人"> </el-table-column>
      <el-table-column prop="date" label="最后修改时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="edit-btn"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            class="del-btn"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="page-box">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>

    <!-- 添加类型弹出框 -->
    <Dialog
      v-if="dialogFormVisible"
      ref="dialog"
      @addApprove="addApprove"
      @closeDia="closeDia"
    ></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  components: { Dialog },
  data() {
    return {
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
      // 添加类型弹出框数据
      dialogFormVisible: false
      // row: {}
      // isEdit: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.dialog.edit(row)
      })
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row)
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
    // 添加类型弹框显示
    addApp() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.dialog.added()
      })
    },
    // 取消弹框
    closeDia() {
      this.dialogFormVisible = false
    },
    // 确定提交
    addApprove() {
      this.dialogFormVisible = false
    }
  }
}
</script>
<style scoped lang="scss">
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
  background-color: #cba6fb;
  color: white;
}
.edit-btn {
  background-color: #7aabf6;
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
