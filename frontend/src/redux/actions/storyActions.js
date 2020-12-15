
export const getStories = () => {
    return dispatch => {
        fetch(`http://localhost:3001/stories`)
        .then(resp => resp.json())
        .then(stories => dispatch({type: 'FETCH_STORY_SUCCESS', payload: stories}))
    }
}
