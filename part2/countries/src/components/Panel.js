import React from 'react'

const Panel = ({dataset})=>{
    return (
        <div>
            <img src = {dataset.flag} alt = {"Flag of ".concat(dataset.name)}/>
            <table>
                <tbody>
                    <tr>
                        <td>Country</td>
                        <td>{dataset.name}</td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>{dataset.region}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>{dataset.population}</td>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td>{dataset.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{dataset.area} sq. Km</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>
                            <ul>
                                {dataset.languages.map(curr => <li>{curr.name}</li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Panel;