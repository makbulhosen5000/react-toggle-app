import { useState } from "react"

function Toggle() {
     const [toggle,setToggle] = useState(true);
  return (
         
       <div  style={{ margin:"1rem", padding:"1rem", backgroundColor:"pink" }}>
          
          {
            toggle &&
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            </p>
          }     
           
         
            <div style={{ textAlign:"center" }}>
              <button onClick={()=>{setToggle(!toggle)}}>{ toggle ? "Show" : "Hide"}</button>
            </div>
       </div>
  )
}

export default Toggle