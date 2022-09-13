import React from 'react'


//userContext will provide provider and consumer
export const UserContext = React.createContext();
//step1:create context
//step2:wrap child with context provider
//step3: useContext will use for state access/control