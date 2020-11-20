import React,{useState} from 'react';
import './App.css';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from "react-router-dom"
// import Home from './1.props&&state/Home'//Home是父组件，Phone、News子组件
// import Home from './2.axios&&serverJson/Home'
import Home from './3.router/Home'
import Phone from './3.router/Phone'
import News from './3.router/News'
function App(props) {
  props.history.listen((link)=>{
    console.log(link);
  })
  let [val,setVal]=useState(0);
  let [valduo,setValduo]=useState({
    val0:0,
    val1:1,
    val2:2
  })
  return (
    <div className="App">
      {/*<Link to="/home">点我去home</Link>*/}
      {/*<Link to="/phone">点我去home</Link>*/}
      {/*<Link to="/news">点我去home</Link>*/}
      <NavLink to="/home">点我去home</NavLink>
      <NavLink to="/phone/参数id">点我去home</NavLink>
      <NavLink to={{pathname:"/news",query:{name:"参数名"}}}>点我去home</NavLink>
      <button onClick={()=>{props.history.push('/home')}}>编程式导航to主页</button>
      <button onClick={()=>{props.history.push('/phone')}}>编程式导航to手机</button>
      <button onClick={()=>{props.history.push('/news')}}>编程式导航to新闻</button>
      <br/>
        {/*下面是hooc的userState的使用*/}
      使用数据val：{val}
      <button onClick={()=>{setVal(val+1)}}>点我更改数据</button>
      <Switch>
        <Route path="/home" component={Home}/>
        {/*下面的进行路径传参的设置第一步*/}
        <Route path="/phone/:id" component={Phone}/>
        <Route path="/news" component={News}/>
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
