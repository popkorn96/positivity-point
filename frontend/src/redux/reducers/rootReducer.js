import { combineReducers } from "redux";
import {FETCH_USER_SUCCESS} from '../actions/types';
 
const rootReducer = combineReducers({
  user: userReducer,
  goals: goalReducer,
  stories: storyReducer,
  postIts: postItReducer
});
 
export default rootReducer;

function goalReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_GOAL_SUCCESS":
            return {...state, all: action.payload};
        default: 
        return state;
    }
}

export function userReducer(state = {userObj: {}}, action) {
  
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state, userObj: action.payload
            }
        default: 
            return state;
    }
}


function storyReducer(state = {all: []}, action){
  switch(action.type){
      case "FETCH_STORY_SUCCESS":
          return {...state, all: action.payload};
      default: 
      return state;
  }
}
function postItReducer(state = {all: []}, action){
  switch(action.type){
      case "FETCH_POST_IT_SUCCESS":
          return {...state, all: action.payload};
      default: 
      return state;
  }
}