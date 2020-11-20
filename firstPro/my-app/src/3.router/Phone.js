import React,{ Component } from 'react'
import Pubsub from 'pubsub-js'

export default class Phone extends Component{
  constructor (props) {
    super(props)
    Pubsub.subscribe('hello',(msg,data)=>{
      console.log("phone"+data)
    })
  }
  componentDidMount () {
    console.log(this.props.match.params.id);
  }

  render(){
    return (
      <div>
        我是Phone
      </div>
    )
  }
}