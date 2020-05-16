<template>
<el-container class="system">
  <el-header style="width:100%;text-align:center;line-height:60px">松滋司法局</el-header>
  <el-container>
    <el-aside width="220px">
      <el-menu
      default-active="2"
      class="el-menu-system"
      @open="handleOpen"
      @close="handleClose"
      background-color="#29448a"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>meta</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">title</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main style="border:1px solid #0f0">
      <router-view></router-view>
    </el-main>
   </el-container>
 </el-container>
</template>
<script>
  export default{
    data(){
      return {
        
      }
    }
  }
</script>
<style lang="scss">
.system{
  width: 100%;
  height: 100vh;
  background: darkcyan;
}
.el-menu-system{
  border: none;
  height: 100%;
}
</style>


