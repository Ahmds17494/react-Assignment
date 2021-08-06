import React, {Component} from 'react'
import './App.css';

export default class Calcul extends Component{

 
        constructor() {
            super();
          
            this.state =  {  operation:'', result:''}
            
            
            
          }

          myChangeHandler = (event) => {
           
            var val= event.target.value;
          
           this.setState({result: this.state.result+val});
          }

          myChangeHandlerPlus = () => {
            this.setState({operation:'ADD'});
            let number1= this.state.result;  
            this.setState({num1: number1})  
            this.setState({result:''});
            
          }

          myChangeHandlerMinus = () => {
            this.setState({operation:'Minus'} ) 
            let number1= this.state.result;  
            this.setState({num2: number1})  
            this.setState({result:''});
            
          }
          myChangeHandlerMultiple = () => {
            this.setState({operation:'Multiple'} )   
            let number1= this.state.result;  
            this.setState({num3: number1})  
            this.setState({result:''});
            
          }
          myChangeHandlerDivide = () => {
            this.setState({operation:'Divide'} )  
            let number1= this.state.result;  
            this.setState({num4: number1})  
            this.setState({result:''});
            
          }

          myChangeHandlerModulo = () => {
            this.setState({operation:'Modulo'} )  
            let number1= this.state.result;  
            this.setState({num5: number1})  
            this.setState({result:''});
           
          }

          myChangeHandlerAc = () => {
            this.setState({result:''});
         }

          myChangeHandlerEqual = () => {
           let number2= this.state.result; 
           let  endResult;


             if (this.state.operation==='ADD'){
                endResult= Number(number2) + Number(this.state.num1)
                this.setState({result:endResult});
             }

            if (this.state.operation==='Minus'){
                endResult= Number(this.state.num2) - Number(number2) 
                this.setState({result:endResult})}

            if (this.state.operation==='Multiple'){
                endResult= Number(this.state.num3) * Number(number2) 
                this.setState({result:endResult})}
            
            if (this.state.operation==='Divide'){
                 endResult= Number(this.state.num4) / Number(number2) 
                 this.setState({result:endResult})}    
           
                  
            if (this.state.operation==='Modulo'){
                endResult= Number(this.state.num5) % Number(number2) 
                this.setState({result:endResult}) 
                
              
                }  } 
            

          render() {
            return (
              
                  <div className="container">
                      <div className="row">

                    <div className="col-12 bg-secondary p-0 m-0"><input id="inputtext" class="bg-secondary" type='text' name='username' value={this.state.result  }  /></div>
                    </div>
                      
                     <div className="row">
                          <div className="col-3 p-0 "><button className="btn bg-light" value="AC" onClick={this.myChangeHandlerAc} >AC</button></div>
                          <div className="col-3 p-0 "><button className="btn bg-light"value="+/-" onClick={this.myChangeHandlerPlusMinus} >+/-</button></div>
                          <div className="col-3 p-0 "><button className="btn bg-light" value="%" onClick={this.myChangeHandlerModulo} >%</button></div>
                          <div className="col-3 p-0 "><button className="btn bg-warning"value="/" onClick={this.myChangeHandlerDivide} >/</button></div>
                      </div>
                      <div className="row">
                          <div className="col-3"><button className="btn bg-light"value="7" onClick={this.myChangeHandler} >7</button></div>
                          <div className="col-3"><button className="btn bg-light"value="8" onClick={this.myChangeHandler} >8</button></div>
                          <div className="col-3"><button className="btn bg-light"value="9" onClick={this.myChangeHandler} >9</button></div>
                          <div className="col-3"><button className="btn bg-warning"value="*" onClick={this.myChangeHandlerMultiple} >*</button></div>
                      </div>
                      
                      
                      <div className="row">
                          <div className="col-3"><button className="btn bg-light" value="4" onClick={this.myChangeHandler}>4</button></div>
                          <div className="col-3"><button className="btn bg-light" value="5" onClick={this.myChangeHandler}>5</button></div>
                          <div className="col-3"><button className="btn bg-light" value="6" onClick={this.myChangeHandler}>6</button></div>
                          <div className="col-3"><button className="btn bg-warning" onClick={this.myChangeHandlerMinus}>-</button></div>
                      </div>
                      <div className="row">
                          <div className="col-3"><button className="btn bg-light" value="1" onClick={this.myChangeHandler}>1</button></div>
                          <div className="col-3"><button className="btn bg-light" value="2" onClick={this.myChangeHandler}>2</button></div>
                          <div className="col-3"><button className="btn bg-light" value="3"  onClick={this.myChangeHandler}>3</button></div>
                          <div className="col-3"><button className="btn bg-warning"  onClick={this.myChangeHandlerPlus}  >+</button></div>
                      </div>
                     
                      <div className="row">
                          <div className="col-6 p-0"><button className="btn bg-light" value="0" onClick={this.myChangeHandler}>0</button></div>
                          <div className="col-3"><button className="btn bg-light" value="." onClick={this.myChangeHandler}>.</button></div>
                          <div className="col-3"><button className="btn bg-warning" value="=" onClick={this.myChangeHandlerEqual}>=</button></div>
                      </div>
            

          </div>
    
            );
          }
        
        }


