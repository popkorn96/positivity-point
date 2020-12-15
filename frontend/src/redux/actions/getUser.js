export const getUser = () => {
    return dispatch => {
        fetch(`http://localhost:3001/users/1`)
        .then(resp => resp.json())
        .then(user => dispatch({type: 'FETCH_USER_SUCCESS', payload: user}))
    }
}