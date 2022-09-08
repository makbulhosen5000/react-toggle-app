import { useState } from "react"
import NewTodo from "./NewTodo";
import Todos from "./Todos";


const prevTodos = ["todo1","todo2"];

function Home() {
   const [todos,setTodos] = useState(prevTodos);

   const childToParent=(newChild)=>{
     setTodos([...todos,newChild]);
   }
  return (
    <div>
        <NewTodo onChildData={childToParent} />
        <Todos todos={todos}/>
    </div>
  )
}

export default Home