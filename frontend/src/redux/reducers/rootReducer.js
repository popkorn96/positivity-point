import { combineReducers } from "redux";
import {FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../actions/types';
 
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

export function userReducer(state = {
  pending: false,
  user: {},
  error: null}, action) {
  
    switch(action.type) {
        case FETCH_USER_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUser = state => state.user;
export const getUserPending = state => state.pending;
export const getUserError = state => state.error;

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