import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import L from 'leaflet';
import MapUI from './MapUI';
import Footer from './Footer'
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
import routesData from './routes/routesData'



class Catalog extends Component {
    
    
    state = {
    }
    
    componentDidMount() {
        console.log('routesData-2' , routesData);
        console.log('routesData-2-marker-1' , routesData.features[1].geometry.coordinates)
    }




    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <MapUI
                    mellomkollen = {routesData.features[0]}
                    mellomkollenMarker1 = {routesData.features[1].geometry.coordinates}
                    helvetebrua = {routesData.features[2]}
                    helvetebruaMarker1 = {routesData.features[3].geometry.coordinates}
                    helvetebruaMarker2 = {routesData.features[4].geometry.coordinates}
                  />
                  
                  <Footer />
                
            </div>
        );
    }

}

export default Catalog