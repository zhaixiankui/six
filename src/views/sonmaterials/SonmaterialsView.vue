<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="boxs">
		<!-- 材料管理 -->
		<ul>
			<li>材料名称</li>
			<li><el-input placeholder="请输入内容" class="inp"></el-input></li>
			<li><el-button icon="el-icon-search">查询</el-button></li>
			<li><el-button icon="el-icon-refresh-right">重置</el-button></li>
			<li>
				<el-button icon="el-icon-circle-plus-outline" class="xin" @click="tan">新增材料</el-button>
			</li>
		</ul>
		<!-- 表格 -->
		<el-table
			:data="tableData"
			border
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
		>
			<el-table-column prop="id" label="id"> </el-table-column>
			<el-table-column prop="name" label="材料名称"> </el-table-column>
			<el-table-column prop="address" label="材料地址"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button class="xia()" @click="x(scope)">下载</el-button>
					<el-button @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="footer">
			<div class="right">
				<!-- 分页 -->
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[100, 200, 300, 400]"
					:page-size="100"
					layout="total, sizes, prev, pager, next, jumper"
					:total="400"
				>
				</el-pagination>
			</div>
		</div>
		<!-- 新增材料弹框 -->
		<popup :dialogFormVisible="dialogFormVisible" @add="add" @cancel="cancel"></popup>
	</div>
</template>

<script>
import popup from './popup.vue'
export default {
	components: {
		popup
	},
	data() {
		return {
			tableData: [
				{
					id: '1',
					name: '1',
					address: '1'
				}
			],
			dialogFormVisible: false, //弹框状态
			currentPage: 1 //分页
		}
	},
	//过滤器
	filters: {},
	created() {},
	//计算属性
	computed: {},
	mounted() {},
	methods: {
		/**确定新增 */
		add() {
			this.dialogFormVisible = false
		},
		/**取消弹框 */
		cancel() {
			this.dialogFormVisible = false
		},
		// 分页
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		},
		// 新增按钮
		tan() {
			this.dialogFormVisible = true //弹框状态
		},
		x() {},
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
.inp {
	width: 300px;
	margin-left: 30px;
}
ul {
	height: 40px;
	display: flex;
	line-height: 40px;
	margin-bottom: 40px;
	li {
		margin-right: 15px;
	}
}
.xin {
	background-color: #c2c2fb;
	color: #fff;
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
.bb {
	display: flex;
	margin-top: 20px;
}
.sahng {
	margin-left: 30px;
}
</style>
