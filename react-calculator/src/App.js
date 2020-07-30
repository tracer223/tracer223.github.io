import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';

class Display extends React.Component {
  render(){
    return(
    <div id={this.props.id}>
        {this.props.currentNum}
        </div>
    )
  }
}

class Button extends React.Component {
  executeParentHandleClick= () => {
    this.props.handleClick(this.props.name)
  }
  
  render(){
    return(
    <div onClick={this.executeParentHandleClick} className="btn" id={this.props.id}>{this.props.name}</div>
    )
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentNum: "0",
      isOperator: false,
      isDecimal: false
    }
  }
  
  handleClick = (buttonLabel) => {
    let currentNum = this.state.currentNum
    let isOperator = this.state.isOperator
    switch(true){
        case buttonLabel==="0"
        ||buttonLabel==="1"
        ||buttonLabel==="2"
        ||buttonLabel==="3"
        ||buttonLabel==="4"
        ||buttonLabel==="5"
        ||buttonLabel==="6"
        ||buttonLabel==="7"
        ||buttonLabel==="8"
        ||buttonLabel==="9":
      if(this.state.currentNum!=="0"){
        currentNum += buttonLabel
        isOperator = false
      }else{
        currentNum = buttonLabel
      }
        break
        case buttonLabel === "+" ||
              buttonLabel === "-" ||
              buttonLabel === "*" ||
              buttonLabel === "/":
        if(!this.state.isOperator){
          currentNum += buttonLabel
          isOperator = true
          this.setState({isDecimal:false})
        }else{
          const newNum = currentNum.slice(0, currentNum.length-1)
          currentNum = newNum
          currentNum += buttonLabel
        }
        break
      case buttonLabel === "C":
        currentNum = "0"
        isOperator = false
        this.setState({isDecimal:false})
        break
      case buttonLabel === "CE":
        currentNum = "0"
        isOperator = false
        this.setState({isDecimal:false})
        break
      case buttonLabel === "=":
        currentNum = eval(currentNum)
        isOperator = false
        break
      case buttonLabel === ".":
        if(!this.state.isDecimal){
          currentNum += "."
          this.setState({isDecimal:true})
        }
      }
    this.setState({isOperator})
    this.setState({currentNum})
    }
  
  
  render() {
    return(
       <body>
        <div id="title">
          <h1>React.js Calculator</h1>
        </div>
        <div id="calcBody">
          <Display id="display" currentNum={this.state.currentNum}/>

          <div class="buttonRow">
            <Button id="clearentry" name="CE" handleClick={this.handleClick}/>
            <Button id="clear" name="C" handleClick={this.handleClick}/>
            <Button id="back" name="Back" handleClick={this.handleClick}/>
            <Button id="divide" name="/" handleClick={this.handleClick}/>
          </div>

          <div class="buttonRow">
            <Button id="seven" name="7" handleClick={this.handleClick}/>
            <Button id="eight" name="8" handleClick={this.handleClick}/>
            <Button id="nine" name="9" handleClick={this.handleClick}/>
            <Button id="multiply" name="*" handleClick={this.handleClick}/>
          </div>

          <div class="buttonRow">
            <Button id="four" name="4" handleClick={this.handleClick}/>
            <Button id="five" name="5" handleClick={this.handleClick}/>
            <Button id="six" name="6" handleClick={this.handleClick}/>
            <Button id="subtract" name="-" handleClick={this.handleClick}/>
          </div>

          <div class="buttonRow">
            <Button id="one" name="1" handleClick={this.handleClick}/>
            <Button id="two" name="2" handleClick={this.handleClick}/>
            <Button id="three" name="3" handleClick={this.handleClick}/>
            <Button id="add" name="+" handleClick={this.handleClick}/>
          </div>

          <div class="buttonRow">
            <Button id="neg-pos" name="+-" handleClick={this.handleClick}/>
            <Button id="zero" name="0" handleClick={this.handleClick}/>
            <Button id="decimal" name="." handleClick={this.handleClick}/>
            <Button id="equals" name="=" handleClick={this.handleClick}/>
          </div>
        </div>
        <footer>© Josh Henderson 2019</footer>
      </body>
    );
  }
}

export default App;
