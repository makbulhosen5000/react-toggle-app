import React, { useEffect, useState } from 'react'

const isLoadingMsg = "Todo is Loading";

function DataFetch() {
     const [todos,setTodos] = useState(null);
     const [isLoading,setIsLoading] = useState(true);
     const [error,setError] = useState(null);

     useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>{
        if(!res.ok){
          throw Error("Fetching is not successfully");
        }else{
          return res.json();
        }

      })
      .then((data)=>{
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error)=>{
        setError(error.message)
        setIsLoading(false)
      })
     
     });
   
     const todoElement = 
     todos && todos.map((todo)=>{
      return(
        <p key={todo.id}>{todo.title}</p>
      )
     })

  return (

    <div>
      {error && <p>{error}</p>}
      {isLoading && isLoadingMsg}
       {todoElement}
    </div>
  )
}

export default DataFetch