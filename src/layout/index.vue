<template>
  <el-container>
    <el-header height="70px">
      <el-row class="admin-header">
        <el-col :span="4">
          <img src="../assets/logo.png" alt="" width="30" />
        </el-col>
        <el-col :span="16"><h2>后台管理系统</h2></el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-header>
    <el-container>
      <Menu></Menu>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// import * as echarts from "echarts";
import Menu from "../components/Menu/index.vue";
import Header from "../components/Header/index.vue";
import Footer from "../components/Footer/index.vue";
export default defineComponent({
  setup() {
    // onMounted(() => {
    //   type EChartsOption = echarts.EChartsOption;
    //   var chartDom = document.getElementById("main")!;
    //   var myChart = echarts.init(chartDom);
    //   var option: EChartsOption;
    //   option = {
    //     xAxis: {
    //       type: "category",
    //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: [
    //       {
    //         data: [150, 230, 224, 218, 135, 147, 260],
    //         type: "line",
    //       },
    //     ],
    //   };
    //   option && myChart.setOption(option);
    // });
    return {};
  },
  components: { Menu, Header, Footer },
});
</script>
<style>
html body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped> 
.admin-header {
  align-items: center;
}
</style>