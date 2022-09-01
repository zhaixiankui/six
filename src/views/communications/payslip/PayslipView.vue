<template>
  <div>
    <div class="top">
      <p>姓名</p>
      <p>
        <el-input
          v-model="name"
          placeholder="请输入姓名"
          class="name"
        ></el-input>
      </p>
      <p>账号</p>
      <p>
        <el-input
          v-model="names"
          placeholder="请输入账号"
          class="names"
        ></el-input>
      </p>
      <p>手机号</p>
      <p>
        <el-input
          v-model="tel"
          placeholder="请输入手机号"
          class="tel"
        ></el-input>
      </p>
    </div>
    <p class="p">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
      <el-button type="info">下载工资条模板</el-button>
      <el-button>上传</el-button>
      <el-button icon="el-icon-circle-plus-outline" class="xin" @click="tan"
        >新增材料</el-button
      >
    </p>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      stripe
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="Attendance" label="出勤"> </el-table-column>
      <el-table-column prop="Absenteeism" label="旷工"> </el-table-column>
      <el-table-column prop="leave" label="请假"> </el-table-column>
      <el-table-column prop="basepay" label="基本工资"> </el-table-column>
      <el-table-column prop="Postsalary" label="岗位工资"> </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button
            class="edit-btn"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            class="del-btn"
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页  -->
    <div class="footer">
      <div class="right">
        <!-- 分页 -->
        <ul>
          <li><p>共20条</p></li>
          <li><el-button>上一页</el-button></li>
          <li>2/5</li>
          <li><el-button>下一页</el-button></li>
        </ul>
      </div>
    </div>

    <!-- 新增工资条弹框 -->
    <el-dialog
      title="新增工资条"
      :model="form"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择姓名">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-form-item>
        <el-form-item label="其他信息" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >新增</el-button
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: '', //请输入姓名输入框
      dialogVisible: false, //弹框状态
      // 表格数据
      tableData: [
        {
          id: '2',
          name: '3',
          tel: '4',
          Attendance: '5',
          Absenteeism: '44',
          leave: '33',
          basepay: '22',
          Postsalary: '11'
        }
      ],
      ruleForm: {
        region: '',
        desc: ''
      },
      rules: {
        region: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },

      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
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
    tan() {
      this.dialogVisible = true //弹框状态
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  margin-bottom: 20px;
  p {
    margin-right: 30px;
    span {
      margin-right: 10px;
    }
  }
}
.name {
  width: 300px;
}
.p {
  margin-bottom: 20px;
}
.footer {
  margin-top: 20px;
  .right {
    float: right;
    ul {
      height: 40px;
      line-height: 40px;
      display: flex;
      li {
        margin-left: 27px;
      }
    }
  }
}
.xin {
  float: right;
  background-color: #d9bffb;
  color: white;
}
.inp {
  width: 200px;
}
.edit-btn {
  background-color: #7aabf6;
  color: white;
}
.del-btn {
  background-color: #f77d6c;
  color: white;
}
</style>
