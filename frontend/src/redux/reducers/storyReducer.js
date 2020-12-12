function storyReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_STORY_SUCCESS":
            return {...state, stories: action.payload};
        default: 
        return state;
    }
}
export default storyReducer;