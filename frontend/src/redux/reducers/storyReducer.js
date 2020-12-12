function storyReducer(state = {stories: []}, action){
    switch(action.type){
        case "FETCH_STORY_SUCCESS":
            return console.log('success')
        default: 
        return state;
    }
}