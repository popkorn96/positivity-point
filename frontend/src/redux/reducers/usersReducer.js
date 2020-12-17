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

export const usersReducer = (
  state = { 
    logged_in: false, 
    user: {}},
  action
)=>{
  const { payload, type } = action; 

  switch (type) {
    case SIGNUP:
      return {
        ...state,
        logged_in: true,
        user: payload,
      };

    case LOGIN:
      return {
        logged_in: true,
        user: payload,
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
    case LOGGED_IN:
      return {
        logged_in: true,
        user: payload.user,
      };

    case LOGGED_OUT:
      return {
        logged_in: false,
        user: {},
      };

    case LOGOUT:
      return {
        logged_in: false,
        usersReducer: {},
      };

    default:
      return state;
  }
};