import mutations, { MIN_COUNT, MAX_COUNT } from '@/store/mutations';

describe('store:mutations', () => {
  describe('increment()', () => {
    it('should increment count by one', () => {
      const state = {
        count: MIN_COUNT,
      };
      mutations.increment(state);
      expect(state.count).to.equal(MIN_COUNT + 1);
    });

    it('should stop incrementing if maximum is reached', () => {
      const state = {
        count: MAX_COUNT,
      };
      mutations.increment(state);
      expect(state.count).to.equal(MAX_COUNT);
    });
  });

  describe('decrement()', () => {
    it('should decrement count by one', () => {
      const state = {
        count: MAX_COUNT,
      };
      mutations.decrement(state);
      expect(state.count).to.equal(MAX_COUNT - 1);
    });

    it('should stop decrementing if minimum is reached', () => {
      const state = {
        count: MIN_COUNT,
      };
      mutations.decrement(state);
      expect(state.count).to.equal(MIN_COUNT);
    });
  });
});
