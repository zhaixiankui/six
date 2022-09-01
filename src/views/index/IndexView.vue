<template>
  <div>
    <div class="content-box">
      <div class="first-box">
        <ul class="left">
          <li class="top-txt">
            <p>待办事项</p>
            <p>查看更多</p>
          </li>
          <li>
            <p>[待办事项] xx申请的报销还未审批,请及时查看,防止过期</p>
            <p>2022年8月</p>
          </li>
          <li>
            <p>[待办事项] xx申请的报销还未审批,请及时查看,防止过期</p>
            <p>2022年8月</p>
          </li>
          <li>
            <p>[待办事项] xx申请的报销还未审批,请及时查看,防止过期</p>
            <p>2022年8月</p>
          </li>

          <p class="last">暂无待办事~</p>
        </ul>
        <div class="right">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>

      <div class="second-box">
        <div class="left">
          <p class="title">员工数据</p>
          <ul>
            <li>
              <div class="cont">
                <p>员工总人数</p>
                <p>2000人</p>
              </div>
              <div class="cont">
                <p>员工总人数</p>
                <p>2000人</p>
              </div>
              <div class="cont">
                <p>员工总人数</p>
                <p>2000人</p>
              </div>
            </li>
            <li>
              <div class="cont">
                <p>员工总人数</p>
                <p>2000人</p>
              </div>
              <div class="cont">
                <p>员工总人数</p>
                <p>2000人</p>
              </div>
              <div class="cont">
                <p>员工总人数</p>
                <p>2000人</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="right">
          <p class="member-txt">员工地区分布</p>
          <div id="main"></div>
        </div>
      </div>

      <div class="three-box">
        <p class="bir">员工生日</p>
        <div id="birthday"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  components: {},
  data() {
    return {
      value1: ''
    }
  },
  created() {},
  mounted() {
    // 饼图
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 'right',
        padding: 50
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '70%',
          data: [
            { value: 1048, name: '东北' },
            { value: 735, name: '内蒙' },
            { value: 580, name: '河北' },
            { value: 484, name: '山西' },
            { value: 300, name: '河南' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          center: ['30%', '50%']
        }
      ]
    }

    option && myChart.setOption(option)

    // 柱状图
    var chartDoms = document.getElementById('birthday')
    var myCharts = echarts.init(chartDoms)
    var options

    options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '40%',
          data: [10, 52, 200, 334, 390, 330, 220, 52, 200, 334, 390, 330],
          itemStyle: {
            color: '#b886f8'
          }
        }
      ]
    }

    options && myCharts.setOption(options)
  },
  methods: {}
}
</script>
<style scoped lang="scss">
#main {
  width: 100%;
  height: 226px;
  // padding: 20px;
}
#birthday {
  width: 100%;
  height: 250px;
}
.three-box {
  border: 1px solid #bfbfbf;
  margin: 10px;
  .bir {
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    padding: 0 20px;
    border-bottom: 1px solid #bfbfbf;
  }
}
.content-box {
  width: 100%;
  min-height: 100vh;
  .second-box {
    width: 100%;
    margin: 10px;
    display: flex;
    .left {
      width: 48%;
      border: 1px solid #bfbfbf;
      ul {
        text-align: center;
        padding: 20px;
        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin: 30px 0;
          color: gray;
          .cont {
            flex: 1;
          }
          .cont:nth-child(1) {
            border-right: 1px solid #bfbfbf;
          }
          .cont:nth-child(2) {
            border-right: 1px solid #bfbfbf;
          }
        }
      }
      .title {
        display: inline-block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        padding: 0 20px;
        border-bottom: 1px solid #bfbfbf;
      }
    }
    .right {
      width: 48%;
      margin-left: 2%;
      border: 1px solid #bfbfbf;
      .member-txt {
        display: inline-block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        padding: 0 20px;
        border-bottom: 1px solid #bfbfbf;
      }
    }
  }
  .first-box {
    width: 100%;
    display: flex;
    margin: 10px;
    .left {
      width: 60%;
      border: 1px solid #bfbfbf;
      .last {
        text-align: center;
        height: 50px;
        line-height: 50px;
      }
      li {
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        border-bottom: 1px solid #bfbfbf;
        display: flex;
        justify-content: space-between;
      }
      .top-txt {
        p:nth-child(1) {
          font-size: 20px;
        }
        p:nth-child(2) {
          color: #458bf3;
        }
      }
    }
    .right {
      width: 38%;
      margin-left: 2%;
    }
  }
}
</style>
