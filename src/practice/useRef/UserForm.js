import React, { useRef } from 'react'

function UserForm() {
    const userNameRef = useRef();

    const formHandler =(e) =>{
      e.preventDefault();
      const userName = userNameRef.current.value;
      const userPassword = userNameRef.current.value;
      console.log({userName,userPassword});
    }
  return (
    <div>
        
        <form onSubmit={formHandler}>
            <h1 style={{ textAlign:'center' }}>User Form</h1>
            <div class="form-group">
              <label for="">User Name</label>
              <input type="text"
                class="form-control" name="" id="" ref={userNameRef}  placeholder=""/> 
            </div>
            <div class="form-group">
              <label for="">User Password</label>
              <input type="text"
                class="form-control" name="" id=""  placeholder=""/> 
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm;