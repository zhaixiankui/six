<!-- eslint-disable vue/no-mutating-props -->
<template>
	<div>
		<!-- 弹框 -->
		<el-dialog :title="isEdit ? '编辑弹框' : '新增弹框'" :visible.sync="dialogFormVisible" :before-close="close">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="部门名称" prop="mname">
					<el-input v-model="ruleForm.mname"></el-input>
				</el-form-item>
				<el-form-item label="部门层级">
					<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</el-form-item>
				<el-form-item label="备注" prop="murl">
					<el-input type="textarea" v-model="ruleForm.murl" placeholder="说明......"></el-input>
				</el-form-item>
				<el-form-item class="form-right">
					<el-button style="background-color: #d9bffb; color: #fff" @click="submitForm('ruleForm')">{{
						isEdit ? '编辑' : '添加'
					}}</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'tk',
	components: {},
	// props: ['dialogFormVisible'],
	data() {
		return {
			// 输入框数据
			ruleForm: {
				mname: '',
				parent: 0,
				murl: ''
			},
			rules: {}, // 校验
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
			isEdit: false
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 树型单击
		handleNodeClick() {},
		// 新增
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
		// 取消
		resetForm(formName) {
			this.$refs[formName].resetFields()
			this.$emit('cancel')
		},
		// 打开弹框
		added() {
			this.dialogFormVisible = true
			this.isEdit = false
		},
		// 编辑
		handleEdit(row) {
			console.log(row)
			this.dialogFormVisible = true
			this.isEdit = true
			this.ruleForm = row
		},
		// 取消
		close() {
			console.log(1)
			this.$emit('cancel')
		}
	}
}
</script>
<style scoped lang="scss"></style>
