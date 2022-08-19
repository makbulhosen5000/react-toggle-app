import React, { useContext } from 'react'
import { UserContext } from './UserContext';

function Components4() {
    const {user,text} = useContext(UserContext);
    console.log(user);
  return (
    <div>
        <p> {user.id}</p>
        <p> {user.name}</p>
        <p> {text}</p>
    </div>
  )
}

export default Components4