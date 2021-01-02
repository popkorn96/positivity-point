
function usersReducer(state = {
    logged_in: false, 
    user: {},
    loginErr: "" }, action){
  const { payload, loginErr, status,  type } = action;
  switch (type) {
    case "SIGNUP":
      return {
        ...state,
        logged_in: true,
        user: payload,
      };

    case "LOGIN":
      console.log('login', payload.user)
      return {
        logged_in: true,
        user: payload,
      };

    case "FAILED_LOGIN":
      return {
        loginErr: loginErr
      };
    
    case "FAILED_SIGNUP":
      return {
        status: status,
        loginErr
      };
    case "LOGGED_IN":
      return {
        logged_in: true,
        user: payload.user,
      };

    case "LOGGED_OUT":
      return {
        logged_in: false,
        user: {},
      };

    case "LOGOUT":
      return {
        logged_in: false,
        usersReducer: {},
      };

    default:
      return state;
  }
};
export {usersReducer}