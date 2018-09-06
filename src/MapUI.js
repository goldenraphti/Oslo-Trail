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
      routes: {
          route1 : {
              name: 'Tour of Mellomkollen',
              start: 'Skar',
              startLat: 60.026707,
              startLong: 10.779335,
              end: 'Skar',
              distance: 6.5,
              climb: 350,
              type: 'loop'
          }
      }
      
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
        <Marker position={[this.state.routes.route1.startLat,this.state.routes.route1.startLong]}>
          <Popup>
              {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
          </Popup>
        </Marker>
      </Map>
    )
  }
}

