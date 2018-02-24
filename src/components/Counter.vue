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
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'counter',
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
  },
};
</script>

