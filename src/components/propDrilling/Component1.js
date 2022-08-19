
import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
    const [user,setUser] = useState({id:1,name:"MH. AKASH"});
  return (
    <div>
        <Component2 user={user} />
    </div>
  )
}

export default Component1