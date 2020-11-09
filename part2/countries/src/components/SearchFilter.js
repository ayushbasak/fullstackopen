import React from 'react'
import Panel from './Panel'
const SearchFilter = ({countryName, data})=>{
    const filteredData = (data.filter(curr => curr.name.toUpperCase().includes(countryName.toUpperCase())));
    if(filteredData.length > 10)
        return (
            <p>Dataset too big! Filter more</p>
        );
    else if(filteredData.length > 1)
        return (
            <>
            <p><strong>List of Countries</strong></p>
            <ul>
                {filteredData.map(curr => <li>{curr.name}</li>)}
            </ul>
            </>
        );
    else if(filteredData.length === 1)
        return (   
            <Panel dataset = {filteredData[0]} />
        );
    return (<p>Invalid Country Name</p>);
}
export default SearchFilter;