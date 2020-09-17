import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//两种组件定义方式
//1、函数形式、组件首字母大写
function HelloMessage(props){
  return <h1>Hello!</h1>;
}
let Message=({msg,className})=>{
  return <h1 className={className}>{msg}</h1>
}
//用户自定义的组件,静态的
const ele=<Message msg="haha" className="red"/>


//2、通过ES6 Class类声明组件 ，继承React的Component属性， 动态值
class Clock extends React.Component{
  constructor(props){
    super(props);
    //自定义的组件状态对象————状态可以用来存放组件内部一些变化的值，状态只能由组件内部初始化与改变
    this.state={time:new Date().toLocaleString()};
  }
  //生命周期函数 组件挂载完成
  componentDidMount(){
    window.setInterval(()=>{
      //每隔一秒会重新修改状态，当调用setState之后，状态会更新，还会再次调用render进行渲染
      this.setState({time:new Date().toLocaleString()});
    },1000);
  }
  //render函数必须且只能返回一个React元素
  render () {
    return <h1><span>hello~</span><span>{this.state.time}</span></h1>
  }
}


ReactDOM.render(
  // ele,
  <Clock/>,
  document.getElementById('root')
);

serviceWorker.unregister();


