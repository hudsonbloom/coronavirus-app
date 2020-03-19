import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet'


export default class MapCorona extends Component {


  componentDidMount() {
    
  }


  render() {
    const { profile } = this.props;
    const lat = profile.address ? profile.address.latitude : null
    const long = profile.address ? profile.address.longitude : null
    const position = [lat, long]

    
    return (

      <Map 
        center={position} 
        zoom={13}
        style={{ width: '100%', height: '450px'}}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Circle
              center={position}
              color='red'
              fillColor='#f03'
              fillOpacity= '0.5'
              radius={500} />
      
  
      </Map>
    )
  }
}