  const userReducer = (state = { user: {}, loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_USER':
        return {
          ...state,
          user: state.user,
          loading: true
        }
      case 'RENDER_USER':
        return {
          ...state,
          user: action.user,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default userReducer;