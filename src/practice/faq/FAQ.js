import React, { useState } from 'react'

function FAQ({id,title,desc}) {
    const [toggle,setToggle] = useState(false);
  return (
    <div>
        <article>
            <h4>{title}</h4>
            <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "-":"+"}</button>
           {toggle && <p>{desc}</p> } 
        </article>
    </div>
  )
}

export default FAQ