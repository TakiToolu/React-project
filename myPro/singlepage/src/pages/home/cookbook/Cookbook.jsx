import React, { Component } from 'react'
import Header from './Header'
import Swiper from './swiper'
import Search from '@/search/Search'
import HotCate from './HotCate'
import Hotlist from "./hotlist"

class Cookbook extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Swiper/>
        <Search/>
        <HotCate></HotCate>
        <Hotlist/>
        Cookbooks
      </div>
    )
  }
}

export default Cookbook