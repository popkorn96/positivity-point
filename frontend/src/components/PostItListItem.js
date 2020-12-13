import React from 'react'

export default function PostItListItem({postIt}) {
    return (
        <div>
            <h2>{(postIt.user_id)}</h2> 
            <i><p>{postIt.content}</p></i>
        </div>
    )
}
