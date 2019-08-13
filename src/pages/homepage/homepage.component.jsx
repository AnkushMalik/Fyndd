import React from 'react'
import './homepage.styles.scss'
import DirectoryMenu from '../../components/directory-menu/directory-menu.component'

export const HomePage = () => (
    <div className="homepage">
        <h1>Fyndd</h1>
        <DirectoryMenu />
    </div>
)