import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaFacebookF } from "react-icons/fa";

const todos = [
    {
        "id" : uuidv4(),
        "title": "Bangladesh",
        "desc" : "Bangladesh is a beautiful country",
        "phones":[
            {
                "phone" : "0178822214",
                "email" : "aa@gmail.com"
            }
        ]
    },
    {
        "id" : uuidv4(),
        "title": "India",
        "desc" : "India is a wonderful country ",
        "phones":[
            {
                "phone" : "017844822214",
                "email" : "b@gmail.com"
            }
        ]
    },
    {
        "id" : uuidv4(),
        "title": "Pakistan",
        "desc" : "I don't know about Pakistan",
        "phones":[
            {
                "phone" : "0178445822214",
                "email" : "a@gmail.com"
            }
        ]
    }
]

function List() {

  return (
    <div>
        {todos.map((todo)=>{
            const {id,title,desc} = todo;
            return(
                <div key={id}>
                    <h1>{title} <FaFacebookF/> </h1>
                    <p>{desc}</p>
                    {todo.phones.map((phone)=>{
                        return(
                            <article>
                                <p>{phone.phone}</p>
                                <p>{phone.email}</p>
                            </article>
 
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default List