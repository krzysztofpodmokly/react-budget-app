import * as actions from 'actions/database';
import * as actionTypes from 'actions/types';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockedData = [{ value: 1, title: 'Title' }];

describe('fetchIncome action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetches Income data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockedData,
      });
    });

    const expectedActions = [
      { type: actionTypes.FETCH_INCOME_START },
      { type: actionTypes.FETCH_INCOME_SUCCESS, payload: mockedData },
    ];

    const store = mockStore({ income: [] });

    return store.dispatch(actions.fetchIncome()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('initLoading', () => {
  it('has the correct type', () => {
    const action = actions.initLoading();
    expect(action.type).toEqual(actionTypes.INIT_LOADING);
  });
});
