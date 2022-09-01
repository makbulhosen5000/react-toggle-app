import React from 'react'


const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();


function Card(props) {
  const {title,desc} = props
  return (
    <div className="card">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDesc">{desc}</p>
          <p className="cardFooter">{getDay +"/"+ + getMonth +"/"+ + getYear}</p>
    </div>
  )
}

export default Card