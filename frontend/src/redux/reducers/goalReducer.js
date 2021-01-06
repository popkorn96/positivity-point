export default function goalReducer(state = {all: []}, action){
    switch(action.type){
        case "FETCH_GOAL_SUCCESS":
            return {...state, all: action.payload};
        case "FETCH_TO_CREATE_GOAL":
            return {
                ...state,
                all: [...state.all, action.payload]
            } 
        case "FETCH_TO_DELETE_GOAL":
        return {
            ...state,
            all: state.goals.filter((goal) => goal.id !== action.payload.id),
        };
        default: 
        return state;
    }
}