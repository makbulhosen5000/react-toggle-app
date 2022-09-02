
import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(){
        super()
    this.state={
        count : 0
    }
        
    }

    increaseCount=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    decreaseCount=()=>{
        this.setState({
            count:this.state.count - 1
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.increaseCount} disabled={ this.state.count === 10 ? true:false }> + </button>
          <button onClick={this.decreaseCount} disabled={ this.state.count === 0 ? true:false }> - </button>
      </div>
    )
  }
}
