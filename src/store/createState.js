import { MIN_COUNT } from '@/store/mutations';

const defaultState = {
  count: MIN_COUNT,
};

const createState = customState => Object.assign({}, defaultState, customState);

export default createState;
