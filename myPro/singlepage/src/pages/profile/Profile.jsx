import React, { Component } from 'react'
import {Switch}  from 'antd-mobile'
import {connect} from "react-redux"
import {SETSHOW} from "../home/action-types"
@connect(state=>({
  checked:state.home.isShow
}),dispatch=>({

  changeStatus(checked){
    dispatch({
      type:SETSHOW,
      data:checked
    })
  }
}))


class Profile extends Component {
  state={
    checked:false
  }
  render () {
    return (
      <div>
        是否显示地图：
        <Switch
            checked={this.props.checked}
            onChange={checked => {
              this.props.changeStatus(checked)
              }
            }
        ></Switch>
      </div>
    )
  }
}

export default Profile