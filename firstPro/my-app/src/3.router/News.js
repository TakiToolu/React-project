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
  componentDidMount () {
    console.log(this.props.location.query.name);
  }

  render(){
    return (
      <div>
        我是新闻 __{this.props.text}
       </div>
    )
  }
}