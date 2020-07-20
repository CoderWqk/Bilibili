<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>

<style>
@import "./assets/css/global.css";
#app {
  background-color: #f4f4f4;
}
</style>
