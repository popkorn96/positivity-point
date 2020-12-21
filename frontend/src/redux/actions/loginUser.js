export function loginUser(user) {
  return (dispatch) => {
    return fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.status !== 500
          ? dispatch(
              {
                type: "LOGIN",
                payload: data.user.data.attributes,
              },
            )
          : dispatch(
              {
                type: FAILED_LOGIN,
                emailEr: data.email_error,
                passwordEr: data.passwordError,
              },
            );
      });
  };
}