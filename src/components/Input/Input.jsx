import React from 'react';


const Input = ({ inputType, inputClass, inputEvent, value, checked, inputName}) => {
    return (
            <input type={inputType} name={inputName} className={inputClass} onChange={inputEvent}  value={value} checked={checked} />
    )
}

export default Input;