export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

function fetchUserPending() {
    return {
        type: FETCH_USER_PENDING
    }
}

function fetchUseruccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user: user
    }
}

function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        error: error
    }
}