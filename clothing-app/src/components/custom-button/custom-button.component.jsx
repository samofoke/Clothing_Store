import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({
    children, 
    googleButton, 
    invert, 
    ...otherProps}) => (
    <button className={`${invert ? 'invert': ''} 
    ${googleButton ? 'sign-in-google': ''} custom-button`} 
    {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;