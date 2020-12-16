
import { initialState } from "../actions/initialState"
import {  FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAILURE  } from "../actions/getUser"

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };
   
        case FETCH_USER_SUCCESS:
          return {
            ...state,
            loading: false,
            user: action.payload.user
          };
  
        case FETCH_USER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
            user: {}
          };
  
        default:
          return state;
    }
}