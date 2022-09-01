<template>
	<!-- 部门管理 -->
	<div class="boxs">
		<div class="branch-box">
			<el-row :gutter="20">
				<el-col :span="1.5">部门名称</el-col>
				<el-col :span="5"><el-input v-model="userName" placeholder="请输入姓名"></el-input></el-col>
				<el-col :span="2"><el-button icon="el-icon-search">查询</el-button></el-col>
				<el-col :span="2"><el-button icon="el-icon-refresh-right">重制</el-button></el-col>
				<el-col :span="2"
					><el-button icon="el-icon-circle-plus-outline" class="addMenuBtn" @click="added">新增部门</el-button></el-col
				>
			</el-row>
			<div class="table-box">
				<!-- 表格 -->
				<el-table
					:data="tableData"
					style="width: 100%"
					border
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
				>
					<el-table-column label="部门名称" prop="mname" width="180"> </el-table-column>
					<el-table-column label="备注" prop="murl"> </el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="block">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page.sync="page"
					:page-size="pagesize"
					layout="total, prev, pager, next"
					:total="tableData.length"
				>
				</el-pagination>
			</div>
			<!-- 弹框 -->
			<!-- <popup :dialogFormVisible="dialogFormVisible" @add="add" @cancel="cancel"></popup> -->
			<popup v-if="dialogFormVisible" ref="dialog" @cancel="cancel"></popup>
		</div>
	</div>
</template>

<script>
import popup from './popup.vue'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: '',
	components: {
		popup
	},
	data() {
		return {
			dialogFormVisible: false, // 弹框状态
			isEdit: false, //判断编辑
			tableData: [
				{
					mname: '123',
					murl: '234'
				},
				{
					mname: '张三',
					murl: '饿了'
				}
			],
			page: 1, // 当前页
			pagesize: 2, // 每页数量
			userName: '' // 搜索数据
		}
	},
	created() {},
	mounted() {},
	methods: {
		/**确定新增 */
		// add() {
		// 	this.dialogFormVisible = false
		// },
		/**取消弹框 */
		cancel() {
			this.dialogFormVisible = false
		},
		/**打开弹框 */
		added() {
			this.dialogFormVisible = true
			this.isEdit = false
			this.$nextTick(() => {
				this.$refs.dialog.added()
			})
		},
		// 每页数量
		handleSizeChange(val) {
			this.pagesize = val
		},
		// 当前页
		handleCurrentChange(val) {
			this.page = val
		},
		// 编辑
		handleEdit(index, row) {
			console.log(row)
			this.dialogFormVisible = true
			this.isEdit = true
			this.$nextTick(() => {
				this.$refs.dialog.handleEdit(row)
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
		}
	}
}
</script>
<style scoped lang="scss">
.boxs {
	padding: 20px;
}
.demo-ruleForm {
	overflow: hidden;
	.form-right {
		float: right;
	}
}
.el-dialog {
	.el-input {
		width: 40%;
	}
}
.table-box {
	margin: 50px 0;
}
.block {
	.el-pagination {
		float: right;
	}
}
.el-row {
	display: flex;
	align-items: center;
	.addMenuBtn {
		background-color: #c2c2fb;
		color: #fff;
	}
}
</style>
