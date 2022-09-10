import React from 'react'
import useFetch from './useFetch';
 


function DataFetch() {
   const {data,isLoading,isError} = useFetch("https://jsonplaceholder.typicode.com/todos")

   const loadingMessage = "Data is Loading";
   const errorMessage = <p>{isError}</p>
   const todoElement =
   data && data.map((todo)=>(
    <p key={todo.id}>{todo.title}</p>
  ))
  return (
    <div>
        <h1>Todos</h1>
        {isLoading&& loadingMessage}
        {todoElement}
        {isError&& <p>{errorMessage}</p>}
        
        
    </div>
  )
}

export default DataFetch