import {createStore, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import Testreducer from '../reducers/Testreducer';

const sagaMiddleware = createSagaMiddleware();
// const Store = createStore(Testreducer, applyMiddleware(sagaMiddleware));
const Store = configureStore({
  reducer: Testreducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default Store;
