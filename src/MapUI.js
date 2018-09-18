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

    
    componentDidMount() {
//        console.log('inside mapUI - ComponentDidMount' , this.state)
    }

    componentWillReceiveProps() {
//        console.log('inside mapUI - componentWillReceiveProps' , this.state, this.props)
    }

    componentDidUpdate() {
//        console.log('inside mapUI - ComponentDidUpdate', this.state, this.props)
    }


    iconToDisplay = (marker) => {
        
        if( marker.marker.properties.markerIcon === 'markerStart') {
            return iconStart;
        } else if( marker.marker.properties.markerIcon === 'markerFinish') {
            return iconFinish;
        } else if( marker.marker.properties.markerIcon === 'markerWC') {
            return iconWC;
        } else if( marker.marker.properties.markerIcon === 'markerWater') {
            return iconWater;
        } else if( marker.marker.properties.markerIcon === 'markerViewPoint') {
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
    
    // array of type of Markers to go through when rendering page to create its correspinding markers ( and checking in state if should be displayed or not)
    const markersTypeToRender = [ 'markerStartFinish' , 'markerWater', 'markerWC', 'markerViewPoint' ];
    
    return (

                <Map center={position} zoom={this.state.initialView.zoom} id="map-container" >
                
                <button id="open-tool-button" className="tool-button" onClick={ e => this.expandToolPanel(e)} >
                </button>
                

                {/* create the layer corresponding with the type of layer selected and updated in state */}
                <TileLayer
                  attribution="Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url={`https://tile.thunderforest.com/${this.props.layer}/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5`}
                />
                    
              
                   
               {this.props.routesToDisplay.map( route => (
                   <GeoJSON key={route.properties.name} data={route} 
                      color="var(--palette-1-3)"
                      fillColor="var(--palette-1-3)"/>
                ))}
                
                {/* go through the array containing the possible types of markers to display, and display the ones that should depending of their status in state */}
                {this.props.markersToDisplay.filter(marker => this.props[marker.properties.markerType]).filter( marker => this.props.routeNamesToDisplay.includes(marker.properties.route)).map( marker => (
                        <Marker position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} 
                                 title= {marker.properties.name}
                                icon={ this.iconToDisplay({marker}) }
                                zIndexOffset= '-1000'
                                key = {marker.properties.name}
                              >
                        </Marker>
                    ))}

            </Map>
    )
  }
}

