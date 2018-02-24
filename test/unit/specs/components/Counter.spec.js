import Vue from 'vue';
import Vuex from 'vuex';
import { shallow } from 'avoriaz';
import sinon from 'sinon';
import Counter from '@/components/Counter';

Vue.use(Vuex);

describe('Counter.vue', () => {
  let wrapper;
  let incrButton;
  let decrButton;
  let initialCount;

  beforeEach(() => {
    initialCount = 3;
    incrButton = sinon.spy();
    decrButton = sinon.spy();

    const store = new Vuex.Store({
      state: {
        count: initialCount,
      },
      mutations: {
        decrement: decrButton,
        increment: incrButton,
      },
    });

    wrapper = shallow(Counter, { store });
  });

  it('should show computed count value', () => {
    const preTag = wrapper.find('pre')[0].text();
    expect(preTag).to.equal(`Current count: ${initialCount}`);
  });

  it('should call decrement when - button is clicked', () => {
    wrapper.find('button')[0].trigger('click');
    expect(decrButton.callCount).to.equal(1);
  });

  it('should call increment when + button is clicked', () => {
    wrapper.find('button')[1].trigger('click');
    expect(incrButton.callCount).to.equal(1);
  });
});
