<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
  <!-- <el-tabs v-model="activeName" > -->
    <el-tab-pane label="首页" name="/indexView">首页</el-tab-pane>
    <el-tab-pane label="动画" name="2page">动画</el-tab-pane>
    <el-tab-pane label="番剧" name="3page">番剧</el-tab-pane>
    <el-tab-pane label="音乐" name="4page">音乐</el-tab-pane>
    <el-tab-pane label="舞蹈" name="5page">舞蹈</el-tab-pane>
    <el-tab-pane label="游戏" name="6page">游戏</el-tab-pane>
  </el-tabs>
  <router-view></router-view>
</div>
  
</template>
<script>
  export default {
    data() {
      return {
        activeName: '/indexView'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        this.$router.push(tab.$props.name).catch(err => err)
      }
    }
  };
</script>