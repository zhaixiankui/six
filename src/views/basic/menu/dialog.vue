<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<!-- eslint-disable vue/no-mutating-props -->
		<el-dialog :title="isEdit ? '编辑菜单' : '新增菜单'" :visible.sync="dialogFormVisible" :before-close="close">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="菜单类型" prop="type">
					<el-radio-group v-model="ruleForm.type">
						<el-radio label="菜单"></el-radio>
						<el-radio label="目录"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="菜单名称" prop="mname">
					<el-input v-model="ruleForm.mname"></el-input>
				</el-form-item>
				<el-form-item label="菜单路径" prop="murl">
					<el-input v-model="ruleForm.murl"></el-input>
				</el-form-item>
				<el-form-item label="菜单图标" prop="ask_off">
					<el-input v-model="ruleForm.ask_off"></el-input>
				</el-form-item>
				<el-form-item label="上级菜单">
					<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</el-form-item>
				<el-form-item label="排序" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="备注" prop="remark">
					<el-input type="textarea" v-model="ruleForm.remark" placeholder="说明......"></el-input>
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
				mname: '', // 菜单名称
				murl: '', // 菜单路径
				tier: '', // 排序
				ask_off: '', // 菜单图标
				type: '', // 菜单类型
				remark: '' // 备注
			},
			rules: {},
			// 树型数据
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
			dialogFormVisible: false,
			isEdit: false // title状态
		}
	},
	methods: {
		// 树型单击
		handleNodeClick() {},
		// 新增
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
			// 关闭弹框
			this.$emit('close')
		},
		// 关闭弹框
		close() {
			this.$emit('close')
		},
		// 打开添加弹框
		added() {
			this.dialogFormVisible = true
			this.isEdit = false
		},
		// 编辑回显
		handleEdit(row) {
			// 弹窗状态
			this.dialogFormVisible = true
			// title状态
			this.isEdit = true
			this.ruleForm = row
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
.el-dialog {
	.el-input {
		width: 40%;
	}
}
</style>
