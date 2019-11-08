import budgetReducer from 'reducers/budgetReducer';
import * as actionTypes from 'actions/types';

it('handles actions of type INIT_LOADING', () => {
  const action = {
    type: actionTypes.INIT_LOADING,
  };

  const newState = budgetReducer(
    {
      loading: true,
    },
    action,
  );

  expect(newState).toEqual({ loading: true });
});
