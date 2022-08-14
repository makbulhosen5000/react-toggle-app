import React, { useEffect, useState } from 'react'

function useEffectExample() {
  const [count,setCount] = useState(0);
  const [isLoading,setIsLoading] = useState(false);
  
 useEffect(()=>{
   console.log("useEffect");
 },[count]);

  return (
    <div>
      {console.log("rendering")}
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount((count)=>count+1)}>+</button>
            <button onClick={()=>setIsLoading(!isLoading)}>isLoading</button>
    </div>
  )
}

export default useEffectExample