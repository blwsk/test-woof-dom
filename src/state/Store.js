import Store  from '../woof-state/Store.js';
import Reducer from './Reducer.js';

const storeInstance = Store(Reducer);

export default storeInstance;
