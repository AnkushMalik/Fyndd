import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import Logo from '../../assets/logo_transparent.png'

export const Header = () => (
    <div className='header'>
        <Link to='/' className="logo-container">
            <img src={Logo} alt='Fyndd' />
        </Link>
        <div className="btn-right-grp">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/cart'>Cart</Link>
            <Link className='option' to='/account'>Log In</Link>
        </div>
    </div>
)