import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types'
//受控组件
class Cal extends Component{
  constructor(){
    super();
    this.state={val:'',a:0,b:0,result:0};
  }
  static propTypes={
    a:PropTypes.number,
    b:PropTypes.number
  }
  handleChange=(event)=>{
    let val=event.target.value;
    this.setState({val});
  }
  handleChangeA=(event)=>{
    this.setState({
      a:parseInt(event.target.value),
      result:parseInt(parseInt(event.target.value)+this.state.b)
    })
  }
  handleChangeB=(event)=>{
    this.setState({
      b:parseInt(event.target.value),
      result:parseInt(parseInt(event.target.value)+this.state.a)
    })
  }
  render () {
    return (
      <div>
        <div>
          <h1>{this.state.val}</h1>
          <input onChange={this.handleChange} type="text" value={this.state.val}/>
        </div>
        <div>
          a:<input onChange={this.handleChangeA} type="text" value={this.state.a}/>
          +b:<input onChange={this.handleChangeB} type="text" value={this.state.b}/>
          =result:<p>{this.state.result}</p>
        </div>

      </div>
    )
  }
}


ReactDOM.render(
  <Cal/>,
  document.getElementById('root')
);

serviceWorker.unregister();


