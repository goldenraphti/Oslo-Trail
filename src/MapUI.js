import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import L from 'leaflet';
import { Map,
    Circle,
    Polyline,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Marker,
    Popup,
    Rectangle,
    TileLayer,
    GeoJSON} from 'react-leaflet'
import Leaflet from 'leaflet'
import { Polyline as LeafletPolyline } from 'leaflet'
// in the markers use "iconStart" for the start marker icon, and "iconFinish" for the finish marker icon
import {  iconStart, iconFinish,iconWater, iconWC , iconViewPoint  } from './Icons';



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
              type: 'loop',
          }
      },
      
  }


componentDidMount() {
}




  render() {
      
    const position = [this.state.initialView.lat, this.state.initialView.lng]
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
        transport: {
            nameTile: 'transport',
            url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
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
          <BaseLayer name={layers.outdoors.nameTile}>
            <TileLayer
              attribution={layers.outdoors.attribution}
              url={layers.outdoors.url}
            />
          </BaseLayer>
          <BaseLayer name={layers.transport.nameTile}>
            <TileLayer
              attribution={layers.transport.attribution}
              url={layers.transport.url}
            />
          </BaseLayer>
          
            <GeoJSON key='route-1' data={this.props.mellomkollen} 
                  color="var(--palette-1-3)"
                  fillColor="var(--palette-1-3)"/>
            <GeoJSON key='route-2' data={this.props.helvetebrua}
                  color="var(--palette-1-3)"
                  fillColor="var(--palette-1-3)" />
          
          <Overlay checked name="Marker with popup">
           
            <Marker position={[this.props.mellomkollenMarker1[1],this.props.mellomkollenMarker1[0]]} 
                 title= 'Tour of Mellomkollen'
                    icon={ iconStart }
              >
              <Popup>
                  {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
              </Popup>
            </Marker>
            
            <Marker position={[this.props.helvetebruaMarker1[1],this.props.helvetebruaMarker1[0]]} 
                 title= 'Tour of Mellomkollen'
                    icon={ iconStart }
                zIndexOffset= '1000'
              >
              <Popup>
                  {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
              </Popup>
            </Marker>

          
          <Marker position={[this.props.helvetebruaMarker2[1],this.props.helvetebruaMarker2[0]]} 
                 title= 'Tour of Mellomkollen'
                    icon={ iconFinish }
                zIndexOffset= '-1000'
              >
              <Popup>
                  {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
              </Popup>
            </Marker>

            <Marker position={[this.props.mellomkollenWater[1],this.props.mellomkollenWater[0]]} 
                     title= 'Tour of Mellomkollen'
                        icon={ iconWater }
                    zIndexOffset= '-1000'
                  >
                  <Popup>
                      {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
                  </Popup>
            </Marker>
            
            <Marker position={[this.props.helvetebruaMarkerView[1],this.props.helvetebruaMarkerView[0]]} 
                     title= 'Tour of Mellomkollen'
                        icon={ iconViewPoint }
                    zIndexOffset= '-1000'
                  >
                  <Popup>
                      {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
                  </Popup>
            </Marker>
            <Marker position={[this.props.helvetebruaMarkerWC[1],this.props.helvetebruaMarkerWC[0]]} 
                     title= 'Tour of Mellomkollen'
                        icon={ iconWC }
                    zIndexOffset= '-1000'
                  >
                  <Popup>
                      {this.state.routes.route1.name}<br /> {this.state.routes.route1.distance}km | {this.state.routes.route1.climb} m+
                  </Popup>
            </Marker>
          </Overlay>

          
        </LayersControl>
      </Map>
    )
  }
}

