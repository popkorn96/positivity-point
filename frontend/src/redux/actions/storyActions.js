export const getStories = () => {
    return dispatch => {
        fetch(`http://localhost:3001/stories`)
        .then(resp => resp.json())
        .then(stories => dispatch({type: 'FETCH_STORY_SUCCESS', payload: stories}))
    }
}
export const createStory = (formInput) => {
    return dispatch => {
        fetch(`http://localhost:3001/stories`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formInput),  
        })
        .then(resp => resp.json())
        .then(story => dispatch({type: "FETCH_TO_CREATE_STORY", payload: story.attributes}))
    }
}

export function deleteStory(story) {
    return (dispatch) => {
      return fetch(`http://localhost:3001/stories/${story.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(story),
        credentials: "include",
      })
        .then((resp) => resp.json())
        .then((data) => {
          dispatch({ type: "FETCH_TO_DELETE_STORY", payload: data.story });
        });
    };
}
export function saveStory(story) {
    return (dispatch) => {
      return fetch(`http://localhost:3001/stories/${story.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(story),
        credentials: "include",
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.saved === true) { 
            dispatch({
                type: "FETCH_TO_SAVE",
                payload: {
                  story: data.story.data.attributes 
            },
              })}
        else if (data.saved === false) {
          dispatch({ type: "FETCH_TO_UNSAVE", payload: data.saved });
        }});
    };
}