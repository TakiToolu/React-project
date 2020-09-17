import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types'
//属性
class Person extends Component{
  constructor(){
    super();
    //为组件增加一个出事状态，默认为true
    this.state={happy:true};

  }
//默认属性对象
  static defaultProps={
    name:'无名之辈'
  }
  //如果定义组件时希望传入组件的属性有类型和是否必填的限制
  static propsTypes={
    name:PropTypes.string,
    age:PropTypes.number.isRequired
  }
  handleClick=()=>{
    this.setState({
      happy:!this.state.happy
    })
  }
  render () {
    let heart=this.state.happy?'开心':'难过';
    return (
      <div>
        <p>姓名：{this.props.name}</p>
        <p>年龄：{this.props.age}</p>
        <p>开心：{heart}</p>
        <button onClick={this.handleClick}>改变</button>
      </div>
    )

  }
}
ReactDOM.render(
  <Person name1='二胖' age='13'/>,
  document.getElementById('root')
);
serviceWorker.unregister();


