
export const getStories = () => {
    return dispatch => {
        fetch(`http://localhost:3001/stories`)
        .then(resp => resp.json())
        .then(stories => dispatch({type: 'FETCH_STORY_SUCCESS', payload: stories}))
    }
}
export const createStory = (formData, ownProps) => {
    return dispatch => {
        fetch(`http://localhost:3001/stories`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),  
        })
        .then(resp => resp.json())
        .then(story => dispatch({type: "FETCH_TO_CREATE_STORY", payload: story.data.attributes}, ownProps.history.push(`/stories/${story.data.attributes.id}`)))
    }
}

