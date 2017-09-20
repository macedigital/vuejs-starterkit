import Vue from 'vue';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(Hello);
    vm = new Constructor().$mount();
  });

  it('should render correct headline', () => {
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js PWA');
  });

  it('should render 9 links', () => {
    expect(vm.$el.querySelectorAll('.hello a').length).to.equal(9);
  });

  it('should render correct sub-headline with essential links', () => {
    expect(vm.$el.querySelectorAll('.hello h2').item(0).textContent).to.equal('Essential Links');
  });

  it('should render correct sub-headline with ecosystem links', () => {
    expect(vm.$el.querySelectorAll('.hello h2').item(1).textContent).to.equal('Ecosystem');
  });
});
