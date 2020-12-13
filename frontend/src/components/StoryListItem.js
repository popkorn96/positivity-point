import React from 'react'

export default function StoryListItem({story}) {
    return (
        <div>
            <h2>{story.title} -{(story.user_id)}</h2> 
            <i><p>{story.content}</p></i>
        </div>
    )
}
