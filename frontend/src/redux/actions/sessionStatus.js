export const sessionStatus = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/status`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.logged_in === true) { 
          dispatch({
              type: "LOGGED_IN",
              payload: {
                logged_in: data.logged_in,
                user: data.user.data.attributes 
          },
            })}
      else if (data.logged_in === false) {
        dispatch({ type: "LOGGED_OUT", payload: data.logged_in });
      }});
  };
}