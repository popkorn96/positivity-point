
function usersReducer(state = {
    logged_in: false, 
    user: {} },
  action){
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        logged_in: true,
        user: action.payload,
      };

    case "LOGIN":
      return {
        logged_in: true,
        user: action.payload,
      };

    // case FAILED_LOGIN:
    //   return {
    //     emailEr: emailEr,
    //     passwordEr: passwordEr,
    //   };
    
    // case FAILED_SIGNUP:
    //   return {
    //     status: status,
    //     emailError: emailError[0],
    //     passwordError: passwordError,
    //     passwordConfirmationError: passwordConfirmationError,
    //   };
    case "LOGGED_IN":
      return {
        logged_in: true,
        user: action.payload.user,
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