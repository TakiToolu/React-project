import React, { Component } from 'react'
import {Grid} from 'antd-mobile'
import {HotCateWrap} from './styledCookbook'
import {get} from "../../../utils/http"

// const data1 = Array.from(new Array(9)).map(() => ({
//   title:"xixi",
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
// }));
class HotCate extends Component {
  state={
    hotList:[]
  }
  async componentDidMount(){
    let result=await get({
      url:"/api/hotcate"
    })
    let data=result.map((value,index)=>({
        key:index,
        title:value.title,
        icon:value.img,
    })
    )
    this.setState({
      hotList:data
    })

  }
  _renderItem =dataItem=>(
    <div className="item">
      {
        dataItem.icon && <img src={dataItem.icon}/>
      }
      <span>{dataItem.title}</span>
    </div>
  )
  render () {
    return (
      <HotCateWrap>
        <header>热门分类</header>

          <Grid data={this.state.hotList}
                columnNum={3}
                hasLine={false}
                renderItem={this._renderItem}
          />

      </HotCateWrap>
    )
  }
}

export default HotCate