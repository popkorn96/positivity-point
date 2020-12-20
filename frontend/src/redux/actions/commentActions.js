export const getComments = () => {
    return dispatch => {
        fetch(`http://localhost:3001/comments`)
        .then(resp => resp.json())
        .then(comments => dispatch({type: 'FETCH_COMMENT_SUCCESS', payload: comments}))
    }
}
export const createComment = (formInput) => {
    return dispatch => {
        fetch(`http://localhost:3001/comments`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formInput),  
        })
        .then(resp => resp.json())
        .then(comment => dispatch({type: "FETCH_TO_CREATE_COMMENT", payload: comment.attributes}))
    }
}

