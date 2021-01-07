export const createUser = (userData, ownProps) => {
    return dispatch => {
        fetch(`http://localhost:3001/signups`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify(userData),  
        })
        .then(resp => resp.json())
        .then((data) => {
            if (data.status === 200){
        dispatch({type: "SIGNUP", payload: data.attributes}
        , ownProps.history.push("/home") )}
        else if (data.status !== 500) {
            dispatch({
              type: "FAILED_SIGNUP",
              payload: data.errors
          })}
        })
    }
}