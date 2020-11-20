import React,{ Component } from 'react'
import PropTypes from  'prop-types'
import Pubsub from 'pubsub-js'

export default class News extends Component{
  constructor (props) {
    super(props)
    this.state={
      num:123,
      sonText:"我是子组件的数据"
    }
  }
  static propTypes={
    prop:PropTypes
  }
  fun(){
    this.setState({
      num:321
    })
  }
  pubsub(){
    Pubsub.publish("hello",this.state.num)
  }
  render(){
    return (
      <div>
        我是新闻 __{this.props.text}
        <br/>
        <button onClick={this.props.fufun.bind(this,this.state.sonText)}>逆向</button>
        {this.state.num}
        <button onClick={this.fun.bind(this)}>点我改变num</button>
        <button onClick={this.pubsub.bind(this)}>点我进行传值</button>
      </div>
    )
  }
}