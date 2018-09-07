import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import L from 'leaflet';
import MapUI from './MapUI';
import {
    FeatureGroup,
    Circle,
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
// using webpack json loader we can import our geojson file like this
import geojsonRoute from './routesData'
import routeGrefsenkollen from './routes/test-grefsenkollen'



class Catalog extends Component {
    
    
    state = {
    }
    
    componentDidMount() {
        console.log('geojsonRoute' , geojsonRoute)
        console.log('test-grefsenkollen-2' , routeGrefsenkollen)
        console.log('test-grefsenkollen-2-1' , routeGrefsenkollen.features[0] , 'name' , routeGrefsenkollen.features[0].properties.name , 'array' , routeGrefsenkollen.features[0].geometry.coordinates )
        console.log('test-grefsenkollen-2-2' , routeGrefsenkollen.features[1])
    }




    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <MapUI
                    route1test = {geojsonRoute}
                    routeGrefsenkollen = {routeGrefsenkollen.features[0]}
                    routeWyllerløypa = {routeGrefsenkollen.features[1]}
                  />
                
            </div>
        );
    }

}

export default Catalog