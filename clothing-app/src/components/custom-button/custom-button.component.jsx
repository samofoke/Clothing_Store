import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, googleButton, ...otherProps}) => (
    <button className={`${googleButton ? 'sign-in-google': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;