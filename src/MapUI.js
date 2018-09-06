import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

// not sure if useful so far
Leaflet.Icon.Default.imagePath =
'//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'



export default class MapUI extends Component {
  state = {
      initialView : {
        lat: 59.913868,
        lng: 10.752245,
        zoom: 10,
      },
      
  }

  render() {
      
    const position = [this.state.initialView.lat, this.state.initialView.lng]
    
    const layers = {
        landscape: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
        outdoor: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
        attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    }
    
    return (
      <Map center={position} zoom={this.state.initialView.zoom} id="map-container">
        <TileLayer
          attribution={layers.attribution}
          url={layers.landscape}
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

