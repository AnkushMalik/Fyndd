import React from 'react'

import './custom-button.styles.scss'

export const CustomButton = ({ children, isGooglebtn, ...otherProps }) => (
    <button className={`${isGooglebtn ? isGooglebtn : ''} custom-button `} {...otherProps}>
        {children}
    </button >
);