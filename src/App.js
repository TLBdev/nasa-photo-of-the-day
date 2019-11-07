import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PhotoCard from './components/photoCard'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIyNjY2fQ&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
`

function App() {
  const [photo, changePhoto] = useState({})
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ncxT757aEydr3RjyMUd1CcEOoyPS6Crt0DsjgBY3 ')
    .then((response)=>{
      console.log(response.data)
      changePhoto(response.data)
    }
    )
  }, [])
  return (
    <StyledApp >
      
        <PhotoCard data = {photo}/>
      
    </StyledApp>
  );
}

export default App;
