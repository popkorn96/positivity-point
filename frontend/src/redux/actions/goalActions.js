export const getGoals = () => {
    return dispatch => {
        fetch(`http://localhost:3001/goals`)
        .then(resp => resp.json())
        .then(goals => dispatch({type: 'FETCH_GOAL_SUCCESS', payload: goals}))
    }
}