<template>
  <div>
    <div class="logo-box">
      <img src="/logo.png" alt="" />
      <p v-show="!$store.state.isCollapse">OA管理系统</p>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#6aa2f7"
      text-color="#fff"
      active-text-color="#fff"
      router
      unique-opened
      :collapse="$store.state.isCollapse"
      :collapse-transition="false"
    >
      <el-menu-item index="/index" :class="{ active: curIndex == '/index' }">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu :index="item.id + ''" v-for="item in menus" :key="item.id">
        <template slot="title">
          <i :class="item.ask_off"></i>
          <span>{{ item.mname }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="child.murl"
            v-for="child in item.son"
            :key="child.id"
            >{{ child.mname }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { getToken } from '@/untils/auth'
// import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      curIndex: '/index',
      menuList: []
    }
  },
  // 监听路由
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(val) {
        this.curIndex = val.path
      }
    }
  },
  computed: {
    menus() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.menuList.splice(1, this.menuList.length)
    }
  },
  created() {
    // 获取菜单数据
    this.$http
      .get('/effect/home/menus/', { params: { Authorization: getToken() } })
      .then((res) => {
        console.log(res)
        if (res.data.code == 200) {
          // this.$message.success(res.data.msg)
          this.menuList = res.data.menu.data
          console.log(this.menuList)
        }
      })
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-menu {
  border-right: 0;
  .active {
    background-color: #f4c438 !important;
  }
  .el-menu-item.is-active {
    background-color: #f4c438 !important;
  }
  i {
    color: white !important;
  }
}
.logo-box {
  width: 100%;
  height: 50px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  p {
    font-size: 20px;
  }
}
</style>
