import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(){
        super();
        this.userNameRef=createRef();
        this.state={
    
        }
    }
    handleSubmit=(e)=>{
     e.preventDefault();
     console.log(this.userNameRef.current.value);
     this.userNameRef.current.style.backgroundColor="green";
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-field'>
        <label>Name:</label>
        <input type="text" id="userName" ref={this.userNameRef} />
        </div>
        <div className='form-field'>
        <label>Password:</label>
        <input type="password" id="password"/>
        </div>
        <button>Register</button>
      </form>
    )
  }
}
