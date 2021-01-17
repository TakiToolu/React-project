import React, { Component } from 'react'

import {HotListWrap }  from "./styledCookbook"
import {connect} from "react-redux"

@connect((state)=>({
  hotlist:state.home.list
}))
class Hotlist extends Component {
  // componentDidMount () {
  //   console.log(this.props.hotlist[0].all_click)
  // }

  render () {
    return (
      <HotListWrap>
        <div>
          <header>精品好菜</header>
          <div>
            {
              this.props.hotlist.slice(0,10).map((value)=>(
                <figure key={value.id}>
                  <img src={value.img} alt=""/>
                  <figcaption>
                    <h3>{value.name}</h3>
                    <h5>{value.all_click}</h5>
                  </figcaption>
                </figure>
              ))
            }
          </div>


        </div>
      </HotListWrap>

    )
  }
}

export default Hotlist