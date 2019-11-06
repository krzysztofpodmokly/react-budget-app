import axios from 'axios';
import * as actionTypes from 'actions/types';

export const initLoading = () => ({
  type: actionTypes.INIT_LOADING,
});

export const fetchIncome = () => async dispatch => {
  try {
    dispatch(initLoading());
    const response = await axios.get('/api/budget/income');
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
    dispatch(initLoading());
    const response = await axios.get('/api/budget/expense');
    // console.log(response.data);
    dispatch({
      type: actionTypes.FETCH_EXPENSE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_EXPENSE_FAIL, payload: error });
  }
};

export const combineFetching = () => async dispatch => {
  try {
    await Promise.all([dispatch(fetchIncome()), dispatch(fetchExpense())]);
  } catch (error) {
    // console.log(error);
  }
};

export const addItem = (formValues, type) => async dispatch => {
  try {
    dispatch(initLoading());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post('/api/budget', formValues, config);
    dispatch({
      type: actionTypes.ADD_ITEM_SUCCESS,
      payload: { content: response.data, type }, // type is either income or expense
    });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_ITEM_FAIL, payload: error });
  }
};

export const deleteItem = (id, type) => async dispatch => {
  try {
    dispatch(initLoading());
    await axios.delete(`/api/budget/delete/${id}`);
    dispatch({
      type: actionTypes.DELETE_ITEM_SUCCESS,
      payload: { id, type },
    });
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_ITEM_FAIL, payload: error });
  }
};
