import React from 'react'
import './style.css'

const todoTitle = "Call Family";
const todoDesc = "this is text for message ";
const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();

const cssStyle = {
    color:"white",
    textAlign:"center",
    backgroundColor:"red",
    padding:"15px",
}

function MyApp() {
  return (
    <div className="pageStyle">
        <h1 style={cssStyle}>Todo App</h1>
          <h3 style={{ fontSize:"25px" }}>{todoTitle}</h3>
          <p>{todoDesc}</p>
          <p>{getDay +"/"+ + getMonth +"/"+ + getYear}</p>
    </div>
  )
}

export default MyApp