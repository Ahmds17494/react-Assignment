import React, { Component } from 'react'

export default class Event extends Component {
    constructor(){
        super();
        this.state= { toggle : false}
        this.handelCLick = this.handelCLick2.bind(this)
    }
    
    handelCLick2() {this.setState(state=>({ toggle: !state.toggle}) ) }
    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.handelCLick} > {this.state.toggle? 'ONN': 'OFF'} </button>
            </div>
        )
    }
}
