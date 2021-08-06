import React, {Component} from 'react'
import './App.css';





class ADD extends Component{
    render(){
        console.log(this.props);
        return( <p>The sum is {this.props.info.sum} </p>)
    }
}
export default class Child extends Component{

 
        constructor(props) {
            super(props);
          
            this.state = {num1: "", num2: "" , sum:""}
            this._handelClickEvent= this._getSum.bind(this)
          }
    

          _getSum(){
              this.setState({sum: this.state.num1+this.state.num2})
    
          }

          handleChange1=(e)=>{
            this.setState({num1:parseInt(e.target.value)})
          }
          handleChange2=(e)=>{
            this.setState({num2:parseInt(e.target.value)})
          }


          render() {
            return (
              <div id="table" >
              
      
              <input type="text" value={this.state.value} onChange={this.handleChange1}  />
              <br/>
              <input type="text" value={this.state.value} onChange={this.handleChange2} />
              <br/>
          
              <button type="button" onClick={this._handelClickEvent} >sum</button>
 

               

              <ADD info={{sum: this.state.sum}} />

          </div>
            );
          }
        
        }


