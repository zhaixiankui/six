<template>
  <div>
    <div class="top">
      <div class="left">
        <i
          class="el-icon-s-fold"
          v-if="!$store.state.isCollapse"
          @click="$store.state.isCollapse = true"
        ></i>
        <i
          class="el-icon-s-unfold"
          @click="$store.state.isCollapse = false"
          v-else
        ></i>
      </div>
      <div class="right">
        <p class="first">
          <i class="el-icon-s-flag"></i><span class="first-txt">10</span>
        </p>
        <p class="second">
          <i class="el-icon-message-solid"></i
          ><span class="second-txt">10</span>
        </p>
        <p class="three">
          <i class="el-icon-message"></i><span class="three-txt">10</span>
        </p>
        <p><i class="el-icon-rank"></i></p>
        <p><img src="/favicon.ico" alt="" /></p>
        <span>超级管理员</span>
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
  methods: {
    showIsCollapse() {
      this.$emit('showIsCollapse', this.isCollapse)
    }
  }
}
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;

  .left {
    i {
      font-size: 28px;
      color: #bbb;
    }
  }
  .right {
    display: flex;
    .first,
    .second,
    .three {
      position: relative;
      .first-txt,
      .second-txt,
      .three-txt {
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background-color: #f77d6c;
        line-height: 20px;
        text-align: center;
        color: white;
        font-size: 12px;
        top: 10%;
        left: 60%;
      }

      .second-txt {
        background-color: #f4c438;
      }
      .three-txt {
        background-color: #c2c2fb;
      }
    }
    p {
      margin: 0 10px;
      img {
        vertical-align: middle;
        width: 60%;
      }
      i {
        font-size: 23px;
        color: #bbb;
      }
    }
  }
}
</style>
