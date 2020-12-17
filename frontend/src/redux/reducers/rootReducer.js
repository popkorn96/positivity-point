import { combineReducers } from "redux";

import goalReducer from './goalReducer'
import storyReducer from './storyReducer'
import postItReducer from './postItReducer'
import {usersReducer} from './usersReducer'

export const rootReducer = combineReducers({
  user: usersReducer,
  goals: goalReducer,
  stories: storyReducer,
  postIts: postItReducer
});
