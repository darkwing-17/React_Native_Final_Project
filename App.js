/**
 *
 * ICS X472.03 - Advanced React - Ed Chu - Final Project
 *
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tempReducer from './reducers/tempReducer';
import AppNavigator from './AppNavigator';

const store = createStore(tempReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
