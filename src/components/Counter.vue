<template>
  <div class="counter">
    <h1>Synchronous mutations example</h1>
    <pre>Current count: {{ count }}</pre>
    <p :class="{ alert }">
      <span v-if="!alert">You can add {{ remaining }} more items.</span>
      <span v-else-if="remaining">Only {{ remaining }} items remain!</span>
      <span v-else>No more items!</span>
    </p>
    <button @click="decrement()" :disabled="!count">-</button>
    <button @click="increment()" :disabled="!remaining">+</button>
    <p class="info">Click buttons to change counter value.</p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { MIN_COUNT, MAX_COUNT } from '@/store/mutations';

const counterRange = (MAX_COUNT - MIN_COUNT);
const alertThreshold = Math.ceil(0.4 * counterRange);

export default {
  name: 'counter',
  computed: {
    ...mapState(['count']),
    remaining() {
      return counterRange - this.count;
    },
    alert() {
      return this.remaining < alertThreshold;
    },
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
  },
};
</script>

<style scoped>
.alert {
  color: red;
}
</style>

