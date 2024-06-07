<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-header style="font-weight: bold;font-size: 1.5em; ">LATnet</el-header> -->

      <el-aside width="18%">
        <el-menu default-active="/HOME" class="el-menu-vertical-demo">
          <img
            src="../assets/logo.png"
            alt="Vue logo"
            style="width: 50%; margin-top: 8%"
          />
          <el-menu-item index="/home" @click="$router.push('/home')">
            HOME
          </el-menu-item>
          <el-menu-item
            index="/introduction"
            @click="$router.push('/introduction')"
            >INTRODUCTION</el-menu-item
          >
          <el-menu-item index="/predict" @click="$router.push('/predict')"
            >PREDICT</el-menu-item
          >
          <el-menu-item index="/contact" @click="$router.push('/contact')">CONTACT US</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main ref="main">
        <router-view></router-view>
        <!-- <router-view ></router-view> -->
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "IndexVue",
};
</script>
<style scoped>
.common-layout {
  margin-top: -6vh;
  overflow: hidden;
}
.el-aside {
  height: 99vh;
  position: fixed;
  overflow: hidden;

  overflow: hidden;
  box-shadow: 2px 0px 50px 0px rgba(145, 144, 144, 0.5);
}
.el-menu {
  overflow: hidden;
}
.el-menu-item {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 15%;
  margin-bottom: 10%;
  margin-left: 10%;
}
.el-menu-vertical-demo {
  margin-top: 10%;
}
.router-link {
  text-decoration: none;
  color: inherit;
}
.el-main {
  margin-left: 18%;

  overflow: hidden;
}
</style>
