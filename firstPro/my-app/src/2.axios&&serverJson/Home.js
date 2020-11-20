import React, { Component } from 'react'
import axios from 'axios'
class Home extends Component {
  constructor (props) {
    super(props);
    this.state={
      arr:[]
    }
  }
  componentDidMount () {
    this.ajaxfun();
  //  通过代理服务器请求
    axios.get("/api/").then((ok)=>{
      console.log(ok);
    })
  }
  ajaxfun(){
    axios.get('http://localhost:4000/arr').then((ok)=>{
      console.log(ok);
      this.setState({
        arr:ok.data
      })
    })
  }

  render () {
    return (
      <div>
        {this.state.arr.map((v,i)=>{
          return <p>{v.name}</p>
        })}
      </div>
    )
  }
}

export default Home