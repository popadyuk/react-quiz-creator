import React from 'react';
import classes from  './Button.module.sass';

const Button = ({type, onClick, disabled, children}) => {
    const cls = [
        classes.Button,
        classes[type]
    ]

    return (
    <button className={cls.join(' ')} onClick={onClick} disabled={disabled}>
        {children}
    </button>)
}

export default Button