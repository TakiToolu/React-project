import React, { Component } from 'react'
import Header from "./Header"
import Classify from "../../components/category/Category"
import Material from "../../components/category/Category"
import Search from '../../components/search/Search'
import { CateWrapw } from "./styledCategory"
import {Route,Switch,Redirect} from "react-router-dom"

class Category extends Component {
  render () {
    return (
        <CateWrapw>
          <Header/>
          <Search></Search>
          <Switch>
            <Route path="/category" render={()=>(<Classify defaultItem="热门" type="category"/>)}></Route>
            <Route path="/material" render={()=>(<Material defaultItem="食材" type="material"/>)}></Route>
            <Redirect from="/" to="/category"></Redirect>
          </Switch>
          {/*<Classify></Classify>*/}
          {/*<Material></Material>*/}
        </CateWrapw>
    )
  }
}

export default Category