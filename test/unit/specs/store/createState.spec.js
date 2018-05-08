import createState from '@/store/createState';

describe('store:createState', () => {
  const defaultState = {
    count: 0,
  };

  it('should provide defaults', () => {
    expect(createState()).to.deep.equal(defaultState);
  });

  it('should merge custom state with default state', () => {
    const customState = {
      count: 5,
      other: 'thing',
    };
    expect(createState(customState)).to.deep.equal({
      count: 5,
      other: 'thing',
    });
  });
});
