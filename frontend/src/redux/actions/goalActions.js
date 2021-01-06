export const getGoals = () => {
    return dispatch => {
        fetch(`http://localhost:3001/goals`)
        .then(resp => resp.json())
        .then(goals => dispatch({type: 'FETCH_GOAL_SUCCESS', payload: goals}))
    }
}
export const createGoal = (formInput) => {
    return dispatch => {
        fetch(`http://localhost:3001/goals`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formInput),  
        })
        .then(resp => resp.json())
        .then(goal => dispatch({type: "FETCH_TO_CREATE_GOAL", payload: goal.attributes}))
    }
}
export function deleteGoal(goal) {
    return (dispatch) => {
      return fetch(`http://localhost:3001/goals/${goal.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(goal),
        credentials: "include",
      })
        .then((resp) => resp.json())
        .then((data) => {
          dispatch({ type: "FETCH_TO_DELETE_GOAL", payload: data.goal });
        });
    };
  }