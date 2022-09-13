import React, { useState } from 'react'
import Component2 from './Component2'
import {UserContext} from './userContext'

function Component1() {
  const [user,setUser] = useState({id:1,name:"akash"});
  const [text,setText] = useState("this is useContext");
  return (
    //passing data with value
    //wrap child with context provider
    <UserContext.Provider value={{ user,text }}>
        <Component2  />
    </UserContext.Provider>
  )
}

export default Component1