import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
//import reducer from './reducer';
const defaultState = {};

exports.configureStore = (initialState = defaultState) => {
  const store = createStore(
    // eslint-disable-next-line no-undef
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
    ),
  );
  persistStore(store, {storage: AsyncStorage});
  return store;
};
