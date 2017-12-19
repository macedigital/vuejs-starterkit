<template>
  <div class="counter">
    <h1>Vuex store demo</h1>
    <pre>Current count: {{ count }}</pre>
    <button @click="decrement()">-</button>
    <button @click="increment()">+</button>
    <p class="info">Click buttons to change counter value.</p>
  </div>
</template>

<script>
export default {
  name: 'counter',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>

