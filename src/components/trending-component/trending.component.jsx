import React from 'react'

export const TrendingItems = ({ title, items }) => (
    <div className='trending-items'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(e => (
                        <h4>{e.name}</h4>
                    ))
            }
        </div>
    </div>
)