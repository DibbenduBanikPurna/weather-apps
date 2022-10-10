import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Result from './Components/Result/Result';
import { useState } from 'react';

function App() {
  const [searchCity, setSearchCity]=useState('')
  const [weather,setWeather]=useState([])
  const  [history,setHistory]=useState([])
  console.log(history)
  const handleChange=(e)=>{
   // console.log(e)
    setSearchCity(e);
  }

  const handleSubmit=()=>{
  
   if(searchCity !==""){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
    .then(res=>res.json())
    .then(data=>{
    //  // console.log(data)
    //  if(history.indexOf(searchCity)===-1){
    //   setHistory(
    //     [
    //       ...history,
    //       searchCity
    //     ]
    //   )
      
    //  }
     if(data.cod===200){
       setWeather(data)

        // console.log(data)
     if(history.indexOf(searchCity)===-1){
      setHistory(
        [
          ...history,
          searchCity
        ]
      )
      
     }
     }
    })
    .catch(err=>{
      console.log(err)
    })
  }
  }


  const historySearchHandler= async(data)=>{
       setSearchCity(data)
   if(data !==""){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
    .then(res=>res.json())
    .then(data=>{
    //  // console.log(data)
    //  if(history.indexOf(searchCity)===-1){
    //   setHistory(
    //     [
    //       ...history,
    //       searchCity
    //     ]
    //   )
      
    //  }
     if(data.cod===200){
       setWeather(data)

        // console.log(data)
     if(history.indexOf(searchCity)===-1){
      setHistory(
        [
          ...history,
          searchCity
        ]
      )
      
     }
     }
    })
    .catch(err=>{
      console.log(err)
    })
  }

  }
  return (
    <div className="App">
      <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
      <Result data={weather}  history={history} historySearch={historySearchHandler}/>
    </div>
  );
}

export default App;
