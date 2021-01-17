import React, { Component } from 'react'
import {Carousel} from 'antd-mobile'
// import swiper1 from "assets/swiper-1.png"
// import swiper2 from "assets/swiper-2.jpeg"
// import swiper3 from "assets/swiper-3.jpeg"
import { SwiperWrap } from './styledCookbook'
import {connect} from 'react-redux'
import {GETLIST} from "../action-types"

const mapState=state=>({
  list:state.home.list

})
const mapDispatch=dispatch=>({
  loadData(){
    dispatch({
      type:GETLIST,
      url:"/api/list"
    })

  }
})
@connect(mapState,mapDispatch)

class Swiper extends Component {
  componentDidMount () {
    this.props.loadData()
    // console.log(this.props)
  }

  render () {
    return (
      <SwiperWrap>
        {this.props.list.length&&
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {
            this.props.list.slice(0,5).map((value)=> <img alt="keke" key={value.id} src={value.img}/>)
          }
        </Carousel>
        }
      </SwiperWrap>
    )
  }
}

// export default connect(mapState,mapDispatch)(Swiper)
export default Swiper