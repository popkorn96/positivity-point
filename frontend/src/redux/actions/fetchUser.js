import {fetchUserPending, fetchUserSuccess, fetchUserError} from '../reducers/rootReducer';

function fetchUser() {
    return dispatch => {
        dispatch(fetchUserPending());
        fetch('https://exampleapi.com/logged_in')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUserSuccess(res.user);
            return res.user;
        })
        .catch(error => {
            dispatch(fetchUserError(error));
        })
    }
}

export default fetchUser;
