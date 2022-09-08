import { useState } from "react"


function Toggle() {
   const [toggle,setToggle] = useState(true);
   
  return (
    <div>
      
        <div>
          {
            toggle &&
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet ornare facilisis. Aenean in lorem laoreet, porttitor lectus a, tincidunt lacus. Curabitur volutpat dui non lectus dapibus, vel tempor nulla ullamcorper. In massa lectus, tempus eu est et, consequat volutpat risus. Integer at dapibus turpis. Fusce non quam lacus. In scelerisque nulla ligula, eu viverra odio pharetra sed. Aliquam erat volutpat. Nullam mollis purus id dolor dictum, tempus volutpat tellus euismod. Donec vel est nec justo molestie aliquam.</p>
          }
             
            <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "hide":"show"}</button>
        </div>
    </div>
  )
}

export default Toggle