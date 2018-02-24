import { cookieStorage, persistedStateConfig } from '@/store/persistedState';

describe('store:persistedState plugin', () => {
  describe('cookieStorage', () => {
    it('should set cookie values', () => {
      expect(cookieStorage.setItem('foo', 'bar')).to.match(/^foo=bar;/);
    });

    it('should read cookie values', () => {
      expect(cookieStorage.getItem('foo')).to.equal('bar');
    });

    it('should delete cookie values', () => {
      expect(cookieStorage.removeItem('foo')).to.equal(undefined);
      expect(cookieStorage.getItem('foo')).to.equal(undefined);
    });
  });

  describe('persistedStateConfig', () => {
    it('should have correct name', () => {
      expect(persistedStateConfig.key).to.equal('_vuex');
    });

    it('should filter out route changes', () => {
      expect(persistedStateConfig.filter({ type: 'route/' })).to.equal(false);
    });

    it('should permit non-route changes', () => {
      expect(persistedStateConfig.filter({ type: 'something/' })).to.equal(true);
    });

    it('should use cookieStorage', () => {
      expect(persistedStateConfig.storage).to.deep.equal(cookieStorage);
    });
  });
});
