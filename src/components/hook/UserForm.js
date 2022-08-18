import React, { useRef } from 'react'

function UserForm() {
    
    const userNameRaf = useRef();
    const userPasswordRaf = useRef();

    const formHandler=(e)=>{
      e.preventDefault();
      const userName = userNameRaf.current.value;
      const userPassword = userPasswordRaf.current.value;
      userNameRaf.current.style.backgroundColor="green";
      console.log({userName,userPassword});

    }
  return (
    <form onSubmit={formHandler}>
        <div>
        <div className='form-field'>
        <label>Name:</label>
        <input type="text" id="userName" ref={userNameRaf} />
        </div>
        <div className='form-field'>
        <label>Password:</label>
        <input type="password" id="password" ref={userPasswordRaf} />
        </div>
        <button>Register</button>
        </div>
    </form>

      
  )
}

export default UserForm