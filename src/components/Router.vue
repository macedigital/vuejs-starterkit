<template>
  <section class="router">
    <h1>vue-router</h1>
    <nav>
      <router-link :to="{ name: 'router'}" class="tab">Settings</router-link>
      <router-link :to="{ path: '/router/profile'}" class="tab">Profile</router-link>
      <router-link to="./comments" class="tab">Comments</router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'Router',
};
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/_variables.less';

  .tab {
    display: inline-block;
    margin: 0.2rem 0.4rem;
    padding: 0.5rem;
    outline: none;
    font-size: 120%;
    color: #333;

    &.router-link-exact-active {
      color: @font-color-base;
      font-weight: 600;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.05);
    }
  }
</style>

