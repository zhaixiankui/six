<template>
	<div>
		<!-- 职级岗位 -->
		<div class="rank">
			<p>
				<span>职级名换</span>
				<el-input v-model="user" placeholder="请输入姓名" class="inp"></el-input>
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-left">重置</el-button>
				<el-button icon="el-icon-circle-plus-outline" @click="added" class="btn">新增职级</el-button>
			</p>
			<!-- 表格数据 -->
			<div class="table">
				<template>
					<el-table :data="tableData" border style="width: 100%">
						<el-table-column type="index" label="id" align="center" width="100"> </el-table-column>
						<el-table-column prop="rank" label="职级名称" align="center"> </el-table-column>
						<el-table-column prop="remarks" label="备注" align="center"> </el-table-column>
						<el-table-column label="操作" align="center">
							<template slot-scope="scope">
								<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</template>
				<!-- 分页功能 -->
				<div class="paging">
					<el-pagination
						:current-page="currentPage"
						:page-sizes="[100, 200, 300, 400]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="400"
					>
					</el-pagination>
				</div>
			</div>
			<!-- 对话框 -->
			<Dialog v-if="dialogFormVisible" ref="dialogForm" @close="close"></Dialog>
		</div>
	</div>
</template>

<script>
import Dialog from './dialog.vue'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: '',
	components: { Dialog },
	data() {
		return {
			user: '', //用户
			tableData: [
				{
					rank: '中级讲师',
					remarks: '市优秀讲师'
				},
				{
					rank: '高级级讲师',
					remarks: '剩优秀讲师'
				}
			],
			dialogFormVisible: false, //弹框状态
			row: {}, // 编辑当前行的数据
			currentPage: 1 //分页第一页
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 编辑
		handleEdit(index, row) {
			this.dialogFormVisible = true
			// 当前行的数据 回显需要
			this.$nextTick(() => {
				this.$refs.dialogForm.handleEdit(row)
			})
		},
		// 删除
		handleDelete(index, row) {
			console.log(index, row)
		},
		// 新增职级
		added() {
			this.dialogFormVisible = true
			// 当前行的数据 回显需要
			this.$nextTick(() => {
				this.$refs.dialogForm.added()
			})
		},
		// 分页
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		},
		// 关闭弹框
		close() {
			this.dialogFormVisible = false
		}
	}
}
</script>
<style scoped lang="scss">
.paging {
	float: right;
	margin: 20px 0 0 0;
}
.rank {
	padding: 20px;
	.inp {
		width: 240px;
		margin: 0 10px;
	}
	.btn {
		background-color: #c2c2fb;
		color: #fff;
	}
	.table {
		margin-top: 50px;
	}
}
</style>
