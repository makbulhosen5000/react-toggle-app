import React, { useReducer, useState } from 'react'

const booksData =[
    {
       id:1,
       name:'robin',
    },
    {
      id:2,
      name:'akash',
   },
   {
    id:3,
    name:'rima',
 }
  ];

  const reducer = (state,action) =>{
    if(action.type==="ADD"){
     const allBooks = [...state.books, action.payLoad]
     return {
      ...state,
      books:allBooks,
      isModelOpen:true,
      modelText:"book is added"
     }
    }
    if(action.type==="Remove"){
      const filteredBook =[...state.books].filter(book => book.id!==action.payLoad);
      return{
        ...state,
        books:filteredBook,
        isModelOpen:true,
        modelText:"Book is Removed",
      }
    }

  }

function UseReducer() {
     const [bookState,dispatch] = useReducer(reducer,{
      books:booksData,
      isModelOpen:false,
      modelText:"",
     })
    // const [books,setBooks] = useState(booksData);
    // const [isModelOpen,setIsModelOpen] = useState(false);
    // const [modelText,setModelText] = useState(false);
    const [bookName,setBookName] = useState("");
  
  const Model = ({modelText}) =>{
    return <p>{modelText}</p>
  }

  const formHandler = (e) =>{
       e.preventDefault();
       const newBook = {id:new Date().getTime().toString(),name:bookName}
       dispatch({type:"ADD",payLoad:newBook})
       setBookName("");
    }
  const removeBook=(id)=>{
    dispatch({type:"REMOVE",payLoad:id})
      }
  return (
    <div>
          <h3>Book List</h3>
          <form onSubmit={formHandler}>
            <input type="text"  value={bookName} onChange={(e)=>{setBookName(e.target.value);}} />
            <button type='submit'>Add Book</button>
          </form>
          {bookState.isModelOpen && <Model modelText={bookState.modelText}  /> }
        {bookState.books.map((book)=>{
            const {id,name} = book;
            return(
                  <li key={id}>{name} <button onClick={()=>{removeBook(id)}}>Remove</button> </li>
            )
        })}
        </div>
  )
}

export default UseReducer