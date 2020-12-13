function postItReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_POST_IT_SUCCESS":
            return {...state, all: action.payload};
        default: 
        return state;
    }
}
export default postItReducer;