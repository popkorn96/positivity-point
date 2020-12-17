import {
  LOGGED_OUT,
  LOGGED_IN,
  SIGNUP,
  LOGIN,
  LOGOUT,
  FAILED_LOGIN,
  FAILED_SIGNUP
  // ,FETCH_RECIPE_SHOW_PLUS_INGREDIENTS,
  // FETCH_RECIPES_PLUS_INGREDIENTS,
  // FETCH_TO_DELETE_INGREDIENT,
  // FETCH_TO_UPDATE_INGREDIENT,
  // FETCH_TO_ADD_INGREDIENT,
  // FETCH_TO_UPDATE_RECIPE,
  // FETCH_TO_CREATE_RECIPE,
  // FETCH_TO_DELETE_RECIPE,
  // FETCH_CATEGORIES,
} from "../actions/types";

export default function usersReducer(
  state = { 
    isLoggedIn: false, 
    user: {}, 
    emailError: "", 
    passwordError: "" },
  action
){
  const { payload, emailEr, passwordEr, emailError, passwordError, passwordConfirmationError, status,  type } = action;

  switch (type) {
    case SIGNUP:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };

    case LOGIN:
      return {
        isLoggedIn: true,
        user: payload,
      };

    case FAILED_LOGIN:
      return {
        emailEr: emailEr,
        passwordEr: passwordEr,
      };
    
    case FAILED_SIGNUP:
      return {
        status: status,
        emailError: emailError[0],
        passwordError: passwordError,
        passwordConfirmationError: passwordConfirmationError,
      };
    case LOGGED_IN:
      return {
        isLoggedIn: true,
        user: payload.user,
      };

    case LOGGED_OUT:
      return {
        isLoggedIn: false,
        user: {},
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
        usersReducer: {},
      };

    default:
      return state;
  }
};