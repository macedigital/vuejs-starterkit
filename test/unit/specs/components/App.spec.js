import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';
import router from '@/router';
import { shallow } from 'avoriaz';

Vue.use(Vuex);

describe('App.vue', () => {
  let wrapper;
  let path;

  beforeEach(() => {
    wrapper = shallow(App, {
      router,
      store: new Vuex.Store({}),
    });
  });

  [
    {
      routePath: '/',
      routeName: 'home',
      componentClass: '.hello',
    },
    {
      routePath: '/router',
      routeName: 'router',
      componentClass: '.router',
    },
    {
      routePath: '/store',
      routeName: 'store',
      componentClass: '.store',
    },
  ].forEach(({ routePath, routeName, componentClass }) => {
    describe(`when visiting path ${routePath}`, () => {
      beforeEach(() => {
        router.push({
          path: routePath,
        });
      });

      it(`should navigate to "${routeName}" route`, () => {
        expect(wrapper.vm.$route.name).to.equal(routeName);
      });

      it(`should render "${componentClass}" component`, () => {
        expect(wrapper.find(`main > ${componentClass}`).length).to.equal(1);
      });
    });
  });

  describe('When visiting an unregistered route', () => {
    beforeEach(() => {
      path = '/some/route/going/nowhere/';
      router.push({
        path,
      });
    });

    it('should be on visited path', () => {
      expect(wrapper.vm.$route.path).to.equal(path);
    });

    it('should render "Not found"', () => {
      expect(wrapper.find('main > h1')[0].text()).to.equal('Page not found!');
    });
  });
});
