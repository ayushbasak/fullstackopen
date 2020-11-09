import React from 'react'
const Input = ({driver, text})=>{
    return (
        <input onChange = {driver} placeholder = {text}/>
    );
}

export default Input;