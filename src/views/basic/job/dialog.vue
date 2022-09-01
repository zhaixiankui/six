<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<!-- eslint-disable vue/no-mutating-props -->
		<el-dialog :title="isEdit ? '编辑岗位' : '新增岗位'" :visible.sync="dialogFormVisible" :before-close="close">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="岗位名称" prop="technology">
					<el-input v-model="ruleForm.technology"></el-input>
				</el-form-item>
				<!-- 三级联动 -->
				<el-form-item label="关联直系">
					<el-tree :data="data" :prop="defaultProps" @node-click="handleNodeClick"></el-tree>
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
			// 表单数据
			ruleForm: {
				technology: '', //职位
				remarks: '' //备注
			},
			rules: {
				technology: [
					{ required: true, message: '请输入岗位名称', trigger: 'blur' },
					{ min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
				],
				remarks: [
					{ required: true, message: '请输入备注', trigger: 'blur' },
					{ min: 1, max: 999, message: '不能为空', trigger: 'blur' }
				]
			},
			// 树形
			data: [
				{
					label: '一级 1',
					children: [
						{
							label: '二级 1-1',
							children: [
								{
									label: '三级 1-1-1'
								}
							]
						}
					]
				},
				{
					label: '一级 2',
					children: [
						{
							label: '二级 2-1',
							children: [
								{
									label: '三级 2-1-1'
								}
							]
						},
						{
							label: '二级 2-2',
							children: [
								{
									label: '三级 2-2-1'
								}
							]
						}
					]
				},
				{
					label: '一级 3',
					children: [
						{
							label: '二级 3-1',
							children: [
								{
									label: '三级 3-1-1'
								}
							]
						},
						{
							label: '二级 3-2',
							children: [
								{
									label: '三级 3-2-1'
								}
							]
						}
					]
				}
			],
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			dialogFormVisible: false, //弹框
			isEdit: false // title状态
		}
	},
	methods: {
		/**树型单击 */
		handleNodeClick() {},
		// 添加
		added() {
			// title状态
			this.isEdit = false
			// 弹框状态
			this.dialogFormVisible = true
		},
		// 编辑打开弹框
		handleEdit(row) {
			// title状态
			this.isEdit = true
			// 弹框状态
			this.dialogFormVisible = true
			// 回显
			this.ruleForm = row
		},
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
			this.$refs[formName].resetFields()
			/**关闭弹窗 */
			this.$emit('close')
		},
		// 关闭弹窗
		close() {
			this.resetForm('ruleForm')
		}
	}
}
</script>
<style scoped lang="scss"></style>
