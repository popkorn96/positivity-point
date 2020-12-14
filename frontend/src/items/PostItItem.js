import React from 'react'

export default function PostItItem({postIt}) {
    return (
        <div>
            <i><p>{(postIt.user_id)} - {postIt.content}</p></i>
        </div>
    )
}
