import React from 'react'
import Header from './Header'

const Display = ({data, search})=>{
    console.log(data, search);
    let elem =  data.filter(curr => curr.name.includes(search) || curr.phone.includes(search));
    if(elem === undefined){
        return (
            <>
            {data.map(curr => <li><strong>{curr.name}</strong> {curr.phone}</li>)}
            </>
        );
    }
    else{
        return (
            <>
            {elem.map(curr => <li><strong>{curr.name}</strong> {curr.phone}</li>)}
            </>
        );
    }
}

const SearchFilter = ({search, data})=>{
    return (
        <div>
            <Header text = "List" />
            <ol class = "scrollableList">
                <Display search = {search} data = {data} />
            </ol>
        </div>
    );
}

export default SearchFilter;