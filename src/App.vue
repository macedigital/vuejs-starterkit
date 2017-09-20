<template>
  <div id="app">
    <header>
        <router-link :to="{ name: 'home'}">Vue.js PWA</router-link>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less" src="./assets/styles/app.less"></style>
