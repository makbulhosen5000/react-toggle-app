import React  from 'react'

export const UserContext = React.UserContext();


// Three steps of use Context
// 1. create context
     //export const UserContext = React.UserContext();
// 2.Provide by data/state and have to wrap all child component by Provider
    /*<UserContext.Provider value={ user }>
        <Component2/>
    </UserContext.Provider>*/
// 3.