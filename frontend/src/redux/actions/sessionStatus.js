import { LOGGED_IN } from "./types";
import { LOGGED_OUT } from "./types";
// import axios from 'axios'

export function sessionStatus() {
  return (dispatch) => {
    fetch(`http://localhost:3001/logged_in`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.logged_in
          ? dispatch({
              type: LOGGED_IN,
              payload: {
                user: data.user.data.attributes,
                isLoggedIn: data.logged_in,
              },
            })
          : dispatch({ type: LOGGED_OUT, payload: data });
      });
  };
}
