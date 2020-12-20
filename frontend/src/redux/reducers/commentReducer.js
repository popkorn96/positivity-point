export default function commentReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_COMMENT_SUCCESS":
            return {...state, all: action.payload};
        case "FETCH_TO_CREATE_COMMENT":
            return {
                ...state,
                all: [...state.all, action.payload]
                } 
        default: 
        return state;
    }
}