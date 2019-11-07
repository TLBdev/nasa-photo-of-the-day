import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PhotoCard from './components/photoCard'

function App() {
  const [photo, changePhoto] = useState({})
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
    .then((response)=>{
      console.log(response.data)
      changePhoto(response.data)
    }
    )
  }, [])
  return (
    <div className="App">
      
        <PhotoCard data = {photo}/>
      
    </div>
  );
}

export default App;
