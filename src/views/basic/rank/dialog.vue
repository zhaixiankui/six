<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<!-- eslint-disable vue/no-mutating-props -->
		<el-dialog :title="isEdit ? '编辑职级' : '新增职级'" :before-close="close" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="职级名称" prop="rank">
					<el-input v-model="ruleForm.rank"></el-input>
				</el-form-item>
				<el-form-item label="备注" prop="remarks">
					<el-input type="textarea" :rows="2" placeholder="说明" v-model="ruleForm.remarks"> </el-input>
				</el-form-item>
				<el-form-item class="form-right">
					<el-button style="background-color: #d9bffb; color: #fff" @click="submitForm('ruleForm')">{{
						isEdit ? '编辑' : '新增'
					}}</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
				rank: '', //职位
				remarks: '' //备注
			},
			rules: {
				rank: [
					{ required: true, message: '请输入职级名称', trigger: 'blur' },
					{ min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
				],
				remarks: [
					{ required: true, message: '请输入备注', trigger: 'blur' },
					{ min: 1, max: 999, message: '不能为空', trigger: 'blur' }
				]
			},
			dialogFormVisible: false, //弹框状态
			isEdit: false //判断是否编辑状态
		}
	},
	methods: {
		/**新增 */
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
		/**取消 */
		resetForm(formName) {
			this.dialogFormVisible = false
			this.$refs[formName].resetFields()
			/**关闭弹窗 */
			this.$emit('close')
		},
		// 关闭弹窗
		close() {
			this.resetForm('ruleForm')
		},
		// 编辑回显
		handleEdit(row) {
			this.isEdit = true
			this.dialogFormVisible = true
			this.ruleForm = row
		},
		// 打开弹框
		added() {
			this.isEdit = false
			this.dialogFormVisible = true
		}
	}
}
</script>
<style scoped lang="scss">
.demo-ruleForm {
	overflow: hidden;
	.form-right {
		float: right;
	}
}
</style>
