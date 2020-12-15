import { combineReducers } from "redux";
 
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
function userReducer(state = {user: {}}, action){
  switch(action.type) {
    case 'LOADING_USER':
      return {
        ...state,
        user: state.user,
        loading: true
      }
    case 'RENDER_USER':
      return {
        ...state,
        user: action.user,
        loading: false
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