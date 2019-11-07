import * as actionTypes from 'actions/types';

const initState = {
  income: [],
  expense: [],
  loading: true,
  loadingInc: true,
  loadingExp: true,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_INCOME_START:
      return {
        ...state,
        loadingInc: true,
      };

    case actionTypes.FETCH_INCOME_SUCCESS:
      return {
        ...state,
        income: [...state.income, ...payload],
        loadingInc: false,
      };

    case actionTypes.FETCH_EXPENSE_START:
      return {
        ...state,
        loadingExp: true,
      };

    case actionTypes.FETCH_EXPENSE_SUCCESS:
      return {
        ...state,
        expense: [...state.expense, ...payload],
        loadingExp: false,
      };

    case actionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        [payload.type]: [...state[payload.type], payload.content],
        loading: false,
      };

    case actionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        [payload.type]: state[payload.type].filter(
          item => item._id !== payload.id,
        ),
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
