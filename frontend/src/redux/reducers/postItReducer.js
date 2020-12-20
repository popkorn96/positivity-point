export default function postItReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_POST_IT_SUCCESS":
            return {...state, all: action.payload};
        case "FETCH_TO_CREATE_POST_IT":
        return {
            ...state,
            all: [...state.all, action.payload]
        } 
        default: 
        return state;
    }
  }