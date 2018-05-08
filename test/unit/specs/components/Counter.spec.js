import Vue from 'vue';
import Vuex from 'vuex';
import { shallow } from 'avoriaz';
import Counter from '@/components/Counter';
import createState from '@/store/createState';
import mutations, { MIN_COUNT, MAX_COUNT } from '@/store/mutations';

Vue.use(Vuex);

describe('Counter.vue', () => {
  let wrapper;
  let store;
  let initialCount;

  beforeEach(() => {
    initialCount = 3;

    store = new Vuex.Store({
      state: createState({
        count: initialCount,
      }),
      mutations: {
        ...mutations,
      },
    });

    wrapper = shallow(Counter, { store });
  });

  it('should show computed count value', () => {
    const preTag = wrapper.find('pre')[0].text();
    expect(preTag).to.equal(`Current count: ${initialCount}`);
  });

  it('should show remaing items value', () => {
    const remainingTag = wrapper.find('p')[0];
    const remainingItems = MAX_COUNT - initialCount;
    expect(remainingTag.text()).to.equal(`You can add ${remainingItems} more items.`);
    expect(remainingTag.hasClass('alert')).to.equal(false);
  });

  it('should decrement count when - button is clicked', () => {
    const expectedCount = initialCount - 1;
    wrapper.find('button')[0].trigger('click');
    expect(store.state.count).to.equal(expectedCount);
  });

  it('should increment count when + button is clicked', () => {
    const expectedCount = initialCount + 1;
    wrapper.find('button')[1].trigger('click');
    expect(store.state.count).to.equal(expectedCount);
  });

  describe('When counter is at minimum', () => {
    beforeEach(() => {
      store.state.count = MIN_COUNT;
      wrapper.update();
    });

    it('Should disable decrement button', () => {
      const btn = wrapper.find('button')[0];
      expect(btn.hasAttribute('disabled')).to.equal(true);
    });
  });

  describe('When count value is one less below limit', () => {
    beforeEach(() => {
      store.state.count = MAX_COUNT - 1;
      wrapper.update();
    });

    it('Should print alert message to user', () => {
      const remainingTag = wrapper.find('p')[0];
      expect(remainingTag.text()).to.equal('Only 1 items remain!');
      expect(remainingTag.hasClass('alert')).to.equal(true);
    });
  });

  describe('When counter is at maximum', () => {
    beforeEach(() => {
      store.state.count = MAX_COUNT;
      wrapper.update();
    });

    it('Should print alert message to user', () => {
      const remainingTag = wrapper.find('p')[0];
      expect(remainingTag.text()).to.equal('No more items!');
      expect(remainingTag.hasClass('alert')).to.equal(true);
    });

    it('Should disable increment button', () => {
      const btn = wrapper.find('button')[1];
      expect(btn.hasAttribute('disabled')).to.equal(true);
    });
  });
});
