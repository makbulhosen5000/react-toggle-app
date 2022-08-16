import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';


function DataFetch() {
  const {data,isLoading,error} = useFetch("https://jsonplaceholder.typicode.com/todos")
  const todoLoadingMessage = "Todos are Loading";
  const errorMessage = <p>{error}</p>
  const todosElement =
  data && data.map((todo)=>(
    <p>{todo.title}</p>
  ))
  return (
    <div>
      <h2>Todos</h2>
      {error && errorMessage}
      {isLoading && todoLoadingMessage}
      { todosElement}
    </div>
  )
}

export default DataFetch