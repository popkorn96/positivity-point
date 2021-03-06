import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import storyReducer from './reducers/storyReducer';
import postItReducer from './reducers/postItReducer';
import goalReducer from './reducers/goalReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    stories: storyReducer,
    postIts: postItReducer,
    goals: goalReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;