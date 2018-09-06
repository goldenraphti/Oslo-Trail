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


class Catalog extends Component {


    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <MapUI />
                
            </div>
        );
    }

}

export default Catalog