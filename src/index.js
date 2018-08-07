import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todos from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import {createLogger} from 'redux-logger'

const middleware=[];
const logger=createLogger({ collapsed:true });
if(process.env.NODE_ENV==='development'){
middleware.push(logger);
}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  todos,
  composeEnhancers(applyMiddleware(...middleware,sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
console.log(process.env.NODE_ENV);
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));