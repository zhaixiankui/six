<template>
  <div>
    <div class="box">
      <!-- 左侧 -->
      <div class="left-box">
        <!-- 收 -->
        <i class="el-icon-s-fold"></i>
        <!-- 放 -->
        <i class="el-icon-s-unfold"></i>
      </div>
      <!-- 右侧 -->
      <div class="right-box">
        <el-badge :value="12" class="item">
          <i class="el-icon-s-flag"></i>
        </el-badge>
        <el-badge :value="12" class="item">
          <i class="el-icon-s-flag"></i>
        </el-badge>
        <el-badge :value="12" class="item">
          <i class="el-icon-s-flag"></i>
        </el-badge>
        <!-- 全屏 -->
        <i class="el-icon-full-screen"></i>
        <i class="el-icon-user-solid"></i>
        <span>&ensp;超级管理员</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.box {
  display: flex;
  justify-content: space-between;
  .left-box {
    i {
      font-size: 26px;
      color: rgba(154, 154, 154, 10);
    }
  }
  .right-box {
    display: flex;
    align-items: center;
    i {
      width: 20px;
      height: 20px;
      font-size: 20px;
      color: rgba(154, 154, 154, 10);
    }
  }
}
// 条数
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
