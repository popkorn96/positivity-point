export function getUser(id) {
    return function(dispatch,id) {
        dispatch(fetchUserBegin(id));
        return fetch(`http://localhost:3001/users/${id}`)
        .then(res => { 
            dispatch(fetchUserSuccess(res.data)
    )}).catch((res) => {dispatch(fetchUserFailure(res.data))})
}}


export const FETCH_USER_BEGIN   = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserBegin = (id) => ({
    type: FETCH_USER_BEGIN
});

export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    payload: { user }
});

export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    payload: { error }
});