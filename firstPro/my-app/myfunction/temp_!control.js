//非受控组件（元素）
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types'

//受控组件(元素)，不依赖状态值
class Cal extends Component{
  constructor(){
    super();
    // this.state={val:'',a:0,b:0,result:0};
  }
  static propTypes={
    a:PropTypes.number,
    b:PropTypes.number
  }
  handleChange=(event)=>{
    // let a=parseInt(this.refs.a.value||0);
    // let b=parseInt(this.refs.b.value||0);
    // this.refs.result.value=a+b;
    let a=parseInt(this.a.value||0);
    let b=parseInt(this.b.value||0);
    this.result.value=a+b;
  }
  render () {
    return (
        // <div>
        //   a:<input ref="a" onChange={this.handleChange} type="text" />
        //   b:<input ref="b" onChange={this.handleChange} type="text"/>
        //   result:<input ref="result" type="text"/>
        // </div>
      <div>
        a:<input ref={ref=>this.a=ref} onChange={this.handleChange} type="text" />
        b:<input ref={ref=>this.b=ref} onChange={this.handleChange} type="text"/>
        result:<input ref={ref=>this.result=ref} type="text"/>
      </div>
      )
  }

}


ReactDOM.render(
  <Cal/>,
  document.getElementById('root')
);

serviceWorker.unregister();


