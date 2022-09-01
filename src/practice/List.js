import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        "id" : uuidv4(),
        "title": "Bangladesh",
        "desc" : "Bangladesh is a beautiful country",
    },
    {
        "id" : uuidv4(),
        "title": "India",
        "desc" : "India is a wonderful country ",
    },
    {
        "id" : uuidv4(),
        "title": "Pakistan",
        "desc" : "I don't know about Pakistan",
    }
]

function List() {

  return (
    <div>
        {todos.map((todo)=>{
            const {id,title,desc} = todo;
            return(
                <div key={id}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            )
        })}
    </div>
  )
}

export default List