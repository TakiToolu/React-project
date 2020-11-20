import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom"
import App from "./App"
class MyComponent extends React.Component {
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
  }
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <App/>
        {/*<input type="text" ref="myInput" />*/}
        {/*<input*/}
        {/*  type="button"*/}
        {/*  value="点我输入框获取焦点"*/}
        {/*  onClick={this.handleClick.bind(this)}*/}
        {/*/>*/}
      </div>
    );
  }
}
render(
  <BrowserRouter><MyComponent /></BrowserRouter>,
  document.getElementById('root')
);