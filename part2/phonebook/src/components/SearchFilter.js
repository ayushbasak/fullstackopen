import React from 'react'
import Header from './Header'
import Notification from './Notification'

const Display = ({data, search, deleteFunction})=>{
    let elem =  data.filter(curr => curr.name.includes(search) || curr.phone.includes(search));
    if(elem === undefined){
        return (
            <>
            {data.map((curr,i) => <li key = {i}><strong>{curr.name}</strong> {curr.phone}</li>)}
            </>
        );
    }
    else{
        return (
            <>
            {elem.map(curr => <><li key = {curr.id}>
                <strong>{curr.name}</strong> {curr.phone}
                <button className = "deleteButton" onClick = {()=>{deleteFunction(curr.id)}}>delete</button>
                </li></>)}
            </>
        );
    }
}

const SearchFilter = ({search, data, deleteFunction, error})=>{
    return (
        <>
        <div className = "filter">
            <Notification message  = {error}/>
            <Header text = "List" />
            <ol className = "scrollableList">
                <Display search = {search} data = {data}  deleteFunction = {deleteFunction}/>
            </ol>
        </div>
        </>
    );
}

export default SearchFilter;