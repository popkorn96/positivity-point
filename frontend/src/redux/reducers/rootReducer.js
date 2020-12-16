import { combineReducers } from "redux";

import goalReducer from './goalReducer'
import userReducer from './userReducer'
import storyReducer from './storyReducer'
import postItReducer from './postItReducer'
 
const rootReducer = combineReducers({
  user: userReducer,
  goals: goalReducer,
  stories: storyReducer,
  postIts: postItReducer
});
 
export default rootReducer;







