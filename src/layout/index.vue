<template>
	<div>
    <div class="app-container">
      <router-view></router-view>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
<style lang="less">
.app-container {
  color: #333;
  min-height: calc(100vh - 55px);
  background-color: #F5F5F5;
}
</style>

