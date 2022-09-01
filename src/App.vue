<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-sizing: border-box;
}
li {
  list-style: none;
}
// .el-dialog {
//   .el-button {
//     background-color: #d9bffb;
//     border: #d9bffb;
//     color: white;
//   }
// }
.el-icon-arrow-down:before {
  color: #fff !important;
  font-size: 14px;
}
.login-box {
  .el-input__inner {
    border-radius: 16px;
  }
  // 去除input框点击蓝色边框
  .el-input__inner:focus {
    border-color: #d9bffb;
  }
}
// 去除Button蓝色边框
.el-button:focus {
  background-color: #d9bffb;
  border: 0;
}
</style>
