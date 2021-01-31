
import React,{Component} from 'react';
import './header.less'
import { Modal} from 'antd'
import memory from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {formateDate} from '../../utils/dateUtils'
import {reqWeather} from '../../api/index'
import {withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'
import LinkButton from '../link_button'


 class Header extends Component{
  constructor(props){
    super(props)
  }
  state={
    currentTime:formateDate(Date.now()),
    dayPictureUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3339448626,784762617&fm=26&gp=0.jpg',
    weather:'晴',
  }
  getTime=()=>{
    this.intervalId=setInterval(()=>{
      const currentTime=formateDate(Date.now());
      this.setState({currentTime})
    },1000)
  }
  getWeather=async()=>{
      let {dayPictureUrl,weather}=await reqWeather('沈阳');
      if(weather){
        this.setState({dayPictureUrl,weather});
      }

  }
  logout=()=>{
    // 显示确认框
    Modal.confirm({
      content: '确定退出吗?',
      onOk: () => {
        console.log('OK', this)
        // 删除保存的user数据
        storageUtils.removeUser()
        memory.user = {}
        // console.log(this.props);
        // 跳转到login
        this.props.history.replace('/login')
      }
    })
  }
   getTitle = () => {
     // 得到当前请求路径
     const path = this.props.location.pathname
     let title
     menuList.forEach(item => {
       if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
         title = item.title
       } else if (item.children) {
         // 在所有子item中查找匹配的
         const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
         // 如果有值才说明有匹配的
         if(cItem) {
           // 取出它的titlepp
           title = cItem.title
         }
       }
     })
     return title
   }
  componentDidMount() {
    this.getTime();
    this.getWeather();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

   render(){
    const {currentTime, dayPictureUrl, weather} = this.state;
    const user=memory.user.username;

    return (
        <div className="header">
          <div className="header-top">
            <span>欢迎,{user}</span>
            <LinkButton onClick={this.logout} className="link-button">退出</LinkButton>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">
              {this.getTitle()}
            </div>
            <div className="header-bottom-right">
              <span>{currentTime}</span>
              <img src={dayPictureUrl} alt=""/>
              <span>{weather}</span>
            </div>
          </div>
        </div>
    )
  }
}
export default withRouter(Header)
