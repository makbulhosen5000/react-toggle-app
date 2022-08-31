import React from 'react'
import './style.css'

const todoTitle = "Call Family";
const todoDesc = "Bangladesh is a small country but it has large population";
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
        <div className="card">
          <h3 className="cardTitle">{todoTitle}</h3>
          <p className="cardDesc">{todoDesc}</p>
          <p className="cardFooter">{getDay +"/"+ + getMonth +"/"+ + getYear}</p>
        </div>
         
    </div>
  )
}

export default MyApp