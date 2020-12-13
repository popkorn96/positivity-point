export const getPostIts = () => {
    return dispatch => {
        fetch(`http://localhost:3001/post_its`)
        .then(resp => resp.json())
        .then(post_its => dispatch({type: 'FETCH_POST_IT_SUCCESS', payload: post_its}))
    }
}