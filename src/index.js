import React from 'react';
import { render } from 'react-dom';
import Index from './pages/Index';
import './index.css';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import configReducer from './reducers/configReducer';
import siderReducer from './reducers/SiderReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const combineReducer = combineReducers({
  config: configReducer,
  sider: siderReducer,
});

const store = createStore(combineReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
