export const getUser = () => {
    return dispatch => {
        fetch(`http://localhost:3001/logged_in`)
        .then(resp => resp.json())
        .then(user => dispatch({type: 'FETCH_USER_SUCCESS', payload: user}))
    }
}