export default function commentReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_COMMENT_SUCCESS":
            return {...state, all: action.payload};
        default: 
        return state;
    }
}