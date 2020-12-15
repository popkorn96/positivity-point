export const getUser = (id) => {
    return dispatch => {
        fetch(`http://localhost:3001/user/${id}`)
        .then(resp => resp.json())
        .then(goals => dispatch({type: 'FETCH_USER_SUCCESS', payload: goals}))
    }
}