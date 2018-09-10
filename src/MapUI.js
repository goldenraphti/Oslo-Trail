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

//.map( element => console.log('markers to display', element.properties.name) )




    componentDidMount() {
    }

    iconToDisplay = (marker) => {
        
        if( marker.marker.properties.markerType === 'markerStart') {
            return iconStart;
        } else if( marker.marker.properties.markerType === 'markerFinish') {
            return iconFinish;
        } else if( marker.marker.properties.markerType === 'markerWC') {
            return iconWC;
        } else if( marker.marker.properties.markerType === 'markerWater') {
            return iconWater;
        } else if( marker.marker.properties.markerType === 'markerViewPoint') {
            return iconViewPoint;
        } 
    }


  render() {
      
      // gives the initial view
    const position = [this.state.initialView.lat, this.state.initialView.lng]
    
    //list of map layers ( TO BE REFACTORED AND ADDED DYNAMICALLY)
    const layers = {
        landscape: {
            nameTile: 'landscape',
            url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
            attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
            initiallyChecked :true
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
    
    const layersRefactored = `            
            {this.layers.map( layer => (
                <BaseLayer checked name={layers.landscape.nameTile}>
                    <TileLayer
                      attribution={layers.landscape.attribution}
                      url={layers.landscape.url}
                    />
              </BaseLayer>
            ))}`
     
    let markersListToDisplay = this.props.listToDisplay.filter(element => element.properties.featureType === 'marker' ) ;
      let routesToDisplay = this.props.listToDisplay.filter(element => element.properties.featureType === 'route' ) 
    
    return (
        
          <div id="map-form-container">

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
                    
              
                   
                   {routesToDisplay.map( route => (
                       <GeoJSON key={route.properties.name} data={route} 
                          color="var(--palette-1-3)"
                          fillColor="var(--palette-1-3)"/>
                    ))}
              
              
                  <Overlay name="Start/Finish">
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerStart' || marker.properties.markerType === 'markerFinish' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                    
                    </ Overlay>
                    
                   <Overlay name="Point to refill water">
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerWater' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                  </Overlay>
                  <Overlay name="WC">
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerWC' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                  </Overlay>
                  <Overlay name="View points">
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerViewPoint' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                  </Overlay>
              
              
                </LayersControl>
            </Map>
            
              <form id="catalog-panel">
              
                   <div id="filters form-section">
                        <h2>Filters</h2>
                      
                       <div className="filter-div range-slider">
                          <h3>Distance (km)</h3>
                           <div className="range-slider-column">
                              <span className="range-input-value" id="span-value-input-distance">-</span>
                               <input  onChange={e => this.props.updateVal(e.target)} className="range-slider__range"  id="input-distance" type="range" min="0" max="100" step="5"></input>
                           </div>
                        </div>
              
                        <div className="filter-div range-slider">
                          <h3>Climb (m+)</h3>
                           <div className="range-slider-column">
                               <span className="range-input-value" id="span-value-input-climb">-</span>
                                <input  onChange={e => this.props.updateVal(e.target)} className="range-slider__range"  id="input-climb" type="range" min="0" max="3000" step="10"></input>
                            </div>
                        </div>
              
                        <div className="filter-div checkbox-container">
                          <h3>Type of route</h3>
                            <div className="checkbox-column">
                                <div className="checkbox-div">
                                   <label>Loop</label>
                                    <input  onChange={e => this.props.updateVal(e.target)} className="" id="input-loop"  type="checkbox" checked={this.props.filterLoop} title="loop"></input>
                                </div>
                                  <div className="checkbox-div">
                                   <label>Traversee</label>
                                    <input  onChange={e => this.props.updateVal(e.target)} className="" id="input-traversee"  type="checkbox" checked={this.props.filterTraversee}  title="traversee"></input>
                                </div>
                            </div>
                        </div> 
                   </div>
                    <div id="list-routes" className="form-section">
                        <h2>Routes list</h2>
                        <ul>
                            {this.props.listToDisplay.filter(route => route.properties.featureType === 'route' ).map( (route) => (
                                <li key={route.properties.name} onClick={e => this.props.selectRoute(route.properties.route)}><button type="button" href="#">{route.properties.route}</button></li>
                            ))}
                        </ul>
                        <div id="clear-filters" className="link" role="button" onClick={e => this.props.clearFilters()} ><button type="button">Show all routes</button></div>
                    </div>
              </form>
            
          </div>
    )
  }
}

