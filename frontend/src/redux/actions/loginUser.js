export function loginUser(userData, ownProps) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData, ownProps),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.status === 200){
          dispatch({
            type: "LOGIN",
            payload: data.user.data.attributes 
          }, ownProps.history.push("/")
          )}
          else if (data.status !== 500) {
            dispatch({
              type: "FAILED_LOGIN",
              payload: data.errors
          })}
      })};
};