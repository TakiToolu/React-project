import React from 'react'
import LayOut from './pages/home/LayOut'
import "assets/style/reset.css"
import {Provider} from "react-redux"
import store from "./store/"
import { BrowserRouter as Router } from  "react-router-dom"



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <LayOut/>
        </div>
      </Router>

    </Provider>
  );
}

export default App;
