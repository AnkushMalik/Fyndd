import React from 'react'

import { CollectionItem } from '../collection-item/collection-item.component'
import './trending.styles.scss'
export const TrendingItems = ({ title, items }) => (
    <div className='trending-items'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(e => (
                        < CollectionItem key={e.id} item={e} />
                    ))
            }
        </div>
    </div>
)