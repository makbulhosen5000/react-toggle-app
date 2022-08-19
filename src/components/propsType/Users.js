import React, { useState } from 'react'
import User from './User';

function Users() {
    const [userName,setUserName] = useState("Anisul Islam");
    const [userId,setUserId] = useState("101");
  return (
    <>
       <User userName={userName} userId={userId} />
    </>
  )
}

export default Users