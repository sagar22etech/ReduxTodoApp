import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todos from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  todos,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));