import React, { useEffect, useState } from 'react'
const todoLoadingMessage = "Todos are Loading";
function DataFetch() {
  const [todos,setTodos] = useState(null)
  const [isLoading,setIsLoading] =  useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      if(!res.ok){
        throw Error("Fetching is no successfully");
      }else{
        return res.json()
      }

    })
    .then((data)=>{
      setTodos(data);
      setIsLoading(false);
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false);
    })
  })
  const todosElement =
  todos && todos.map((todo)=>(
    <p>{todo.title}</p>
  ))
  return (
    <div>
      <h2>Todos</h2>
      {error && <p>{error}</p>}
      {isLoading && todoLoadingMessage}
      { todosElement}
    </div>
  )
}

export default DataFetch