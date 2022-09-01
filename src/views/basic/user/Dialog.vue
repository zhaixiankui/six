<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<!-- user对话框部分 -->
		<!-- eslint-disable vue/no-mutating-props -->
		<el-dialog
			:title="emit == true ? '新增用户' : emit == false ? '修改用户' : '用户详情'"
			:visible.sync="dialogVisible"
			width="30%"
			:before-close="close"
		>
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				label-width="100px"
				class="demo-ruleForm"
				style="overflow: hidden"
				:disabled="emit == null"
			>
				<el-form-item label="用户名称" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="账号" prop="account">
					<el-input v-model="ruleForm.account"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="tel">
					<el-input v-model="ruleForm.tel"></el-input>
				</el-form-item>
				<el-form-item label="角色名称" prop="role">
					<el-select v-model="ruleForm.role" placeholder="管理员角色">
						<el-option label="管理员角色" value="管理员角色"></el-option>
						<el-option label="普通用户" value="普通用户"></el-option>
						<el-option label="部门管理员" value="部门管理员"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属岗位" prop="post">
					<el-select v-model="ruleForm.post" placeholder="销售岗">
						<el-option label="销售岗" value="销售岗"></el-option>
						<el-option label="技术岗" value="技术岗"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属职级" prop="rank">
					<el-select v-model="ruleForm.rank" placeholder="1">
						<el-option label="1" value="1"></el-option>
						<el-option label="2" value="2"></el-option>
						<el-option label="3" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属部门" prop="department">
					<el-select v-model="ruleForm.department" placeholder="1">
						<el-option label="1" value="1"></el-option>
						<el-option label="2" value="2"></el-option>
						<el-option label="3" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="float: right">
					<!-- 按钮  -->
					<el-button class="confirm" @click="submitForm('ruleForm')">{{
						emit == true ? '新增' : emit == false ? '修改' : '详情'
					}}</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			// 编辑添加详情
			emit: false,
			// 对话框状态
			dialogVisible: false,
			// 表单数据
			ruleForm: {
				name: '', //用户名
				account: '', //账号
				tel: null, //手机号
				role: '', //角色名称
				post: '', //岗位
				rank: '', //职级
				department: '' //部门
			},
			// 校验
			rules: {
				// 用户名
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				account: [{ required: true, message: '请输入账号', trigger: 'blur' }], // 账号
				tel: [{ required: true, message: '请输入手机号', trigger: 'blur' }], // 手机号
				role: [{ required: true, message: '请输入角色名称', trigger: 'blur' }], //角色名称
				post: [{ required: true, message: '请输入岗位', trigger: 'blur' }], //岗位
				rank: [{ required: true, message: '请输入职级', trigger: 'blur' }], //职级
				department: [{ required: true, message: '请输入部门', trigger: 'blur' }] //部门
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 添加
		addchange() {
			this.dialogVisible = true
			this.emit = true
		},
		// 编辑
		emitchange(row) {
			console.log(row)
			this.dialogVisible = true
			this.emit = false
			this.ruleForm = row
		},
		// 详情
		detailschange(row) {
			this.dialogVisible = true
			this.emit = null
			this.ruleForm = row
		},
		// 确定
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		// 取消
		resetForm(formName) {
			this.$refs[formName].resetFields()
			this.$emit('resetForm')
		},
		// 点击x
		close() {
			this.$emit('resetForm')
		}
	}
}
</script>
<style scoped lang="scss">
.confirm {
	// margin-left: 165px;
	background-color: #b886f8;
	color: white;
}
</style>
