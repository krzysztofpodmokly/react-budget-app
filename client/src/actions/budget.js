import axios from 'axios';
import * as actionTypes from 'actions/types';

export const fetchBudgetStart = () => ({
  type: actionTypes.FETCH_BUDGET_START,
});

export const fetchIncome = () => async dispatch => {
  try {
    dispatch(fetchBudgetStart());
    const response = await axios.get('/api/budget/income');
    console.log(response.data);
    dispatch({
      type: actionTypes.FETCH_INCOME_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_INCOME_FAIL, payload: error });
  }
};

export const fetchExpense = () => async dispatch => {
  try {
    dispatch(fetchBudgetStart());
    const response = await axios.get('/api/budget/expense');
    console.log(response.data);
    dispatch({
      type: actionTypes.FETCH_EXPENSE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_EXPENSE_FAIL, payload: error });
  }
};
