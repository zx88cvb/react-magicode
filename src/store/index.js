import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from 'sagas'

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

// 通过中间件执行或者说运行saga
sagaMiddleware.run(rootSaga, store);

// store.runSaga = (saga) => {
//   sagaMiddleware.run(rootSaga);
// };

export default store;