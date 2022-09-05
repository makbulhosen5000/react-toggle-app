import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const prevTodo = ["todo1","todo2"];
function Home() {
    const [todos,setTodos] = useState(prevTodo);
    const childToParent=(newChild)=>{
       setTodos([...todos,newChild]);
    }
  
  return (
    <div>
        <NewTodo  onChildData={childToParent} />
        <Todos todos={todos} />
    </div>
  )
}

export default Home