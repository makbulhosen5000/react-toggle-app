import React from 'react'

function Child(props) {
    const data="I am from child Component";
    props.onChildData(data);
  return (
    <div>
        <h1>I am  child component</h1>
    </div>
  )
}

export default Child;