<template>
  <div>
    <el-container>
      <el-aside :width="$store.state.isCollapse ? '68px' : '200px'">
        <MyAside></MyAside>
      </el-aside>
      <el-container>
        <el-header>
          <MyHeader></MyHeader>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyAside from '../components/MyAside.vue'
import MyHeader from '../components/MyHeader.vue'
export default {
  components: { MyAside, MyHeader },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-header {
  background-color: #fff;
  color: gray;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
.el-aside {
  background-color: #6aa2f7;
  color: #fff;
  min-height: 100vh;
}

.el-main {
  background-color: #fff;
  color: #333;
  padding: 10px;
}
</style>
