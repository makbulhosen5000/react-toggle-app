import { useState } from "react"


function FORM() {
      const [user,setUser] = useState({name:'',email:'',password:''});
      const {name,email,password} = user;

 
   const inputHandler = (e) =>{
       setUser({...user,[e.target.name]:e.target.value});
}
    const formSubmit=(e)=>{    
        console.log(user);
        e.preventDefault();
  

    }
  return (
    <div>
        <h1>Form</h1>
        <form action='' onSubmit={formSubmit}>
            <div>
                <label>Name</label>
                <input name="name" value={name} type="text" onChange={inputHandler}  />  
            </div>
            <div>
                <label>Email</label>
                <input name="email" value={email}   type="email"  onChange={inputHandler} />
            </div>
            <div>
                <label>Password</label>
                <input name="password" value={password}   type="password" onChange={inputHandler} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FORM