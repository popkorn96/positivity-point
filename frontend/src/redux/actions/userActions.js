export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER'})
    fetch('http://localhost:3001/logged_in')    
    .then(response => {
      if (response.data.logged_in) {
          return response.json()
      } else if (!response.data.logged_in){
          dispatch({ type: 'LOGIN_FAILED', })
      }
    })
    .catch(error => console.log('api errors:', error))
}}
// export const fetchCats = () => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS'})
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//       return response.json()
//     }).then(responseJSON => {
//       dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//     })
//   }