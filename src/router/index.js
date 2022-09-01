import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    redirect: '/index',
    children: [
      // 首页
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/IndexView.vue')
      },
      // 用户管理
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/basic/user/UserView.vue')
      },
      // 角色管理
      {
        path: '/role',
        name: 'role',
        component: () => import('../views/basic/role/RoleView.vue')
      },
      // 菜单管理
      {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/basic/menu/MenuView.vue')
      },
      // 岗位管理
      {
        path: '/job',
        name: 'job',
        component: () => import('../views/basic/job/JobView.vue')
      },
      // 职级管理
      {
        path: '/rank',
        name: 'rank',
        component: () => import('../views/basic/rank/RankView.vue')
      },
      // 操作日志
      {
        path: '/operationlog',
        name: 'operationlog',
        component: () =>
          import('../views/basic/operationlog/OperationlogView.vue')
      },
      // 登录日志
      {
        path: '/loginlog',
        name: 'loginlog',
        component: () => import('../views/basic/loginlog/LoginlogView.vue')
      },
      // 操作日志
      {
        path: '/department',
        name: 'Department',
        component: () => import('../views/basic/department/DepartmentView.vue')
      },
      // 材料管理
      {
        path: '/sonmaterials',
        name: 'sonmaterials',
        component: () => import('../views/sonmaterials/SonmaterialsView.vue')
      },

			// 配置审批流程
      {
        path: '/approvalprocess',
        name: 'approvalprocess',
        component: () =>
          import('../views/workflow/approvalprocess/ApprovalprocessView.vue')
      },
      // 配置审批类型
      {
        path: '/approvaltype',
        name: 'approvaltype',
        component: () =>
          import('../views/workflow/approvaltype/ApprovaltypeView.vue')
      },

      // 邮件处理
      {
        path: '/mail',
        name: 'mail',
        component: () => import('../views/communications/mail/MailView.vue')
      },
      // 工资条录入
      {
        path: '/payslip',
        name: 'payslip',
        component: () => import('../views/communications/payslip/PayslipView.vue')
      },

      // 待办事项
      {
        path: '/agency',
        name: 'agency',
        component: () => import('../views/approve/agency/AgencyView.vue')
      },
      // 已办事项
      {
        path: '/done',
        name: 'done',
        component: () => import('../views/approve/done/DoneView.vue')
      },

      // 我发起的
      {
        path: '/launch',
        name: 'Launch',
        component: () => import('../views/approve/launch/LaunchView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
