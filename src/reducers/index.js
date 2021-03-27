/* src/reducers/index.js (unifica todos os reducers)*/

import {combineReducers} from 'redux';
import notesReducer from './notesReducer';

export default combineReducers({
  notes: notesReducer,
});
