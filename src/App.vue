<template>
<el-container>
  <el-header>
    <center><h2>Vue Spa Base Project</h2></center>
  </el-header>
  <el-container>
    <el-aside style="width:240px;">
      <navegationmenu></navegationmenu>
    </el-aside>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>© <a target="_blank" href="">{{ 'Desarrollo por Mig ' + new Date().getFullYear() }}</a></el-footer>
    </el-container>
  </el-container>
</el-container>

</template>

<script>
import navegationmenu from './components/shared/NavegationMenu.vue'

export default {
  components: {
    navegationmenu
  },
 
};
</script>
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>