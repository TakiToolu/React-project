import React,{Component} from 'react';
import {Redirect,Route,Switch} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils';
import { Layout } from 'antd';
import Header from '../../component/header/header'
import LeftNav from '../../component/left_nav/left_nav'
import Home from '../home/home';
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
// import Bar from '../charts/bar'
// import Line from '../charts/line'
// import Pie from '../charts/pie'
const {Footer,Sider,Content} =Layout;

export default class Admin extends Component{
  render(){
    const user=memoryUtils.user;
    // console.log(user);
    if(!user||!user._id){
      //没有登录，自动跳转到登录界面
      return <Redirect to='./login'/>
    }
    return (
        <Layout style={{height:'100%'}}>
          <Sider>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <Header>Header
              <div>home,hello{user.username}</div>
            </Header>
            <Content style={{margin:20,backgroundColor:'white'}}>
              <Switch>
                <Redirect from='/' exact to='/home'/>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Category}/>
                <Route path='/product' component={Product}/>
                <Route path='/user' component={User}/>
                <Route path='/role' component={Role}/>
              </Switch>
            </Content>
            <Footer style={{textAlign:'center',color:'#aaaaaa'}}>页脚写于2021年1月24日，by ZXX</Footer>
          </Layout>
        </Layout>
    )
  }
}