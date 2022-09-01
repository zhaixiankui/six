<!-- eslint-disable vue/no-mutating-props -->
<template>
	<div>
		<!-- 新增材料弹框 -->
		<el-dialog title="新增材料" :visible.sync="dialogFormVisible" width="40%" :before-close="close">
			<p>材料名称 <el-input class="inp"></el-input></p>
			<p class="bb">
				材料地址
				<el-upload
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-preview="handlePreview"
					:on-remove="handleRemove"
					:before-remove="beforeRemove"
					multiple
					:limit="3"
					:on-exceed="handleExceed"
					:file-list="fileList"
				>
					<el-button size="small" type="primary" class="sahng">上传材料</el-button>
				</el-upload>
			</p>
			<span slot="footer" class="dialog-footer">
				<el-button class="sub-btn" type="primary" @click="add">立即创建</el-button>
				<el-button @click="cancel">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'tk',
	props: ['dialogFormVisible'],
	components: {},
	data() {
		return {
			fileList: []
		}
	},
	created() {},
	mounted() {},
	methods: {
		/**确定新增 */
		add() {
			this.$emit('add')
		},
		/**取消弹框 */
		cancel() {
			this.$emit('cancel')
		},
		// 取消
		close() {
			console.log(1)
			this.$emit('cancel')
		},
		// 上传文件属性
		handleRemove(file, fileList) {
			console.log(file, fileList)
		},
		handlePreview(file) {
			console.log(file)
		},
		handleExceed(files, fileList) {
			this.$message.warning(
				`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
			)
		},
		beforeRemove(file) {
			return this.$confirm(`确定移除 ${file.name}？`)
		}
	}
}
</script>
<style scoped lang="scss"></style>
