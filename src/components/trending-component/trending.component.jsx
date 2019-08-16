import React from 'react'

export const TrendingItems = (props) => (
    <div>
        <h1>{props.title}</h1>
        {
            props.items.map(e => (
                <h4>{e.name}</h4>
            ))
        }
    </div>
)