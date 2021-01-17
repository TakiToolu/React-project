// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
* 后台管理的路由组件*/
export default class App extends Component{
  render(){
    return (
        <BrowserRouter>
          {/*也可以使用HashRouter 哈希模式的路由，区别就是有# */}
          <Switch>{/*只匹配其中一个*/}
             <Route path='/login' component={Login} ></Route>
             <Route path='/' component={Admin} ></Route>
          </Switch>
        </BrowserRouter>
    )
  }
}