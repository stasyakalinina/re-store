import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddleware = () => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action);
};

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }

  return dispatch(action);
}

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware, stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout);
}

store.dispatch(delayedActionCreator(3500));

export default store;