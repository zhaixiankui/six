const { defineConfig } = require('@vue/cli-service')
let port = 8000
// console.log(process.env)
// 打印process.env
// 查看里面的 development stage produce
module.exports = defineConfig({
  //第三方依赖是否需要转移,避免出现第三方的转移
  transpileDependencies: true,
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: false,
  //代理端口配置
  devServer: {
    // 代理的地址
    port,

    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target:
          process.env.VUE_APP_MOCK_ENABLE === 'true'
            ? `http://localhost:8080`
            : process.env.VUE_APP_CONSOLE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// 	transpileDependencies: true,
// 	lintOnSave: false,
// 	productionSourceMap: false, //生产环境构造
// 	publicPath: './', //根目录
// 	outputDir: 'dist', //打包输出文件地址
// 	assetsDir: 'static', //静态资源文件放置
//dev环境下webpack-dev-server相关配置
// const { defineConfig } = require('@vue/cli-service')
// let port = 9999
// module.exports = defineConfig({
//   //第三方依赖是否需要转移，避免出现第三方的转移
//   transpileDependencies: true, //是否在开发环境下通过 eslin-loader 在每次保存时 lint 代码。
//   lintOnSave: false, //代理端口配置
//   devServer: {
//     //代理的地址
//     port,
//     proxy: {
//       // change xxx-api/login => mock/login
//       // detail: https://cli.vuejs.org/config/#devserver-proxy
//       [process.env.VUE_APP_BASE_API]: {
//         target:
//           process.env.VUE_APP_MOCK_ENABLE === true
//             ? `http://localhost:${port}/mock`
//             : 'process.env.VUE_APP_CONSOLE_URL',
//         changeOrigin: true,
//         pathRewrite: {
//           ['^' + process.env.VUE_APP_BASE_API]: ''
//         }
//       }
//     }
//   }
// })
// devServer: {
//   port: 8080, //端口号
//   https: false, //加密协议
//   host: '0.0.0.0', //域名
//   open: true //是否直接打开浏览器
// 配置代理 跨域
// proxy: {
//   '/api': {
//     changeOrigin: true,
//     target: 'http://www.baidu.com',
//     pathRewrite: {
//       '/api': ''
//     }
//   }
// }
// overlay:{
// 	warnings:false,
// 	errors:true
// },

//pro:production(生产，全量，真机，线上)
//stage(灰度，备机)
//text:测试环境，也可以自己使用
//dev 自己使用的开发环境
// })
