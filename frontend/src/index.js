import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import goalReducer from './redux/reducers/goalReducer'
import storyReducer from './redux/reducers/storyReducer'
import postItReducer from './redux/reducers/postItReducer'
import commentReducer from './redux/reducers/commentReducer'
import {usersReducer} from './redux/reducers/usersReducer'

import { logger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  goals: goalReducer,
  stories: storyReducer,
  postIts: postItReducer,
  comments: commentReducer,
  userState: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
