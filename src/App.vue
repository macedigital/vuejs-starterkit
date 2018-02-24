<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home' }">Vue.js PWA</router-link>
      <router-link :to="{ name: 'router' }">Router</router-link>
      <router-link :to="{ name: 'store' }">Store</router-link>
    </header>
    <main>
      <img src="./assets/images/logo.png" alt="Vue.js PWA">
      <transition>
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less" src="./assets/styles/app.less"></style>
