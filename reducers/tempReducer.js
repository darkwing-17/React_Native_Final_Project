import {combineReducers} from 'redux';
import {ADD_TEMP_RECORD} from '../actions/types';

const INITIALIZE = {
  current: [],
  example: ['what is this', 'and what is this', 'and what is that'],
};

const tempReducer = (state = INITIALIZE, action) => {

  switch (action.type) {
    case ADD_TEMP_RECORD:
      // State initialization
      const {current, example} = state;
      // Take record out
      const newRecord = example.splice(action.payload, 1);
      // Add new record
      current.push(newRecord);
      // Redux state update
      const newState = {current, example};
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  test: tempReducer,
});
