import * as actionTypes from 'actions/types';

const initState = {
  income: [],
  expense: [],
  loading: true,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_INCOME_SUCCESS:
      return {
        ...state,
        income: [...state.income, ...payload],
        loading: false,
      };
    case actionTypes.FETCH_EXPENSE_SUCCESS:
      return {
        ...state,
        expense: [...state.expense, ...payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
