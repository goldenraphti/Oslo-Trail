import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import L from 'leaflet';
import { Map,
    Circle,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Marker,
    Popup,
    Rectangle,
    TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'

const { BaseLayer, Overlay } = LayersControl

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
    
    const center = [60.026707, 10.779335]
    
    const layers = {
        landscape: {
            nameTile: 'landscape',
            url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
            attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        },
        outdoors: {
            nameTile: 'outdoors',
            url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
            attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        },
        
    }
    
    return (
      <Map center={position} zoom={this.state.initialView.zoom} id="map-container">
       <LayersControl position="topright">
          <BaseLayer checked name={layers.landscape.nameTile}>
            <TileLayer
              attribution={layers.landscape.attribution}
              url={layers.landscape.url}
            />
          </BaseLayer>
          <BaseLayer checked name={layers.outdoors.nameTile}>
            <TileLayer
              attribution={layers.outdoors.attribution}
              url={layers.outdoors.url}
            />
          </BaseLayer>
          <Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                <span>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
          </Overlay>
          <Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle center={center} fillColor="blue" radius={200} />
              <Circle
                center={center}
                fillColor="red"
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[59.913868, 10.752245]}
                  color="green"
                  fillColor="green"
                  radius={2000}
                />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Feature group">
            <FeatureGroup color="purple">
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={[59.913868, 10.752245]} radius={200} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>

        <Marker position={[this.state.routes.route1.startLat,this.state.routes.route1.startLong]}>
          <Popup>
              {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
          </Popup>
        </Marker>
      </Map>
    )
  }
}

