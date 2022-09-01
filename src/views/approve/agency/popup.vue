<!-- eslint-disable vue/no-mutating-props -->
<template>
	<div>
		<el-dialog title="审批详情" :visible.sync="dialogFormVisible" :before-close="close">
			<el-steps :space="200" :active="1" finish-status="success">
				<el-step title="guanlyuan" description="admin"></el-step>
				<el-step title="guanlyuan" description="debveloper"></el-step>
				<el-step description="over"></el-step>
			</el-steps>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="申请人" prop="aname">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="审批类型" prop="fname">
					<el-select v-model="ruleForm.fname" placeholder="请假申请">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="申请时间" required>
					<el-col :span="11">
						<el-form-item prop="date">
							<el-date-picker
								type="date"
								placeholder="选择日期"
								v-model="ruleForm.date"
								style="width: 100%"
							></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-form-item prop="create_time">
							<el-time-picker
								placeholder="选择时间"
								v-model="ruleForm.create_time"
								style="width: 100%"
							></el-time-picker>
						</el-form-item>
					</el-col>
				</el-form-item>
				<el-form-item label="所属部门" prop="dname">
					<el-select v-model="ruleForm.dname" placeholder="人事部">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="理由" prop="fname">
					<el-input type="textarea" placeholder="理由" v-model="ruleForm.fname"></el-input>
				</el-form-item>
				<el-form-item class="form-right">
					<el-button style="background-color: #d9bffb; color: #fff" @click="submitForm('ruleForm')">新增</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: '',
	components: {},
	// props: ['dialogFormVisible'],
	data() {
		return {
			ruleForm: {
				anmae: '',
				create_time: '',
				dname: '',
				fname: '',
				name: '',
				status: ''
			},
			rules: {},
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
			dialogFormVisible: false,
			isEdit: false
		}
	},
	created() {},
	mounted() {},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
					this.$emit('add')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
			this.$emit('cancel')
		},
		// 取消
		close() {
			console.log(1)
			this.$emit('cancel')
		},
		// 详情弹框
		detail(row) {
			console.log(row)
			this.dialogFormVisible = true
			this.isEdit = true
			this.ruleForm = row
		}
	}
}
</script>
<style scoped lang="scss"></style>
