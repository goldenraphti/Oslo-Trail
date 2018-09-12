import React, { Component } from 'react';
import L from 'leaflet';
import { Map,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Marker,
    Popup,
    TileLayer,
    GeoJSON,
       ZoomControl} from 'react-leaflet'
import Leaflet from 'leaflet'
// in the markers use "iconStart" for the start marker icon, and "iconFinish" for the finish marker icon
import {  iconStart, iconFinish,iconWater, iconWC , iconViewPoint  } from './Icons';

const { BaseLayer, Overlay } = LayersControl





export default class MapUI extends Component {
  state = {
      initialView : {
        lat: 59.913868,
        lng: 10.752245,
        zoom: 10,
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
    
    expandToolPanel = (e) => {
        e.preventDefault();
        const toolPanel = document.getElementById('catalog-panel');
        if (toolPanel.hasAttribute('class', 'hidden')) {
            toolPanel.removeAttribute('class','hidden') ;
            document.getElementById('open-tool-button').classList.add('hidden')
            document.getElementById('close-tool-button').classList.remove('hidden')
        }else {
            toolPanel.setAttribute('class','hidden')
            document.getElementById('open-tool-button').classList.remove('hidden')
            document.getElementById('close-tool-button').classList.add('hidden')
        };
    }
    
    expandToolSection = (e) => {
        e.preventDefault();
        // hides the previously displayed form-section
        const formSectionAll = document.getElementsByClassName('form-section-hideable');
        for (const section of formSectionAll) {
            section.classList.contains('hidden') ? null : section.classList.add('hidden');
        }
        // takes the id of the button clicked
        const buttonID = e.target.id;
        // cleans the button ID to keep ony the first word so can add container to it and then use it directly inb literal expression
//        let containerID = buttonID.slice(0, -11).
        const suffix = '-container';
        let containerID = buttonID.split('-')[0].concat(suffix);
        document.getElementById(containerID).classList.remove('hidden');
        
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

               {/* if want to hide the automatic leaflet zoom control: add "zoomControl= curlybrace false closecurlybrace" */}
                <Map center={position} zoom={this.state.initialView.zoom} id="map-container" >
                
                <button id="open-tool-button" className="tool-button" onClick={ e => this.expandToolPanel(e)} >
                </button>
                
                    {/* <ZoomControl position="topright" /> */}
                
                
               <LayersControl position="bottomright">
                 
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
              
              
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerStart' || marker.properties.markerType === 'markerFinish' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                    
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerWater' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerWC' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
                   
                    {markersListToDisplay.filter(marker => marker.properties.markerType === 'markerViewPoint' ).map( (marker) => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}
              
              
                </LayersControl>
            </Map>
            

                
           <form id="catalog-panel" className="hidden">
                <div id="tool-icons-column">
                    <button id="close-tool-button" className="tool-button" onClick={ e => this.expandToolPanel(e)} ></button>
                    <button id="search-tool-button" className="tool-button" onClick={ e => this.expandToolSection(e)}  ></button>
                    <button id="layers-tool-button" className="tool-button"  onClick={ e => this.expandToolSection(e)}  ></button>
                    <button id="filters-tool-button" className="tool-button" onClick={ e => this.expandToolSection(e)} ></button>
                    <button id="markers-tool-button" className="tool-button" onClick={ e => this.expandToolSection(e)}  ></button>
                </div>
                   <div id="content-tool-panel">
                      <div id="search-container" className="form-section form-section-hideable hidden">
                       </div>
                       <div id="layers-container" className="form-section form-section-hideable hidden">
                       </div>
                       <div id="filters-container" className="form-section form-section-hideable hidden">
                            <h2>Filters</h2>
                          
                           <div className="filter-div range-slider">
                              <h3>Distance (km)</h3>
                               <div className="range-slider-column">
                                  <span className="range-input-value" id="span-value-input-distance">-</span>
                                   <input  onChange={e => this.props.updateVal(e.target)} className="range-slider__range"  id="input-distance" type="range" min="0" max="150" step="5"></input>
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
                                        <input  onChange={e => this.props.updateVal(e.target)} className="" id="input-loop"  type="checkbox" checked={this.props.filterLoop} title="loop"></input>
                                       <label>Loop</label>
                                    </div>
                                      <div className="checkbox-div">
                                        <input  onChange={e => this.props.updateVal(e.target)} className="" id="input-traversee"  type="checkbox" checked={this.props.filterTraversee}  title="traversee"></input>
                                       <label>Traversee</label>
                                    </div>
                                </div>
                            </div> 
                       </div>
                       <div id="markers-container" className="form-section form-section-hideable hidden">
                            <h2>Markers</h2>
                            
                            <div className="markers-checkbox-container">
                                <div className="checkbox-row">
                                   <div class="marker-checkbox-description">
                                       <img src={require('./images/start-finish-tool-colored.svg')} alt=""/>
                                       <p id="start-finish-description">Start/Finish</p>
                                   </div>
                                    <input aria-labelledby="start-finish-description" onChange={e => this.props.updateValMarker(e.target)} className="" id="input-marker-start-finish"  type="checkbox" checked={this.props.markerStartFinish}></input>
                                </div>
                                <div className="checkbox-row">
                                   <div class="marker-checkbox-description">
                                       <img src={require('./images/water-tool-colored.svg')} alt=""/>
                                       <p id="water-description">Drinkable water</p>
                                   </div>
                                    <input aria-labelledby="water-description" onChange={e => this.props.updateValMarker(e.target)} className="" id="input-marker-water"  type="checkbox" checked={this.props.markerWater}></input>
                                </div>
                                <div className="checkbox-row">
                                   <div class="marker-checkbox-description">
                                       <img src={require('./images/wc-tool-colored.svg')} alt=""/>
                                       <p id="wc-description">WC</p>
                                   </div>
                                    <input aria-labelledby="wc-description" onChange={e => this.props.updateValMarker(e.target)} className="" id="input-marker-wc"  type="checkbox" checked={this.props.markerWC}></input>
                                </div>
                                <div className="checkbox-row">
                                   <div class="marker-checkbox-description">
                                       <img src={require('./images/view-point-tool-colored.svg')} alt=""/>
                                       <p id="view-points-description">View Points</p>
                                   </div>
                                    <input aria-labelledby="view-points-description" onChange={e => this.props.updateValMarker(e.target)} className="" id="input-marker-view-point"  type="checkbox" checked={this.props.markerViewPoint}></input>
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
                   </div>
              </form>
            
          </div>
    )
  }
}

