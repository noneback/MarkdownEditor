import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Router from './Router';
import './index.css';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import configReducer from './reducers/configReducer';
import siderReducer from './reducers/SiderReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Index from './pages/Index';
import articleReducer from './reducers/articleReducer';

const combineReducer = combineReducers({
  config: configReducer,
  sider: siderReducer,
  article: articleReducer,
});

const store = createStore(combineReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
