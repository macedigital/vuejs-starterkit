<template>
  <div class="router-child">
    <h1>{{ title | capitalize }}</h1>
    <p>This is some helpful text message</p>
  </div>
</template>

<script>
const DEFAULT_TITLE = 'default';

export default {
  name: 'RouterChild',
  filters: {
    capitalize(string) {
      return string[0].toLocaleUpperCase().concat(string.substr(1));
    },
  },
  computed: {
    title() {
      return this.$route.params.child || DEFAULT_TITLE;
    },
  },
};
</script>
