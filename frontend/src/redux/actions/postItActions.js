export const getPostIts = () => {
    return dispatch => {
        fetch(`http://localhost:3001/post_its`)
        .then(resp => resp.json())
        .then(postIts => dispatch({type: 'FETCH_POST_IT_SUCCESS', payload: postIts}))
    }
}
export const createPostIt = (formInput) => {
    return dispatch => {
        fetch(`http://localhost:3001/post_its`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formInput),  
        })
        .then(resp => resp.json())
        .then(postIt => dispatch({type: "FETCH_TO_CREATE_POST_IT", payload: postIt}))
    }
}