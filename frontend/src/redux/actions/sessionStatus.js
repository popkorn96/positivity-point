import { LOGGED_IN } from "./types";
import { LOGGED_OUT } from "./types";
// import axios from 'axios'

export function sessionStatus() {
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
        data.logged_in ? 
        dispatch({
              type: LOGGED_IN,
              payload: {
                user: data.user.data.attributes, 
                logged_in: data.logged_in,
              },
            })
          : dispatch({ type: LOGGED_OUT, payload: data.logged_in });
      });
  };
}
