export default function storyReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_STORY_SUCCESS":
            return {...state, all: action.payload};
        default: 
        return state;
    }
  }