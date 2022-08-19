
import React, { useState } from 'react'
import Component2 from './Component2';
import { UserContext } from './UserContext';

function Component1() {
    const [user,setUser] = useState({id:1,name:"MH. AKASH"});
    const [text,setText] = useState("Hello ! I am Text");

  return (
    <UserContext.Provider value={ {user,text} }>
        <Component2/>
    </UserContext.Provider>
  )
}

export default Component1