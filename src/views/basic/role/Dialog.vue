<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<!-- 角色对话框部分 -->
		<!-- eslint-disable vue/no-mutating-props -->
		<el-dialog
			:title="emit == true ? '新增角色' : '修改角色'"
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
			>
				<el-form-item label="角色名称" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="角色权限" prop="jurisdiction">
					<el-cascader
						placeholder="管理员角色"
						:options="options"
						:props="{ multiple: true }"
						collapse-tags
						clearable
						v-model="ruleForm.jurisdiction"
					></el-cascader>
				</el-form-item>
				<el-form-item label="备注" prop="tel">
					<el-input type="textarea" v-model="ruleForm.tel"></el-input>
				</el-form-item>
				<el-form-item style="float: right">
					<el-button class="confirm" @click="submitForm('ruleForm')">{{ emit == true ? '新增' : '修改' }}</el-button>
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
			// 判断添加编辑
			emit: true,
			// 对话框状态
			dialogVisible: false,
			// 多选
			// props: { multiple: true },
			options: [
				{
					value: 1,
					label: '东南',
					children: [
						{
							value: 2,
							label: '上海',
							children: [
								{ value: 3, label: '普陀' },
								{ value: 4, label: '黄埔' },
								{ value: 5, label: '徐汇' }
							]
						},
						{
							value: 7,
							label: '江苏',
							children: [
								{ value: 8, label: '南京' },
								{ value: 9, label: '苏州' },
								{ value: 10, label: '无锡' }
							]
						},
						{
							value: 12,
							label: '浙江',
							children: [
								{ value: 13, label: '杭州' },
								{ value: 14, label: '宁波' },
								{ value: 15, label: '嘉兴' }
							]
						}
					]
				},
				{
					value: 17,
					label: '西北',
					children: [
						{
							value: 18,
							label: '陕西',
							children: [
								{ value: 19, label: '西安' },
								{ value: 20, label: '延安' }
							]
						},
						{
							value: 21,
							label: '新疆维吾尔族自治区',
							children: [
								{ value: 22, label: '乌鲁木齐' },
								{ value: 23, label: '克拉玛依' }
							]
						}
					]
				}
			],
			// 表单数据
			ruleForm: {
				name: '', //角色名称
				tel: null, //备注
				jurisdiction: '' //角色权限
			},
			// 校验
			rules: {
				// 角色名称
				name: [
					{ required: true, message: '请输入角色名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				tel: [{ required: true, message: '请输入备注', trigger: 'blur' }], //备注
				jurisdiction: [{ required: true, message: '请输入角色权限', trigger: 'blur' }] //角色权限
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
			this.dialogVisible = true
			this.emit = false
			this.ruleForm = row
		},
		// 提交
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
