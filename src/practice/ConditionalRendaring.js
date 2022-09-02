import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class ConditionalRendaring extends Component {
    constructor(){
        super()
        this.state={
            isLoggedIn : false
        }
    }
  render() {
    const {isLoggedIn} = this.state;
    let element
    if(isLoggedIn){
        element = <Home/>
    }else{
        element = <Login/>
    }
    return(
        <div>
            {element}
        </div>
    )
        
  }
}
