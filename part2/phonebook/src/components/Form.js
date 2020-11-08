import React from 'react'
import Header from './Header'

const Input = ({driver, placeholder, value})=>{
    return (
        <input onChange = {driver} value = {value} placeholder = {placeholder}/>
    );
}

const Button = ({event, type, text})=>{
    return (
        <>
        <button onClick = {event} type = {type}>{text}</button>
        </>
    );
}
const Form = (props)=>{
    return(
        <div>
            <Header text = "Phonebook" />
            <form>
            <Input driver = {props.changeName} placeholder = "Enter Name" value = {props.currName}/>
            <Input driver = {props.changeNumber} placeholder = "Enter Phone Number" value = {props.currPhone}/>
            <div class = "flow">
                <Button event = {props.addToList} text = "Add to List" type = "submit" />
                <Button event = {props.clearList} text = "Clear List" type = "submit" />
            </div>
            <Input driver = {props.changeSearch} placeholder = "Filter" />
            </form>
        </div>
    ); 
}

export default Form;