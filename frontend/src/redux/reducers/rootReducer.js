import { combineReducers } from "redux";

import goalReducer from './goalReducer'
import storyReducer from './storyReducer'
import postItReducer from './postItReducer'
import usersReducer from './usersReducer'

export const rootReducer = combineReducers({
  goals: goalReducer,
  stories: storyReducer,
  postIts: postItReducer,
  user: usersReducer
});
