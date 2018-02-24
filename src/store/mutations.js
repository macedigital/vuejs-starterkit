export const MIN_COUNT = 0;
export const MAX_COUNT = 10;

export default {
  increment(state) {
    if (state.count < MAX_COUNT) {
      // eslint-disable-next-line no-plusplus,no-param-reassign
      state.count++;
    }
  },
  decrement(state) {
    if (state.count > MIN_COUNT) {
      // eslint-disable-next-line no-plusplus,no-param-reassign
      state.count--;
    }
  },
};
