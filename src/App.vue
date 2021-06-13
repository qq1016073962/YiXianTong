<template>
  <div id="app">
    <!-- 将 Index 组件 进行缓存 -->
    <keep-alive include="Index,Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body,
#app,
.container {
  height: 100%;
}
</style>
