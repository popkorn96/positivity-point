export default function storyReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_STORY_SUCCESS":
            return {...state, all: action.payload};
        
        case "FETCH_TO_CREATE_STORY":
            
            return {
                debugger
                ...state,
                all: [...state.all, action.payload]
            }
            debugger;
        case "FETCH_TO_DELETE_STORY":
            return {
                ...state,
                all: state.stories.filter((story) => story.id !== action.payload.id),
            };
        default: 
            return state;
    }
  }