import React, { useEffect, useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import dataService from './services/dataService'
const App = () => {
  let defualtError = ' 😀 ';
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [search, setSearch] = useState('')
  const [error, setError] = useState(defualtError)


  useEffect(()=>{
    dataService
      .getAll()
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
            const newData = {name: name, phone: phone, id: data.length + 1};
            dataService
              .create(newData)
              .then(response => {})
              .catch((e)=>{console.log(e);})
            setData(data.concat(newData));
            setTimeout(()=>{
              setError(defualtError);
            },2000);
            setError(`Added : ${name}`);
        }
    }
    const deleteSingle = async (id)=>{
      dataService.delete(id);
      let temp = data;
      let column = temp.map(curr => curr.id);
      let index = column.indexOf(id);
      if(index > -1)
        temp.splice(index, 1);
      
      console.log(temp);  
      setData(temp);
      console.log("Removed");

      setTimeout(()=>{
        setError(defualtError);
      },2000);
      setError('Deleted One Row');
      // dataService.getAll()
      //   .then(response => setData(response.data))
      //   .catch(e => console.log(e))
    }
    const deleteAll = (e)=>{
      e.preventDefault();
      dataService.deleteAll();
      setData([]);
      console.log("Delete Button was clicked");
      setTimeout(()=>{
        setError(defualtError);
      },2000);
      setError('Deleted All');
    }

  return (
      <>
        {alert}
        <Form changeName = {changeName} changeNumber = {changeNumber} addToList = {addToList} clearList = {deleteAll} changeSearch = {changeSearch} currName = {name} currPhone = {phone}/>
        <SearchFilter search = {search} data = {data} deleteFunction = {deleteSingle} error = {error}/>
      </>
  )
}

export default App