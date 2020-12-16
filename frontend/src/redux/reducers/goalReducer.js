export default function goalReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_GOAL_SUCCESS":
            return {...state, all: action.payload};
        default: 
        return state;
    }
}