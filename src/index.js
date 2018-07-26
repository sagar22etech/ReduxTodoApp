import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import todos from './reducers';
import { Provider } from 'react-redux';

const store = createStore(todos)
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));