<template>
  <section class="store">
    <h1>Vuex store</h1>
    <counter/>
  </section>

</template>

<script>
import Counter from '@/components/Counter';

export default {
  name: 'Store',
  components: {
    Counter,
  },
};
</script>
