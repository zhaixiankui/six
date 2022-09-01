<template>
	<div>
		<!-- 搜索部分 -->
		<p class="search-p">
			姓名：<el-input class="input" v-model="name" placeholder="请输入姓名"></el-input> 所属部门：<el-input
				class="input"
				v-model="department"
				placeholder="请输入部门"
			></el-input>
			手机号：<el-input class="input" v-model="tel" placeholder="请输入手机号"></el-input>
		</p>
		<!-- 按钮部分 -->
		<p class="button-p">
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-right">重置</el-button>
			<el-button class="adduser" icon="el-icon-circle-plus-outline" @click="addchange">新增用户</el-button>
		</p>
		<!-- 表格部分 -->
		<el-table
			:data="tableData"
			border
			style="width: 100%"
			stripe
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
		>
			<el-table-column prop="id" label="id" width="80"> </el-table-column>
			<el-table-column prop="name" label="用户名称" width="150"> </el-table-column>
			<el-table-column prop="account" label="账号" width="150"> </el-table-column>
			<el-table-column prop="tel" label="手机号" width="150"> </el-table-column>
			<el-table-column prop="role" label="所属角色" width="150"> </el-table-column>
			<el-table-column prop="rank" label="所属职级" width="150"> </el-table-column>
			<el-table-column prop="department" label="所属部门" width="150"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini"
						@click="handleEdit(scope.$index, scope.row)"
						icon="el-icon-edit"
						style="color: #fff; background-color: #7aabf6"
						>修改</el-button
					>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete"
						>删除</el-button
					>
					<el-button size="mini" @click="handleDetails(scope.$index, scope.row)" icon="el-icon-s-tools">详情</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页部分 -->
		<el-pagination
			style="float: right; margin: 20px"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page.sync="page"
			:page-size="100"
			layout="total, prev, pager, next"
			:total="1000"
		>
		</el-pagination>
		<!-- 对话框部分 -->
		<Dialog v-if="dialogVisible" ref="from" @resetForm="resetForm"></Dialog>
	</div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
	// eslint-disable-next-line vue/no-unused-components
	components: { Dialog },
	data() {
		return {
			// 搜索
			name: '',
			tel: '',
			department: '',
			// 当前页
			page: 1,
			// 表格数据
			tableData: [
				{
					id: 1, //id
					name: '王小虎', //用户名
					account: 'admin', //账号
					tel: 18530722632, //手机号
					role: '管理员', //角色名称
					rank: '经理', //职级
					post: '销售', //岗位
					department: '人事' //部门
				}
			],
			// 编辑添加详情
			emit: true,
			// 对话框状态
			dialogVisible: false
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 修改对话框状态
		resetForm() {
			this.dialogVisible = false
		},
		// 分页
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		},
		// 添加
		addchange() {
			this.dialogVisible = true
			this.emit = true
			this.$nextTick(() => {
				this.$refs.from.addchange()
			})
		},
		// 详情
		handleDetails(index, row) {
			// console.log(index, row)
			this.dialogVisible = true
			this.from = null
			this.$nextTick(() => {
				this.$refs.from.detailschange(row)
			})
		},
		// 修改
		handleEdit(index, row) {
			// console.log(index, row)
			this.dialogVisible = true
			this.from = false
			this.$nextTick(() => {
				this.$refs.from.emitchange(row)
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
.search-p {
	.input {
		width: 250px;
		margin-right: 40px;
	}
}
.button-p {
	margin: 20px 0;
	.adduser {
		background-color: #c2c2fb;
		float: right;
		color: #fff;
	}
}
</style>
