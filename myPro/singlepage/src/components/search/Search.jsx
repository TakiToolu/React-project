import React, { Component } from 'react'
import searchImg from "assets/search.png"
import {SearchWrap} from "./styledSearch"

class Search extends Component {
  render () {
    return (
      <SearchWrap width="0" color="orange" radius="5px">
        <div>
          <img src={searchImg}/>
          <span>想吃什么搜这里</span>
        </div>
      </SearchWrap>
    )
  }
}

export default Search