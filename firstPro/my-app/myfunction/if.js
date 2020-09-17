import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

//React 条件渲染
// 1 、静态，使用函数定义
function UserGreeting(){
  return <h1>欢迎回家！</h1>
}
function GuestGreeting(){
  return <h1>请先注册</h1>
}
function Greeting(props){
  let isLoggedIn=props.isLogin;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

//2、动态可改变的
class LoginControl extends Component{
  constructor (props) {
    super(props);
    this.handleClick=this.handleClick.bind(this)
    this.state={isLogin:props.isLoggedIn}
  }
  handleClick(){
    this.setState({isLogin:!this.state.isLogin})
  }
  render () {

    return <div>
      <Greeting isLogin={this.state.isLogin}/>
      <div>flag={this.state.isLogin}</div>
      <button onClick={this.handleClick}>注册</button>
    </div>
  }

}


render(
  <LoginControl isLoggedIn={0}/>,
  document.getElementById('root')
);




