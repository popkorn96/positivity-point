export function logoutUser() {
  return (dispatch) => {
    fetch(`http://localhost:3001/logout/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    }).then((resp) => dispatch({ type: "LOGOUT" }));
  };
}