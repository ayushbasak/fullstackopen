import React, { useEffect, useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [search, setSearch] = useState('')


  useEffect(()=>{
    axios
      .get('http://localhost:3001/people')
      .then(response =>{
        console.log(response);
        setData(response.data);
      })
      .catch(e => {console.log(e);})
  }, []);


  const changeName = (event)=>{
    const parsedName = event.target.value.toUpperCase();
    setName(parsedName);
  }
  const changeNumber = (event)=>{
    setPhone(event.target.value);
  }
  const changeSearch = (event)=>{
    const parsedName = event.target.value.toUpperCase();
    setSearch(parsedName);
  }
  const  addToList = (e)=>{
        e.preventDefault();
        if(data.find(curr => curr.name === name || curr.phone === phone))
            alert(`${name} already exists! Try another.`);
        else if(name === '' || phone === '')
            alert('Empty Inputs')
        else{
            setName('')
            setPhone('')
            const newData = {name: name, phone: phone};
            setData(data.concat(newData));
        }
    }

    const clearList = (e)=>{
        e.preventDefault();
        setData([]);
    }
  return (
      <>
        {alert}
        <Form changeName = {changeName} changeNumber = {changeNumber} addToList = {addToList} clearList = {clearList} changeSearch = {changeSearch} currName = {name} currPhone = {phone}/>
        <SearchFilter search = {search} data = {data} />
      </>
  )
}

export default App