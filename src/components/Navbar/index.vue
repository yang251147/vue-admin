<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="true"
      class="hamburger-container"
    />
    <!-- @toggleClick="toggleSideBar" -->
    <el-breadcrumb separator="/" class="app-breadcrumb breadcrumb-container">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script  lang="ts">
import Hamburger from "@/components/Hamburger/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: { Hamburger },
});
</script>
<style scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
}
.el-breadcrumb__item {
  line-height: 50px;
}
.breadcrumb-container {
  float: left;
}

.hamburger-container {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.navbar .hamburger-container :hover {
  background: rgba(0, 0, 0, 0.025);
}
.navbar .hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
}
.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style> 