import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count,setCount] = useState(0);

  const onChangeIncrement = () =>{
         setCount(count+1)
  }
  const onChangeDecrement = () =>{
    setCount(count-1);
  }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={onChangeIncrement} disabled={count === 10 ? true : false}>+</button>
        <button onClick={onChangeDecrement} disabled={count === 0 ? true : false}>-</button>
    </div>
  )
}

export default UseState