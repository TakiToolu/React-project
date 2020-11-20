import React,{ Component } from 'react'
import News from "./News"
import Phone from "./Phone"
import {store} from '../redux/store'
import * as action from '../redux/action'

export default class Home extends Component{
  constructor (props) {
    super(props);
    this.state={
      num:store.getState()
    }
  }
  componentDidMount () {
    store.subscribe(()=>{this.setState({
      num:store.getState()
    })})
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
        {this.state.num}
        <button onClick={()=>{store.dispatch(action.add(1))}}>点我加一</button>
        <button onClick={()=>{store.dispatch(action.sub(1))}}>点我减一</button>
        </div>
    )
  }
}