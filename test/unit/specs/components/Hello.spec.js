import { shallow } from 'avoriaz';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Hello);
  });

  it('should render headline based on `msg` data-property', () => {
    const { msg } = wrapper.data();
    expect(wrapper.find('.hello h1')[0].text()).to.equal(msg);
  });

  it('should have reactive `msg` data-property', () => {
    const msg = 'Something else coming in';
    wrapper.setData({
      msg,
    });
    expect(wrapper.find('.hello h1')[0].text()).to.equal(msg);
  });

  it('should render 9 links', () => {
    expect(wrapper.find('.hello a').length).to.equal(9);
  });

  it('should render correct sub-headline with essential links', () => {
    expect(wrapper.find('.hello h2')[0].text()).to.equal('Essential Links');
  });

  it('should render correct sub-headline with ecosystem links', () => {
    expect(wrapper.find('.hello h2')[1].text()).to.equal('Ecosystem');
  });
});
