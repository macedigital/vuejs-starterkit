import Vue from 'vue';
import Router from 'vue-router';
import RouterChild from '@/components/RouterChild';
import { shallow } from 'avoriaz';

Vue.use(Router);

const setupComponentWithRoute = ($route) => {
  const routes = [
    {
      path: '/:child',
      component: RouterChild,
    },
  ];
  const router = new Router({
    routes,
  });

  const wrapper = shallow(RouterChild, {
    router,
  });

  router.push($route);
  wrapper.update();

  return wrapper;
};

describe('RouterChild.vue', () => {
  it('should set Default title', () => {
    const $route = {
      path: '/',
    };
    const wrapper = setupComponentWithRoute($route);
    expect(wrapper.find('h1')[0].text()).to.equal('Default');
  });

  it('should set capitalized title passed from router parameter', () => {
    const $route = {
      path: '/something',
    };
    const wrapper = setupComponentWithRoute($route);

    expect(wrapper.vm.$route.params).to.deep.equal({
      child: 'something',
    });

    expect(wrapper.find('h1')[0].text()).to.equal('Something');
  });
});
