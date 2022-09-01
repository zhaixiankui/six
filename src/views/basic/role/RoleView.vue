<template>
	<div>
		<!-- 搜索部分 -->
		<p class="search-p">
			角色名称：<el-input class="input" v-model="name" placeholder="请输入姓名"></el-input>
			<!-- 按钮部分 -->
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-right">重置</el-button>
			<el-button class="adduser" icon="el-icon-circle-plus-outline" @click="addchange">新增角色</el-button>
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
			<el-table-column prop="id" label="id" width="180"> </el-table-column>
			<el-table-column prop="name" label="角色名称" width="280"> </el-table-column>
			<el-table-column prop="tel" label="备注" width="280"> </el-table-column>
			<el-table-column label="操作">
				<!-- 按钮  -->
				<template slot-scope="scope">
					<el-button
						size="mini"
						@click="handleEdit(scope.$index, scope.row)"
						icon="el-icon-edit"
						style="color: #fff; background-color: #7aabf6"
						>修改</el-button
					>
					<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.$index, scope.row)"
						icon="el-icon-delete"
						style="margin-left: 50px"
						>删除</el-button
					>
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
		<!-- 角色对话框部分 -->
		<Dialog v-if="dialogVisible" ref="from" @resetForm="resetForm"></Dialog>
	</div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
	components: { Dialog },
	data() {
		return {
			// 搜索
			name: '',
			tel: '',
			// 当前页
			page: 1,
			// 表格数据
			tableData: [
				{
					id: 1, //id
					name: '王小虎', //角色名称
					tel: 18530722632, //备注
					jurisdiction: [
						{
							value: 1,
							label: '东南',
							children: [
								{
									value: 2,
									label: '上海',
									children: [
										{ value: 3, label: '普陀' },
										{ value: 4, label: '黄埔' },
										{ value: 5, label: '徐汇' }
									]
								}
							]
						}
					]
				}
			],
			// 判断添加编辑
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
		// 修改
		handleEdit(index, row) {
			console.log(index, row)
			this.dialogVisible = true
			this.emit = false
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
	margin-bottom: 40px;
	.input {
		width: 250px;
		margin-right: 40px;
	}
	.adduser {
		background-color: #c2c2fb;
		color: #fff;
	}
}
</style>
