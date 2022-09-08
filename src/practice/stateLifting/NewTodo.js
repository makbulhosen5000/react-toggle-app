import { useState } from "react"




function NewTodo(props) {
     const [todo,setTodo] = useState('');

const inputHandler = (e) =>{
  setTodo(e.target.value);
}
const formHandler=(e)=>{
  e.preventDefault();
  props.onChildData(todo);
}
  return (
    <div>
        <form  onSubmit={formHandler}>
            <label>Add Todo:</label>
            <input name="" value={todo}  type="text"  onChange={inputHandler}  />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NewTodo