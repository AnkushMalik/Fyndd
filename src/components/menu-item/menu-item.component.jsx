import React from 'react'

import './menu-item.styles.scss'

export const MenuItem = (props) => (
    <div
        style={{
            backgroundImage: `url(${props.imgURL})`
        }}
        className={`${props.size} menu-item`}>
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)