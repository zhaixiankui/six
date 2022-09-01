<template>
	<div class="Menu-box">
		<el-row :gutter="20">
			<el-col :span="1.5">菜单名称</el-col>
			<el-col :span="5"><el-input v-model="userName" placeholder="请输入姓名"></el-input></el-col>
			<el-col :span="2"><el-button icon="el-icon-search">查询</el-button></el-col>
			<el-col :span="2"><el-button icon="el-icon-refresh-right">重制</el-button></el-col>
			<el-col :span="2"
				><el-button icon="el-icon-circle-plus-outline" class="addMenuBtn" @click="added">新增菜单</el-button></el-col
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
				<el-table-column label="菜单名称" prop="mname" width="180"> </el-table-column>
				<el-table-column label="菜单路径" prop="murl"> </el-table-column>
				<el-table-column label="排序" prop="tier" width="80"> </el-table-column>
				<el-table-column label="菜单图标" prop="ask_off"> </el-table-column>
				<el-table-column label="菜单类型">
					<template slot-scope="scope">
						{{ scope.row.type == 0 ? '目录' : '菜单' }}
					</template>
				</el-table-column>
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
		<!-- 对话框 -->
		<Dialog v-if="dialogFormVisible" ref="dialogForm" @close="close"></Dialog>
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
			dialogFormVisible: false, // 弹框状态
			userName: '', // 搜索数据
			tableData: [
				{
					id: 1,
					mname: '首页',
					murl: '/',
					tier: 1,
					ask_off: 'http://127.0.0.1/state/img/权限.icon',
					type: 0,
					son: []
				},
				{
					id: 2,
					mname: '基础配置',
					murl: '/jichu',
					tier: 2,
					ask_off: 'http://127.0.0.1/state/img/权限.icon',
					type: 0,
					son: [
						{
							id: 3,
							mname: '角色管理',
							murl: '/role',
							tier: 1,
							ask_off: 'http://127.0.0.1/state/img/权限.icon',
							type: 1
						},
						{
							id: 4,
							mname: '用户管理',
							murl: '/user',
							tier: 2,
							ask_off: 'http://127.0.0.1/state/img/权限.icon',
							type: 1
						}
					]
				}
			],
			page: 1, // 当前页
			pagesize: 2 // 每页数量
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 打开添加弹框
		added() {
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs.dialogForm.added()
			})
		},
		/**每页数量 */
		handleSizeChange(val) {
			this.pagesize = val
		},
		/**当前页 */
		handleCurrentChange(val) {
			this.page = val
		},
		/**编辑 */
		handleEdit(index, row) {
			// 打开弹框
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs.dialogForm.handleEdit(row)
			})
		},
		/**删除 */
		handleDelete() {},
		/**关闭弹窗 */
		close() {
			this.dialogFormVisible = false
		}
	}
}
</script>
<style scoped lang="scss">
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
