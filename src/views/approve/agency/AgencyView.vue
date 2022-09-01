<template>
	<div class="boxs">
		<!-- 待办事项 -->
		<!-- 搜索框 -->
		<el-row :gutter="20">
			<el-col :span="6"
				><span>审批类型</span>
				<el-select v-model="fname" placeholder="请选择审批类型">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option> </el-select
			></el-col>
			<el-col :span="8"><span>申请人</span><el-input v-model="name" placeholder="请输入账号"></el-input> </el-col>
			<el-col :span="8"><span>审批状态</span> <el-input v-model="status" placeholder="请输入状态"></el-input></el-col>
		</el-row>
		<!-- 按钮 -->
		<div class="btn-box">
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-right">重制</el-button>
		</div>
		<!-- 表格 -->
		<div class="table-box">
			<el-table :data="tableData" stripe style="width: 100%" border>
				<el-table-column type="index" label="id" width="80"> </el-table-column>
				<el-table-column prop="name" label="申请人"> </el-table-column>
				<el-table-column prop="fname" label="审批类型"> </el-table-column>
				<el-table-column prop="create_time" label="申请时间" width="220"> </el-table-column>
				<el-table-column prop="aname" label="当前审批人"> </el-table-column>
				<el-table-column prop="status" label="审批状态"> </el-table-column>
				<el-table-column prop="dname" label="所属部门"> </el-table-column>
				<el-table-column label="操作" width="230">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="through(scope.$index, scope.row)"
							style="background-color: #b886f8; color: #fff"
							>通过</el-button
						>
						<el-button size="mini" type="danger" @click="rejected(scope.$index, scope.row)">驳回</el-button>
						<el-button size="mini" type="primary" @click="detail(scope.$index, scope.row)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination
					background
					layout="prev, pager, next"
					:total="tableData.length"
					:current-page.sync="page"
					@current-change="handleCurrentChange"
				>
				</el-pagination>
			</div>
		</div>
		<!-- 弹框 -->
		<!-- <popup :dialogFormVisible="dialogFormVisible" @add="add" @cancel="cancel"></popup> -->
		<popup v-if="dialogFormVisible" ref="dialog" @cancel="cancel"> </popup>
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
			page: 1, // 当前页
			name: '', // 申请人
			status: '', // 审批状态
			fname: '', // 审批类型
			options: [
				// 审批类型
				{
					label: '请假',
					value: '请假'
				},
				{
					label: '车贷',
					value: '车贷'
				},
				{
					label: '出差',
					value: '出差'
				},
				{
					label: '加班',
					value: '加班'
				}
			],
			// 表格数据
			tableData: [
				{
					name: '王小诺',
					fname: '请假',
					create_time: '15632456789',
					aname: '小明',
					status: '已通过',
					dname: '总经办'
				},
				{
					name: '王小诺',
					fname: '请假',
					create_time: '15632456789',
					aname: '小明',
					status: '已通过',
					dname: '总经办'
				},
				{
					name: '王小诺',
					fname: '请假',
					create_time: '15632456789',
					aname: '小明',
					status: '已通过',
					dname: '总经办'
				}
			],
			dialogFormVisible: false, // 弹框数据
			isEdit: false
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 打开详情弹框
		detail(index, row) {
			this.dialogFormVisible = true
			this.isEdit = true
			this.$nextTick(() => {
				this.$refs.dialog.detail(row)
			})
		},
		/**确定新增 */
		// add() {
		// 	this.dialogFormVisible = false
		// },
		/**取消弹框 */
		cancel() {
			this.dialogFormVisible = false
		},
		// 当前页
		handleCurrentChange(val) {
			this.page = val
		},
		// 通过
		through(Idx, row) {
			console.log(Idx, row)
			this.$prompt('确认通过该申请', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				inputValue: '通过理由'
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '确认通过'
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					})
				})
		},
		// 驳回
		rejected(Idx, row) {
			console.log(Idx, row)
			this.$prompt('是否驳回该申请', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				inputValue: '驳回理由'
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '确认通过'
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					})
				})
		},
		// 详情
		details(Idx, row) {
			console.log(Idx, row)
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
.el-steps {
	margin: 0 8%;
}
.block {
	.el-pagination {
		float: right;
	}
}
.el-row {
	.el-col {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.el-input {
			width: 80%;
		}
	}
}
.btn-box {
	margin: 20px 0;
}
</style>
