export const getComments = () => {
    return dispatch => {
        fetch(`http://localhost:3001/comments`)
        .then(resp => resp.json())
        .then(comments => dispatch({type: 'FETCH_COMMENT_SUCCESS', payload: comments}))
    }
}