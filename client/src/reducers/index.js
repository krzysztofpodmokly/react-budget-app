import { combineReducers } from 'redux';
import budgetReducer from 'reducers/budgetReducer';

export default combineReducers({
  budget: budgetReducer,
});
