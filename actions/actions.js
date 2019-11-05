import {ADD_TEMP_RECORD} from './types';

export const addRecord = recordIndex => ({
  type: ADD_TEMP_RECORD,
  payload: recordIndex,
});
