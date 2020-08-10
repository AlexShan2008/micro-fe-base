<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal" :default-active="activeIndex">
      <!--基座中可以放自己的路由-->
      <el-menu-item index="/">Home</el-menu-item>
      <!--引用其他子应用-->
      <el-menu-item index="/react">react应用</el-menu-item>
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/online">react online 应用</el-menu-item>
      <!-- <el-menu-item index="/angular">angular应用</el-menu-item> -->
    </el-menu>

    <router-view></router-view>

    <!-- 下面的两个容器用于挂载子应用 不能删除 -->
    <div id="vueApp"></div>
    <div id="reactApp"></div>
    <div id="onlineApp"></div>
    <!-- <div id="angularApp"></div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    updateActiveTab() {
      const { path = "/" } = this.$route;
      this.activeIndex = path;
    },
  },
  watch: {
    $route() {
      this.updateActiveTab();
    },
  },
  created() {
    this.updateActiveTab();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
