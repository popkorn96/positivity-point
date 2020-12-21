export default function postItReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_POST_IT_SUCCESS":
            return {...state, all: action.payload};
        case "FETCH_TO_CREATE_POST_IT":
        return {
            ...state,
            all: [...state.all, action.payload]
        } 
        case "FETCH_TO_DELETE_POST_IT":
            return {
                ...state,
                all: state.postIts.filter((postIt) => postIt.id !== action.payload.id),
        };
        default: 
        return state;
    }
  }