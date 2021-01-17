import React, { Component } from 'react'
import {CateWrap} from './styledgory'
import {get} from '../../utils/http'

class Category extends Component {

  state={
    datasource:null,
    currentItem:"",
    defaultItem:""
  }
  static getDerivedStateFromProps(props,state){
    if(props.defaultItem!==state.defaultItem){
      return {
        ...state,
        defaultItem:props.defaultItem,
        currentItem:props.defaultItem
      }
    }
    return  null;
  }
  async componentDidMount(){
    let result=await get({
      url:"/api/category",
    })
    console.log("加载",result);
    this.setState({
      datasource:result.data,
    })
    console.log("ceshi",this.state.datasource)
  }
  handleItem=(item)=>{
    return ()=>{
      this.setState(({
        currentItem:item
      }))
    }

  }
  render () {
    let {type}=this.props;

    let data=this.state.datasource?Object.keys(this.state.datasource[type]):[];
    let content=this.state.datasource?this.state.datasource[type][this.state.currentItem]:[];
    console.log(data,this.state.datasource)
    return (
        <CateWrap>
          <div>
            <ul>
              {
                data.map(value=>{
                   return this.state.currentItem===value?
                     <li className="active" key={value}><span>{value}</span></li>:
                     <li onClick={this.handleItem(value)} key={value}>{value}</li>
                })
              }
            </ul>
          </div>
          <div>
            <ul>
              {
                content.map((value)=>{
                  return (
                    <li key={value}>{value}</li>
                  )
                })
              }
            </ul>
          </div>
        </CateWrap>

    )
  }
}

export default Category