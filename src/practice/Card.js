import React from 'react'

const todoTitle = "Call Family";
const todoDesc = "Bangladesh is a small country but it has large population";
const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();


function Card() {
  return (
    <div className="card">
          <h3 className="cardTitle">{todoTitle}</h3>
          <p className="cardDesc">{todoDesc}</p>
          <p className="cardFooter">{getDay +"/"+ + getMonth +"/"+ + getYear}</p>
    </div>
  )
}

export default Card