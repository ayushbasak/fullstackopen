import React, {useState, useEffect} from 'react'
import './index.css'
import axios from 'axios'
import Header from './components/Header'
import Input from './components/Input'
import SearchFilter from './components/SearchFilter'

const App = ()=>{
    const [countryName, setCountryName] = useState('');
    const [countryList, setCountryList] = useState([]);
    
    //Get DATA
    useEffect(()=>{
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response =>{
                setCountryList(response.data);
            })
            .catch((e)=>{console.log(e);})
    },[])

    const nameChange = (event)=>{
        const name = event.target.value;
        setCountryName(name);
    }
    return (
        <>
        <Header heading = 'Countries made with 💖 by ayushbasak' />
        <div>
            <Input driver = {nameChange} text = "enter name of country" />
        </div>
        <div>
            <SearchFilter countryName = {countryName} data = {countryList}/>
        </div>
        </>
    );
}

export default App;