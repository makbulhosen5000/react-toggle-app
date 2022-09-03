import React, { Component } from 'react'

export default class EVENTHANDLER extends Component {
  constructor(){
    super()
    this.state={
      changeValue : ''
    }
  }
  onChangeHandler = (e) =>{
     this.setState({
      changeValue:e.target.value
     },()=>{
      console.log(this.state.changeValue)
     })
  }

  render() {
    return (
      <div>
        <input type="text" name="name" onChange={this.onChangeHandler}  />
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
