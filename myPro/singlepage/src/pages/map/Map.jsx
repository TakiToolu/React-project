import React, { Component } from 'react'

class Map extends Component {
  render () {
    return (
      <div style={{height:"100%"}}>
        <iframe src="map.html" frameBorder="0" title="ifm" style={{width:"100%",height:"100%"}}></iframe>
      </div>
    )
  }
}

export default Map