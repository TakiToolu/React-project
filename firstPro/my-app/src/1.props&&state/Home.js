import React,{ Component } from 'react'
import News from "./News"
import Phone from "./Phone"


export default class Home extends Component{
  constructor (props) {
    super(props);
    this.state={
      text:"我是默认值"
    }
  }
  datafun=(sonText)=>{
    this.setState({
      text:sonText
    })
    console.log(sonText)
  }
  render(){

    return (
      <div>
        我是主页
        <News text="父组件Home产过来的值" fufun={this.datafun}/>
        <Phone/>
      </div>
    )
  }
}