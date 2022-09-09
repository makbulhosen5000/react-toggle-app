import React, { useEffect, useState } from 'react'
 
const dataLoading = "Data is Loading";

function DataFetch() {
  const [todos,setTodos] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(null);
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      if(!res.ok){
        throw Error("Fetching is not Successful");
      }else{
        return res.json();
      }

    })
    .then((data)=>{
      setTodos(data);
      setIsLoading(false);
    })
    .catch((error)=>{
        setIsError(error.message)
        setIsLoading(false);
    })
   },[])
   
   const todoElement =
   todos && todos.map((todo)=>(
    <p key={todo.id}>{todo.title}</p>
  ))
  return (
    <div>
        <h1>Todos</h1>
        {isLoading&& dataLoading}
        {todoElement}
        {isError&& <p>{isError}</p>}
        
        
    </div>
  )
}

export default DataFetch