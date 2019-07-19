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
  min-height: calc(100vh - 55px);
  background-color: #eff1f8;
}
</style>

