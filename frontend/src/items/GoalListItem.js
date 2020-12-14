import React from 'react'

export default function goalListItem({goal}) {
    return (
       <li><div>
           <i><p>{goal.content}</p></i>
        </div></li>
    )
}
