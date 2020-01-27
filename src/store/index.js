import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// let allReducers = {
//   // router: routerReducer,
//   reducer
// };

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

store.runSaga = (saga) => {
  sagaMiddleware.run(saga);
};

export default store;