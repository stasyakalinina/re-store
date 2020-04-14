import { createStore, applyMiddleware } from 'redux';
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

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;